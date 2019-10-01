const mongoose = require("mongoose");

const photoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  size: { type: String, required: true },
  uploadDate: { type: Date, default: '1900-01-01T10:10:10.123Z', required: true },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
      required: true
      //validate: v => v == null || v.length > 0  // workaround for required: true
    }
  ],
  uploadPhoto: { type: String, required: true }
});

module.exports = mongoose.model("Photo", photoSchema);
