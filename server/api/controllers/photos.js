require("dotenv").config();
const mongoose = require("mongoose");
const AWS = require("aws-sdk");

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
            size: file.size,
            tagsCount: file.tags.length,
            tags: file.tags,
            uploadDate: file.uploadDate,
            uploadPhoto: file.uploadPhoto,
            request: {
              type: "GET",
              description: "GET photo details",
              url: "http://localhost:5000/photos/" + file.id
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
            size: req.body.size,
            tagsCount: req.body.tags.length,
            tags: req.body.tags,
            uploadDate: Date.now(),
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
                    size: result.size,
                    tagsCount: result.tags.length,
                    tags: result.tags,
                    uploadDate: result.uploadDate,
                    uploadPhoto: result.uploadPhoto,
                    request: {
                      type: "GET",
                      description: "GET posted photo details",
                      url: "http://localhost:5000/photos/" + result.id
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
            size: file.size,
            tagsCount: file.tags.length,
            tags: file.tags,
            uploadDate: file.uploadDate,
            uploadPhoto: file.uploadPhoto
          },
          request: {
            type: "GET",
            description: "GET all photo photos",
            url: "http://localhost:5000/photos/"
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
                        size: file.size,
                        tagsCount: file.tags.length,
                        tags: file.tags,
                        uploadDate: file.uploadDate,
                        uploadPhoto: file.uploadPhoto
                      },
                      request: {
                        type: "GET",
                        description: "GET all photo photos",
                        url: "http://localhost:5000/photos/"
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
              //     url: "http://localhost:5000/photos/" + photoid
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
  await Photo.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Photo deleted",
        request: {
          type: "GET",
          description: "GET all photos",
          url: "http://localhost:5000/photos",
          body: { files_id: "ID" }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
