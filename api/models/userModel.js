const mongoose = require('mongoose');

const user = mongoose.model('User', new mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true, match: /\w+@\w+.\w+/},
    Firstname: {type: String, required: true},
    Gender: {type: String, required: true},
    Lastname: {type: String, required: true},
    Birthday: {type: String, required: true},
    Joined: {type: Date, default: Date.now},
    Friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
    Posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'post'}],
    Avatar: {data: Buffer, contentType: String}
  }))
  

module.exports = user;
