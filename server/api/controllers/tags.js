const mongoose = require("mongoose");
require("dotenv").config();

// Importing Model
const Tag = require("../models/Tag");

exports.tags_get_all = async (req, res, next) => {
  await Tag.find()
    .select("-__v") // will exclude __v from fetch
    .populate("photos", "title") // populates photo information from table, restricts to just title field
    .exec()
    .then((tags) => {
      const response = {
        count: tags.length,
        Tags: tags.map((tag) => {
          return {
            _id: tag._id,
            tag: tag.tag,
            photosCount: tag.photos.length,
            photos: tag.photos,
            request: {
              type: "GET",
              description: "GET tag",
              url: process.env.VUE_APP_URL + "/tags/" + tag.id,
            },
          };
        }),
      };
      //if (tags.length >= 0) {
      res.status(200).json(response);
      // } else {
      //     res.status(404).json({
      //         message: 'No tags found, Enter tag'
      //     })
      // }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.tags_add_tag = async (req, res, next) => {
  const newTag = new Tag({
    _id: new mongoose.Types.ObjectId(),
    tag: req.body.tag,
    photos: req.body.photos,
  });
  await newTag
    .save()
    .then((tag) => {
      console.log(tag);
      res.status(201).json({
        message: "Created tag",
        createdTag: {
          _id: tag._id,
          tag: tag.tag,
          photosCount: tag.photos.length,
          photos: tag.photos,
          request: {
            type: "GET",
            description: "GET posted tag",
            url: process.env.VUE_APP_URL + "/tags/" + tag.id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.tags_get_tag = async (req, res, next) => {
  const id = req.params.tagId;
  console.log(req.params);
  await Tag.findById(id)
    .select("-__v") // will exclude __v from fetch
    .populate("photos", "-__v -tags") // populates photo information from table, excludes __v and tags
    .exec()
    .then((tag) => {
      console.log(tag);
      if (tag) {
        res.status(200).json({
          tag: tag.tag,
          photosCount: tag.photos.length,
          photos: tag.photos,
          request: {
            type: "GET",
            description: "GET all tags",
            url: process.env.VUE_APP_URL + "/tags",
          },
        });
      } else {
        res.status(404).json({ message: "No valid entry found" });
      }
    })
    .catch((err) => {
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
  await Tag.update({ _id: id }, { $set: updateOps })
    .exec()
    .then((tag) => {
      console.log(tag);
      res.status(200).json({
        message: "Tag updated",
        request: {
          type: "GET",
          description: "GET updated tag",
          url: process.env.VUE_APP_URL + "/tags/" + id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.tags_delete_tag = async (req, res, next) => {
  const id = req.params.tagId;
  await Tag.remove({ _id: id })
    .exec()
    .then((tag) => {
      res.status(200).json({
        message: "Tag deleted",
        request: {
          type: "GET",
          description: "GET all tags",
          url: process.env.VUE_APP_URL + "/tags",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
