const mongoose = require('mongoose');

const comment = mongoose.model('comment', new mongoose.Schema({
    Author: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    Comment: {type: String, required: true},
    ReplyTo: {type: mongoose.Schema.Types.ObjectId, ref: 'comment'},
    ParentPost: {type: mongoose.Schema.Types.ObjectId, ref: 'post'},
    dateAdded: {type: Date, default: Date.now}
  }))
  

module.exports = comment;


//Maybe reply to?
