require("dotenv").config();
const mongoose = require("mongoose");
const AWS = require("aws-sdk");
const ExifImage = require("exif").ExifImage;
const Fraction = require('fraction.js');

//Importing Model
const Tags = require("../models/tag");
const Photo = require("../models/photo");

exports.photos_get_all = async (req, res, next) => {
  await Photo.find()
    .select("-__v") // will exclude __v from fetch
    .populate("tags", "tag") // populates tag information from table, restricts to just tag field
    .then(files => {
      const response = {
        count: files.length,
        Photos: files.map(file => {
          return {
            _id: file._id,
            title: file.title,
            caption: file.caption,
            location: file.location,
            tagsCount: file.tags.length,
            tags: file.tags,
            size: file.size,
            store: file.store,
            captureDate: file.captureDate,
            camera: file.camera,
            lens: file.lens,
            aperature: file.aperature,
            focalLength: file.focalLength,
            shutterSpeed: file.shutterSpeed,
            iso: file.iso,
            originalName: file.originalName,
            uploadPhoto: file.uploadPhoto,
            request: {
              type: "GET",
              description: "GET photo details",
              url: process.env.URL + "/photos/" + file.id
            }
          };
        })
      };
      //if (files.length >= 0) {
      res.status(200).json(response);
      // } else {
      //     res.status(404).json({
      //         message: 'No photo details found, Enter photo details'
      //     })
      // }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.photos_upload_photo = (req, res, next) => {
  console.log(req.file);
  const s3FileURL = process.env.AWS_UPLOADED_FILE_URL_LINK;
  let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });
  var params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
    ACL: "public-read"
  };
  s3bucket.putObject(params, function(err, data) {
    if (err) {
      res.status(500).json({ error: true, Message: err });
    } else {
      try {
        new ExifImage({ image: req.file.buffer }, function(error, exifData) {
          if (error) console.log("Error: " + error.message);
          else {
            //cleanging up metadata from image before inserting into MongoDB
            //creating valid ISODate out of metadata string
            const oldCaptureDate = exifData.exif.CreateDate;
            const year = oldCaptureDate.substring(0, 4);
            const month = oldCaptureDate.substring(5, 7);
            const day = oldCaptureDate.substring(8, 10);
            const time = oldCaptureDate.substring(11, 19);
            const newCaptureDate = year + "-" + month + "-" + day + "T" + time;

            //metadata not working for Yongnuo lens. correcting on server side
            function isYongnuoLens(a){
              if (exifData.exif.LensModel == "50mm") {
                return a = "Yongnuo YN 50mm F1.8";
              } else {
                return a = exifData.exif.LensModel;
              }
            }
            const newLens = isYongnuoLens(exifData.exif.LensModel);

            const newAperature = "f/" + exifData.exif.FNumber;
            const newFocalLength = exifData.exif.FocalLength + "mm";

            //converting shutter speed decimal to fraction
            const shutterSpeedDecimal = new Fraction(exifData.exif.ExposureTime);
            const newShutterSpeed = shutterSpeedDecimal.toFraction(true);

            //logging metadata from image
            //console.log(exifData);
            console.log("captureDate: " + newCaptureDate);
            console.log("camera: " + exifData.image.Model);
            console.log("lens: " + newLens);
            console.log("aperature: " + newAperature);
            console.log("focalLength: " + newFocalLength);
            console.log("shutterSpeed: " + newShutterSpeed);
            console.log("iso: " + exifData.exif.ISO);

            Tags.findById(req.body.tags)
              .then(tags => {
                if (!tags) {
                  return res.status(404).json({
                    message: "Tag not found"
                  });
                }
                if (req.body.size === "null") {
                  return res.status(404).json({
                    message: "Size not found"
                  });
                }
                const photo = new Photo({
                  _id: new mongoose.Types.ObjectId(),
                  title: req.body.title,
                  caption: req.body.caption,
                  location: req.body.location,
                  tagsCount: req.body.tags.length,
                  tags: req.body.tags,
                  size: req.body.size,
                  store: req.body.store,
                  captureDate: newCaptureDate,
                  camera: exifData.image.Model,
                  lens: newLens,
                  aperature: newAperature,
                  focalLength: newFocalLength,
                  shutterSpeed: newShutterSpeed,
                  iso: exifData.exif.ISO,
                  originalName: req.file.originalname,
                  uploadPhoto: s3FileURL + req.file.originalname
                });
                Tags.bulkWrite([
                  {
                    updateMany: {
                      filter: { _id: photo.tags },
                      update: {
                        $push: { photos: photo._id }
                      }
                    }
                  }
                ])
                  .then(result => {
                    // populates tag information from table, restricts to just tag field
                    photo.populate("tags", "tag", async function(err) {
                      const result = await photo.save();
                      console.log(result);
                      res.status(201).json({
                        message: "Photo created",
                        createdPhoto: {
                          _id: result._id,
                          title: result.title,
                          caption: result.caption,
                          location: result.location,
                          tagsCount: result.tags.length,
                          tags: result.tags,
                          size: result.size,
                          store: result.store,
                          captureDate: result.captureDate,
                          camera: result.camera,
                          lens: result.lens,
                          aperature: result.aperature,
                          focalLength: result.focalLength,
                          shutterSpeed: result.shutterSpeed,
                          iso: result.iso,
                          originalName: result.originalName,
                          uploadPhoto: result.uploadPhoto,
                          request: {
                            type: "GET",
                            description: "GET posted photo details",
                            url: process.env.URL + "/photos/" + result.id
                          }
                        }
                      });
                    });
                  })
                  .catch(err => {
                    console.log(err);
                    res.status(500).json({
                      message: "Tags not found",
                      error: err
                    });
                  });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  message: "Missing mandatory fields",
                  error: err
                });
              });
          }
        });
      } catch (error) {
        console.log("Error: " + error.message);
      }

      // Tags.findById(req.body.tags)
      //   .then(tags => {
      //     if (!tags) {
      //       return res.status(404).json({
      //         message: "Tag not found"
      //       });
      //     }
      //     if (req.body.size === "null") {
      //       return res.status(404).json({
      //         message: "Size not found"
      //       });
      //     }
      //     const photo = new Photo({
      //       _id: new mongoose.Types.ObjectId(),
      //       title: req.body.title,
      //       caption: req.body.caption,
      //       location: req.body.location,
      //       tagsCount: req.body.tags.length,
      //       tags: req.body.tags,
      //       size: req.body.size,
      //       captureDate: Date.now(),
      //       camera: req.file.camera,
      //       lens: req.file.lens,
      //       aperature: req.file.aperature,
      //       focalLength: req.file.focalLength,
      //       shutterSpeed: req.file.shutterSpeed,
      //       iso: req.file.iso,
      //       originalName: req.file.originalName,
      //       uploadPhoto: s3FileURL + req.file.originalname
      //     });
      //     Tags.bulkWrite([
      //       {
      //         updateMany: {
      //           filter: { _id: photo.tags },
      //           update: {
      //             $push: { photos: photo._id }
      //           }
      //         }
      //       }
      //     ])
      //       .then(result => {
      //         // populates tag information from table, restricts to just tag field
      //         photo.populate("tags", "tag", async function(err) {
      //           const result = await photo.save();
      //           console.log(result);
      //           res.status(201).json({
      //             message: "Photo created",
      //             createdPhoto: {
      //               _id: result._id,
      //               title: result.title,
      //               caption: result.caption,
      //               location: result.location,
      //               tagsCount: result.tags.length,
      //               tags: result.tags,
      //               size: result.size,
      //               captureDate: result.captureDate,
      //               camera: result.camera,
      //               lens: result.lens,
      //               aperature: result.aperature,
      //               focalLength: result.focalLength,
      //               shutterSpeed: result.shutterSpeed,
      //               iso: result.iso,
      //               originalName: result.originalName,
      //               uploadPhoto: result.uploadPhoto,
      //               request: {
      //                 type: "GET",
      //                 description: "GET posted photo details",
      //                 url: process.env.URL + "/photos/" + result.id
      //               }
      //             }
      //           });
      //         });
      //       })
      //       .catch(err => {
      //         console.log(err);
      //         res.status(500).json({
      //           message: "Tags not found",
      //           error: err
      //         });
      //       });
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     res.status(500).json({
      //       message: "Missing mandatory fields",
      //       error: err
      //     });
      //   });
    }
  });
};

