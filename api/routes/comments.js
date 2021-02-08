var express = require('express');
var router = express.Router();
const commentModel = require('./../models/commentModel')
const postModel = require('./../models/postModel');

const mongoose = require('mongoose');


/* GET all Comments. */
router.get('/', function(req, res, next) {
  console.log('TEST')
  commentModel.find().exec((err, result) => { 
    if (err) throw err;
    console.log(result)
    res.send(JSON.stringify(result));
  });
});

//Get comments by articleID
router.get('/:articleID', function(req, res, next) {
  commentModel.find({article: req.params.articleID}).exec((err, result) => { 
    if (err) throw err;
    console.log(result)
    res.send(JSON.stringify(result));
  });
});

//Add new Comment
router.post('/', function(req, res, next) {
  console.log(req.body);

  const comment = new commentModel({
    Author: req.body.Author,
    Comment: req.body.Comment,
    ParentPost: req.body.ParentPost
});

comment.save(err => {
    if (err) throw err;
    postModel.findOne({'_id': req.body.ParentPost}).exec((err, result) => { 
      if (err) throw err;
  
      result.Comments.push(comment);
  
      result.save(err => {
        if (err) throw err;
      });

    res.status(200);
  });
  
});
});

//Edit a Comment
router.put('/:commentID', function(req, res, next) {
    res.send('respond with a resource');
});

//Delete a Comment
router.delete('/:commentID', function(req, res, next) {
    res.send('respond with a resource');
});
  

module.exports = router;
