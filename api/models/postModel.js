const mongoose = require('mongoose');

const post = mongoose.model('post', new mongoose.Schema({
    Author: {type: String, required: true},
    Body: {type: String, required: true},
    dateAdded: {type: Date, default: Date.now},
    Likes: [{type:mongoose.Schema.Types.ObjectId, ref: 'user', default: []}],
    Comments: [{type:mongoose.Schema.Types.ObjectId, ref: 'comment', default: []}]
  }))
  

module.exports = post;
