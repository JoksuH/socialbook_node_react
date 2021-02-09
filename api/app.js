const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyparser = require('body-parser');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const user = require("./models/userModel");
const session = require('express-session');

const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;



require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/authuser');
const likesRouter = require('./routes/likes');



const app = express();

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.once("open", function () {
  console.log("Mongo connection succesfull");
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(cookieParser());
app.use(session({secret: 'cats'}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', passport.authenticate('jwt', {session:false}), usersRouter);
app.use('/user/auth', authRouter);
app.use('/comments', passport.authenticate('jwt', {session:false}), commentsRouter);
app.use('/posts', passport.authenticate('jwt', {session:false}), postsRouter);
app.use('/likes',passport.authenticate('jwt', {session:false}), likesRouter)



passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey : process.env.JWT_SECRET
},
    function (jwtPayload, cb) {

      return user.findOne({"_id": jwtPayload._id})
          .then(user => {
              return cb(null, user);
          })
          .catch(err => {
            console.log(err)
              return cb(err);
          });
    }
    ));

passport.use(
  new LocalStrategy(function (username, password, done) {
      return user.findOne({Username: username})
           .then(user => {
               if (!user) {
                   return done(null, false, {message: 'Incorrect email or password.'});
               }
               bcrypt.compare(password, user.Password, (err, res) => {
                if (res) {
                  return done(null, user);
                } else {
                  return done(null, false, { msg: "Incorrect password" });
                }
              });
          })
    }
));




passport.serializeUser(function (user, done) {
  console.log(user)
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  console.log(user.id)
  User.findById(id, function(err, user) {
      done(err, user);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
