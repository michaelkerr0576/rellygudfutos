const mongoose = require("mongoose");

const TagSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  tag: { type: String, required: true },
  photos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Photo",
    },
  ],
});

module.exports = mongoose.model("Tag", TagSchema);
