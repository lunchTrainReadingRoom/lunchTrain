var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//connect to local mongodb database
var db = mongoose.connect('mongodb://lunchTrain:readingroom@ds143717.mlab.com:43717/lunch_train_db1');
var Train = require('../models/train');

router.all('/add', function(req, res, next) {
  // create a new user	
	var train = new Train({
	  conductor: req.query.conductor,
	  destination: req.query.destination,
	  time: req.query.time,
	  notes: req.query.notes
	});
  

	// call the built-in save method to save to the database
	train.save(function(err) {
	  if (err) throw err;
	  console.log('Train saved successfully!');
	});
});

router.get('/getAll', function(req, res, next) {
  console.log(req);
  
  Train.find({}, function(err, trains) {
  	res.send(trains);
  })
});

module.exports = router;
