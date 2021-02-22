const mongoose = require("mongoose");

const message = mongoose.model(
  "message",
  new mongoose.Schema({
    Author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    Recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    Message: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now },
  })
);

module.exports = message;
