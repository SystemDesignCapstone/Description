const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const descriptionSchema = new mongoose.Schema({
  id: Number,
  Owner: String,
  houseName: String,
  description: String,
  bedrooms: Number,
  beds: Number,
  guests: Number,
  baths: Number,
  amenities: String
});

const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description;
