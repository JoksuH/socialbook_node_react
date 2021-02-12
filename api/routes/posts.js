const express = require('express');
const router = express.Router();
const postModel = require('./../models/postModel');
const userModel = require('./../models/userModel');

const mongoose = require('mongoose');


/* GET all Posts. */
router.get('/', function(req, res, next) {

  //Find all posts by user and their friends, populate in Comments with their author
  //Turn to lean() so that you can change likes to a number (different type of data)

  postModel.find({$or: [{'Author': req.user._id}, {"Author" : { $in: req.user.Friends}}]}).populate('Author').populate({path:'Comments', populate: { path: 'Author' }}).sort('-dateAdded').lean().exec((err, posts) => {
    if (err) throw err;

    //Change Id's of persons who liked the post to number of likes before returning
    posts.forEach((post, index) => {
      posts[index].Likes = post.Likes.length

    })
   // console.log(posts)
    res.send(JSON.stringify(posts));
  })
  
});

/* GET all Posts from another user */
router.get('/:Username', function(req, res, next) {

//  userModel.findOne({$and: [{'Username': req.params.Username}, {'Friends': req.user._id} ]}).exec((err, user) => {
  userModel.findOne({'Username': req.params.Username}).exec((err, user) => {
    if (err) { 
    res.status(404);
    return res.send('User Not Found');
  }

    if (user == null) {
      res.status(404);
      return res.send('User Not Found');
    }

    // Check if user is current user's friend before giving access

    let isInFriends = user.Friends.some((friend) => friend.equals(req.user._id))

    
    if (!isInFriends) {
      res.status(403);
      return res.send('User is not currently your friend');

    }

  //Find all posts by user and their friends, populate in Comments with their author
  //Turn to lean() so that you can change likes to a number (different type of data)

  postModel.find({$or: [{'Author': user._id}, {"Author" : { $in: user.Friends}}]}).populate('Author').populate({path:'Comments', populate: { path: 'Author' }}).sort('-dateAdded').lean().exec((err, posts) => {
    if (err) throw err;

    //Change Id's of persons who liked the post to number of likes before returning
    posts.forEach((post, index) => {
      posts[index].Likes = post.Likes.length

    })
   // console.log(posts)
    res.send(JSON.stringify(posts));
  })
  
});

});


//Get Specific Post by ID
router.get('/:postID', function(req, res, next) {
  postModel.findOne({'_id': req.params.postID}).exec((err, result) => { 
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});


//Add new Post
router.post('/add', function(req, res, next) {

    const post = new postModel({
    Author: req.user._id,
    Body: req.body.body,
  });

    post.save(err => {
      if (err) throw err;

      userModel.findOne({'Username': req.user.Username}).exec((err, result) => { 
        if (err) throw err;
        let posts = result.Posts;
        posts.push(post.id);
        result.Posts = posts;

        result.save(err => {
          if (err) throw err;
        });
      });

    });
});



//Delete a Post
router.delete('/:postID', function(req, res, next) {
  console.log(req.params.postID)
  postModel.deleteOne({'_id': req.params.postID}).exec((err, result) => { 
    if (err) throw err;
    res.send(`Article with the id ${req.params.postID} deleted`);
  });
});
  


module.exports = router;
