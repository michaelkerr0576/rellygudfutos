const mongoose = require("mongoose");

const PhotoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  // user input
  title: { type: String, required: true },
  caption: { type: String, required: true },
  location: { type: String, required: true },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
      required: true,
      // validate: v => v == null || v.length > 0  // workaround for required: true
    },
  ],
  size: { type: String, required: true },
  store: { type: String, required: true },
  // taken from photo metadata
  captureDate: {
    type: Date,
    default: "1900-01-01T10:10:10.123Z",
    required: true,
  },
  camera: { type: String, required: true },
  lens: { type: String, required: true },
  aperature: { type: String, required: true },
  focalLength: { type: String, required: true },
  shutterSpeed: { type: String, required: true },
  iso: { type: String, required: true },
  originalName: { type: String, required: true },
  uploadPhoto: { type: String, required: true },
});

module.exports = mongoose.model("Photo", PhotoSchema);
