const mongoose = require('mongoose');

const user = mongoose.model('user', new mongoose.Schema({
    Username: {type: String, required: true, unique: true},
    Password: {type: String, required: true},
    Avatar: {type: String},
    Email: {type: String, required: true, match: /\w+@\w+.\w+/, unique: true},
    Firstname: {type: String, required: true},
    Lastname: {type: String, required: true},
    Fullname: {type: String, required: true},
    Gender: {type: String, required: true},
    Birthday: {type: String, required: true},
    Joined: {type: Date, default: Date.now},
    Friends: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
    Friendrequests: [{type: mongoose.Schema.Types.ObjectId, ref: 'user'}],
    Posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'post'}],
  }))
  

module.exports = user;
