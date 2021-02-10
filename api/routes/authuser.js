var express = require('express');
var router = express.Router();
const userModel = require('./../models/userModel');
const jwt = require('jsonwebtoken');
const passport = require('passport')
const bcrypt = require('bcryptjs')


// Login user

router.post('/', function(req, res,next) {
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



//Add new User
router.post('/add', function(req, res, next) {

  bcrypt.hash(req.body.Password, 10, (err,hashedPassword) => {
    if (err) console.log(err);

    const user = new userModel({
      Username: req.body.Username,
      Password: hashedPassword,
      Email: req.body.Email,
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      Fullname: req.body.Firstname + ' ' + req.body.Lastname,
      Gender: req.body.Gender,
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

module.exports = router;
