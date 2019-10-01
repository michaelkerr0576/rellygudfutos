const mongoose = require("mongoose");

//Importing Model
const Tags = require("../models/tag");

exports.tags_get_all = async (req, res, next) => {
  await Tags.find()
    .select("-__v") // will exclude __v from fetch
    .populate("photos", "title") // populates photo information from table, restricts to just title field
    .exec()
    .then(files => {
      const response = {
        count: files.length,
        Tags: files.map(file => {
          return {
            _id: file._id,
            tag: file.tag,
            photosCount: file.photos.length,
            photos: file.photos,
            request: {
              type: "GET",
              description: "GET tag",
              url: "http://localhost:5000/tags/" + file.id
            }
          };
        })
      };
      //if (files.length >= 0) {
      res.status(200).json(response);
      // } else {
      //     res.status(404).json({
      //         message: 'No tags found, Enter tag'
      //     })
      // }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.tags_add_tag = async (req, res, next) => {
  const tags = new Tags({
    _id: new mongoose.Types.ObjectId(),
    tag: req.body.tag,
    photos: req.body.photos
  });
  await tags
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created tag",
        createdTags: {
          _id: result._id,
          tag: result.tag,
          photosCount: result.photos.length,
          photos: result.photos,
          request: {
            type: "GET",
            description: "GET posted tag",
            url: "http://localhost:5000/tags/" + result.id
          }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.tags_get_tag = async (req, res, next) => {
  const id = req.params.tagId;
  await Tags.findById(id)
    .select("-__v") // will exclude __v from fetch
    .populate("photos", "-__v -tags") // populates photo information from table, excludes __v and tags
    .exec()
    .then(file => {
      console.log(file);
      if (file) {
        res.status(200).json({
          tag: file.tag,
          photosCount: file.photos.length,
          photos: file.photos,
          request: {
            type: "GET",
            description: "GET all tags",
            url: "http://localhost:5000/tags"
          }
        });
      } else {
        res.status(404).json({ message: "No valid entry found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.tags_update_tag = async (req, res, next) => {
  const id = req.params.tagId;
  // handles different types of patch requests
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.prop] = ops.value;
  }
  await Tags.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: "Tag updated",
        request: {
          type: "GET",
          description: "GET updated tag",
          url: "http://localhost:5000/tags/" + id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.tags_delete_tag = async (req, res, next) => {
  const id = req.params.tagId;
  await Tags.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Tag deleted",
        request: {
          type: "GET",
          description: "GET all tags",
          url: "http://localhost:5000/tags"
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
