const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema(
  {
    link: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;
