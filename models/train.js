// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var trainSchema = new Schema({
  conductor: { type: String, required: true },
  destination: { type: String, required: true },
  //destination: { type: String, required: true, unique: true },
  time: { type: Date, required: true },
  notes: { type: String }  
});

// the schema is useless so far
// we need to create a model using it
var Train = mongoose.model('Train', trainSchema);

// make this available to our users in our Node applications
module.exports = Train;