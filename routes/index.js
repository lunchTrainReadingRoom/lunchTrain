var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//connect to local mongodb database
var db = mongoose.connect('mongodb://lunchTrain:readingroom@ds143717.mlab.com:43717/lunch_train_db1');
var User = require('../models/user');
  
// create a new user called test
var test = new User({
  name: 'test',
  username: 'lunchTrain',
  password: 'readingroom' 
});

// call the built-in save method to save to the database
test.save(function(err) {
  if (err) throw err;
  console.log('User saved successfully!');
});

//attach lister to connected event
mongoose.connection.once('connected', function() {
	console.log('mongoose connection established');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
});

module.exports = router;
