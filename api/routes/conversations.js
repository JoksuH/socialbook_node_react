const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const messageModel = require("./../models/messageModel");
const conversationModel = require("./../models/conversationModel");

// Get all open conversations for the current user
router.get("/", function (req, res) {
  conversationModel
    .find({ Participants: req.user._id })
    .populate("Participants", "Fullname Avatar")
    .exec((err, conversations) => {
      if (err) throw err;
      res.send(JSON.stringify(conversations));
    });
});

// Add a new active conversation to current user

router.post("/", function (req, res) {
  const conversation = new conversationModel({
    Participants: req.body.Participants,
  });
  conversation.save((err) => {
    if (err) throw err;
    res.send(JSON.stringify(conversation));
  });
});

//Add latest comment to conversation's list
router.put("/:conversationID", function (req, res, next) {
  conversationModel
    .findOne({ _id: req.params.conversationID })
    .exec((err, conversation) => {
      if (err) throw err;
      console.log(conversation)
      //Participants[1] is current user, [0] is the friend
      const message = new messageModel({
        Author: conversation.Participants[1],
        Recipient: conversation.Participants[0],
        Message: req.body.Message
      })
      message.save(err => {
        if(err) throw err
        conversation.Messages.push(message._id);
        conversation.LastMessage = Date.now()
        conversation.save((err) => {
          if (err) throw err;
  
          res.send("Message added");
        });
  
      })
    });
});

router.delete("/:conversationID", function (req, res, next) {
  conversationModel
    .deleteOne({ _id: req.params.conversationID })
    .exec((err) => {
      if (err) throw err;
 
          res.send("Message added");
        });
  
      })


module.exports = router;
