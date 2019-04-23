var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb+srv://user1:0000@cluster1-hopvw.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var detailRouter = require('./routes/detailCourse');
var aboutRouter = require('./routes/about');
var allCourseRouter = require('./routes/allCourses');
var testRouter = require('./routes/test');
var learnTryRouter = require('./routes/learnTry');
var searchRouter = require('./routes/search');

var checkLoginMiddleware = require('./middleware/checkLogin.middleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('sdkfsdjfsdkfj'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',checkLoginMiddleware.checkLoggedIndex, indexRouter);
app.use('/search',checkLoginMiddleware.checkLoggedIndex, searchRouter);
app.use('/about',checkLoginMiddleware.checkLoggedIndex, aboutRouter);
app.use('/learntry',checkLoginMiddleware.checkLoggedIndex, learnTryRouter);
app.use('/courses',checkLoginMiddleware.checkLoggedIndex, allCourseRouter);
app.use('/detail',checkLoginMiddleware.checkLoggedIndex, detailRouter);
app.use('/test',checkLoginMiddleware.checkLoggedIndex, testRouter);
app.use('/users',checkLoginMiddleware.requireLogin, usersRouter);
app.use('/login',checkLoginMiddleware.checkLogged, loginRouter);
app.use('/signup',checkLoginMiddleware.checkLogged, signupRouter);


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
