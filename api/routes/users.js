var express = require('express');
var router = express.Router();
const userModel = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const passport = require('passport')
const bcrypt = require('bcryptjs')



/* GET all Users. */
router.get('/friendsuggestions', function(req, res, next) {

  // Find users who are currently not friends with the active user
  userModel.find({id: {$nin: req.user.Friends}}).exec((err, users) => {
    if (err) throw err;
    res.send(JSON.stringify(users));
  })
});

router.post('/auth', function(req, res,next) {
  passport.authenticate('local', {session:false}, (err,user,info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something wrong with the user',
        user: user
      });
    }
    req.login(user, {session:false}, (err) => {
      if (err) res.send(err)

      const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET);
      return res.json({token});
      });

  })(req,res,next);
  
});

//Get Specific User by ID
router.get('/', function(req, res, next) {
  console.log(req.user.Username)
  userModel.find({'Username': req.user.Username}).exec((err, user) => {
    if (err) throw err;
    res.send(JSON.stringify(user));
  })
  
});



//Add new User
router.post('/', function(req, res, next) {

  bcrypt.hash(req.body.Password, 10, (err,hashedPassword) => {
    if (err) console.log(err);

    const user = new userModel({
      Username: req.body.Username,
      Password: hashedPassword,
      Email: req.body.Email,
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      Birthday: req.body.Birthday,
      Friends: [],
      Posts: [],
      Joined: new Date().toLocaleString()
});

  user.save(err => {
    if (err) throw err;
    res.send('User Added')
  });
});
});

//Edit a User
router.put('/:userID', function(req, res, next) {
    res.send('respond with a resource');
});

//Delete a User
router.delete('/:userID', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
