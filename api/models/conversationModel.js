const mongoose = require('mongoose');

const conversation = mongoose.model('conversation', new mongoose.Schema({
    Participants: [{type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true}],
    Messages: [{type: mongoose.Schema.Types.ObjectId, ref: 'message'}]
  }))
  

module.exports = conversation;


