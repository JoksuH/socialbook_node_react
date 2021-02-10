var express = require('express');
var router = express.Router();
const userModel = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const passport = require('passport')
const bcrypt = require('bcryptjs')



/* GET all Users. */
router.get('/friendsuggestions', function(req, res, next) {

  // Find users who are currently not friends with the active user or are the active user
  userModel.find({$or: [{_id: {$nin: req.user.Friends}, Username: {$not: {$eq: req.user.Username }}}]}).limit(8).exec((err, users) => {
    if (err) throw err;
    res.send(JSON.stringify(users));
  })
});

router.get('/listfriends', function(req, res, next) {

// Get all the friends of current user

userModel.find({_id: {$in: req.user.Friends}}).exec((err, users) => {
    if (err) throw err;
    res.send(JSON.stringify(users));
  })
});


//Get Specific User by ID
router.get('/', function(req, res, next) {
  userModel.findOne({'Username': req.user.Username}).exec((err, user) => {
    if (err) throw err;
    res.send(JSON.stringify(user));
  })
  
});

//Get Specific User by ID
router.get('/friendrequests', function(req, res, next) {
  console.log('request shows ups')

  userModel.findOne({'Username': req.user.Username}).populate('Friendrequests', 'Fullname Avatar').exec((err, user) => {
    console.log(user)
    if (err) throw err;
    res.send(JSON.stringify(user));
  })
  
});

//Get Specific User by ID
router.get('/search/:searchterm', function(req, res, next) {
  
  userModel.find({'Fullname': {$regex:  req.params.searchterm, $options: "i"}}).limit(5).exec((err, users) => {
    console.log(users)
    if (err) throw err;
    res.send(JSON.stringify(users));
  })
  
});


//Send a friend request to specified user
router.put('/requestfriend/:userID', function(req, res, next) {
  userModel.findOne({'_id': req.params.userID}).exec((err, user) => {

    if (err) throw err;
    console.log(typeof(user.Friendrequests))
   /* if (user.Friendrequests.includes(req.user.id))
      res.status(403);
    else if (user.Friend.includes(req.user.id))
      res.status(403);
    else */
    user.Friendrequests.push(req.user.id);
     user.save(err => {
      if (err) throw err;
      res.send('OK')
  });

  })
});

//Remove a friend from current user
router.put('/removefriend/:userID', function(req, res, next) {
  userModel.findOne({'_id': req.user.id}).exec((err, user) => {
    if (err) throw err;
    const newFriendList = user.Friends.filter(friend => friend._id != req.params.userID);
    user.Friends = newFriendList;
     user.save(err => {
      if (err) throw err;
      res.send('OK')
  });
  })
});

//Delete a User
router.delete('/:userID', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
