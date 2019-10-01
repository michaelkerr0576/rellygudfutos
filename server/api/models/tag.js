const mongoose = require("mongoose");

const tagsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tag: { type: String, required: true },
  photos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Photo"
    }
  ]
});

module.exports = mongoose.model("Tag", tagsSchema);
