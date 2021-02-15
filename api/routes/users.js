var express = require("express");
var router = express.Router();
const userModel = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const bcrypt = require("bcryptjs");

/* GET all Users. */
router.get("/friendsuggestions", function (req, res, next) {
  // Find users who are currently not friends with the active user or are the active user
  userModel
    .find({
      $or: [
        {
          _id: { $nin: req.user.Friends },
          Username: { $not: { $eq: req.user.Username } },
        },
      ],
    })
    .limit(8)
    .exec((err, users) => {
      if (err) throw err;
      res.send(JSON.stringify(users));
    });
});

router.get("/listfriends", function (req, res, next) {
  // Get all the friends of current user

  userModel.find({ _id: { $in: req.user.Friends } }).exec((err, users) => {
    if (err) throw err;
    res.send(JSON.stringify(users));
  });
});

//Get current user info
router.get("/myinfo", function (req, res, next) {
  userModel.findOne({ _id: req.user._id }).exec((err, user) => {
    if (err) throw err;
    res.send(JSON.stringify(user));
  });
});

//Edit Current users info
router.put("/myinfo", function (req, res) {
  console.log('HERERERER')
  userModel.findOne({ _id: req.user._id }).exec((err, user) => {
    if (err) throw err;

    console.log(user)

    user.Username = req.body.Username;
    user.Email = req.body.Email;
    user.Firstname = req.body.Firstname;
    user.Lastname = req.body.Lastname;
    user.Fullname = req.body.Firstname + " " + req.body.Lastname;
    user.Gender = req.body.Gender;
    user.Birthday = req.body.Birthday;
    user.Avatar = req.body.Avatar;

    user.save((err) => {
      if (err) throw err;
      res.send(JSON.stringify(user));
    });
  });
});

//Get friends requests of the current user

router.get("/friendrequests", function (req, res, next) {

  userModel
    .findOne({ _id: req.user._id })
    .populate("Friendrequests", "Fullname Username Avatar")
    .exec((err, user) => {
      if (err) throw err;
      res.send(JSON.stringify(user));
    });
});

//Get Specific User by ID

router.get("/search/:searchterm", function (req, res, next) {
  userModel
    .find({ Fullname: { $regex: req.params.searchterm, $options: "i" } })
    .limit(6)
    .exec((err, users) => {
      if (err) throw err;
      res.send(JSON.stringify(users));
    });
});

//Send a friend request to specified user

router.put("/requestfriend/:userID", function (req, res, next) {
  userModel.findOne({ _id: req.params.userID }).exec((err, user) => {
    if (err) throw err;

    user.Friendrequests.push(req.user.id);
    user.save((err) => {
      if (err) throw err;
      res.send("OK");
    });
  });
});

//Accept friend request, remove request and add both to each other's friends

router.put("/acceptfriend/:userID", function (req, res, next) {
  userModel.findOne({ _id: req.user.id }).exec((err, user) => {
    if (err) throw err;

    user.Friendrequests = user.Friendrequests.filter(
      (friend) => friend._id != req.params.userID
    );
    user.Friends.push(req.params.userID);
    user.save((err) => {
      if (err) throw err;

      userModel.findOne({ _id: req.params.userID }).exec((err, friend) => {
        if (err) throw err;
        friend.Friends.push(req.user.id);

        friend.save((err) => {
          if (err) throw err;
          res.send("OK");
        });
      });
    });
  });
});

router.put("/rejectfriend/:userID", function (req, res, next) {
  userModel.findOne({ _id: req.user.id }).exec((err, user) => {
    if (err) throw err;

    user.Friendrequests = user.Friendrequests.filter(
      (friend) => friend._id != req.params.userID
    );
    user.save((err) => {
      if (err) throw err;
      res.send("OK");
    });
  });
});

//Remove a friend from current user
router.put("/removefriend/:userID", function (req, res, next) {
  userModel.findOne({ _id: req.user.id }).exec((err, user) => {
    if (err) throw err;
    const newFriendList = user.Friends.filter(
      (friend) => friend._id != req.params.userID
    );
    user.Friends = newFriendList;
    user.save((err) => {
      if (err) throw err;
      res.send("OK");
    });
  });
});

//Delete a User
router.delete("/:userID", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
