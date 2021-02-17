const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const messageModel = require('./../models/messageModel');


/* GET all Posts. */
router.get('/', function(req, res, next) {

  postModel.find({'Author': req.user.Username}).exec((err, posts) => {
    if (err) throw err;
    res.send(JSON.stringify(posts));
  })
  
});

//Get Specific Post by ID
router.get('/:postID', function(req, res, next) {
  postModel.findOne({'_id': req.params.postID}).exec((err, result) => { 
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});


//Edit Likes
router.put('/:postID', function(req, res, next) {

  postModel.findOne({'_id': req.params.postID}).exec((err, post) => { 
    if (err) throw err;

    const PreviousLikes = post.Likes;
    if (PreviousLikes.includes(req.user._id)) {
        res.status(301);
    }
    else {
        post.Likes.push(req.user._id)
        post.save(err => {
            if (err) throw err;
          });
      
          res.send('Like added');
      
    }

});
});

module.exports = router;
