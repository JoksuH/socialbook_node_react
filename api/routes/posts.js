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

//Edit a Post
router.put('/:postID', function(req, res, next) {
  console.log('PUT RECEIVED')
  postModel.findOne({'_id': req.params.postID}).exec((err, result) => { 
    if (err) throw err;

    result.Title = req.body.title;
    result.Body = req.body.body;
    result.Published = req.body.published;

    console.log(result)

    result.save(err => {
      if (err) throw err;
    });

    res.send('DONE');
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
