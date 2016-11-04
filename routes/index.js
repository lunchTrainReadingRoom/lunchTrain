var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//connect to local mongodb database
var db = mongoose.connect('mongodb://lunchTrainReadingRoom:readingroom69@ds143717.mlab.com:43717/lunch_train_db1');

//attach lister to connected event
mongoose.connection.once('connected', function() {
	
})

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
})

module.exports = router;
