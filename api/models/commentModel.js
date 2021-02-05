const mongoose = require('mongoose');

const comment = mongoose.model('Comment', new mongoose.Schema({
    username: {type: String, required: true},
    comment: {type: String, required: true},
    article: mongoose.Schema.Types.ObjectId,
    dateAdded: {type: Date, required: true}
  }))
  

module.exports = comment;


//Maybe reply to?
