const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const descriptionSchema = new mongoose.Schema({
  id: Number,
  name: String,
  bedrooms: String,
  beds: Number,
  baths: String,
  amenities: String
});

const Descrtion = mongoose.model('Description', descriptionSchema);

module.exports = Description;