exports.photos_get_photo = async (req, res, next) => {
  const id = req.params.photoId;
  await Photo.findById(id)
    .select("-__v") // will exclude __v from fetch
    .populate("tags", "tag") // populates tag information from table, restricts to just tag field
    .then(file => {
      console.log(file);
      if (file) {
        res.status(200).json({
          Photo: {
            _id: file._id,
            title: file.title,
            caption: file.caption,
            location: file.location,
            tagsCount: file.tags.length,
            tags: file.tags,
            size: file.size,
            store: file.store,
            captureDate: file.captureDate,
            camera: file.camera,
            lens: file.lens,
            aperature: file.aperature,
            focalLength: file.focalLength,
            shutterSpeed: file.shutterSpeed,
            iso: file.iso,
            originalName: file.originalName,
            uploadPhoto: file.uploadPhoto
          },
          request: {
            type: "GET",
            description: "GET all photo photos",
            url: process.env.URL + "/photos/"
          }
        });
      } else {
        res.status(404).json({ message: "Photo not found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.photos_update_photo = async (req, res, next) => {
  const photoid = req.params.photoId;
  // handles different types of patch requests
  const photoUpdateOps = {};
  const tagupdateOps = {};
  for (const ops of req.body) {
    photoUpdateOps[ops.prop] = ops.value;
    if (ops.prop === "tags") {
      tagupdateOps[ops.prop] = ops.value;
      console.log(tagupdateOps);
    }
  }
  await Photo.update({ _id: photoid }, { $set: photoUpdateOps })
    .exec()
    .then(result => {
      console.log(result);
      //delete old photo tags
      Tags.bulkWrite([
        {
          updateMany: {
            filter: { photos: { _id: photoid } },
            update: {
              $pull: { photos: photoid }
            }
          }
        }
      ])
        .then(result => {
          //add new photo tags
          Tags.bulkWrite([
            {
              updateMany: {
                filter: { _id: tagupdateOps.tags },
                update: {
                  $push: { photos: photoid }
                }
              }
            }
          ])
            .then(result => {
              //const id = req.params.photoId;
              Photo.findById(photoid)
                .select("-__v") // will exclude __v from fetch
                .populate("tags", "tag") // populates tag information from table, restricts to just tag field
                .then(file => {
                  console.log(file);
                  if (file) {
                    res.status(200).json({
                      message: "Photo updated",
                      updatedPhoto: {
                        _id: file._id,
                        title: file.title,
                        caption: file.caption,
                        location: file.location,
                        tagsCount: file.tags.length,
                        tags: file.tags,
                        size: file.size,
                        store: file.store,
                        captureDate: file.captureDate,
                        camera: file.camera,
                        lens: file.lens,
                        aperature: file.aperature,
                        focalLength: file.focalLength,
                        shutterSpeed: file.shutterSpeed,
                        iso: file.iso,
                        originalName: file.originalName,
                        uploadPhoto: file.uploadPhoto
                      },
                      request: {
                        type: "GET",
                        description: "GET all photo photos",
                        url: process.env.URL + "/photos/"
                      }
                    });
                  } else {
                    res.status(404).json({ message: "Photo not found" });
                  }
                })
                .catch(err => {
                  console.log(err);
                  res.status(500).json({
                    message: "Updated photo not found",
                    error: err
                  });
                });
              // res.status(200).json({
              //   message: "Photo updated",
              //   request: {
              //     type: "GET",
              //     description: "GET updated photo details",
              //     url: process.env.URL + "/photos/" + photoid
              //   }
              // });
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({
                message: "New tags did not update",
                error: err
              });
            });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            message: "Old tags were not removed successfully",
            error: err
          });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Photo update unsuccessful",
        error: err
      });
    });
};

exports.photos_delete_photo = async (req, res, next) => {
  const id = req.params.photoId;
  console.log(req.params);
  await Photo.findById(id)
    .select("-__v") // will exclude __v from fetch
    .populate("tags", "tag") // populates tag information from table, restricts to just tag field
    .then(file => {
      console.log(file);
      if (file) {
        console.log("success");
        let s3bucket = new AWS.S3({
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: process.env.AWS_REGION
        });
        var params = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: file.originalName
        };
        s3bucket.deleteObject(params, function(err, data) {
          if (err) {
            console.log(err);
            res.status(500).json({ error: err });
          } else {
            console.log(data); // successful response
            Photo.remove({ _id: id })
              .exec()
              .then(result => {
                res.status(200).json({
                  message: "Photo deleted",
                  request: {
                    type: "GET",
                    description: "GET all photos",
                    url: process.env.URL + "/photos",
                    body: { files_id: "ID" }
                  }
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({ message: "Photo was not deleted" });
              });
          }
        });
      } else {
        res.status(404).json({ message: "Photo not found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
