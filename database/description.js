
const db = require('./index.js');


const sdcdb =
  `CREATE TABLE IF NOT EXISTS ajd(
  id: Number,
  imageUrl: String,
  Owner: String,
  houseName: String,
  full: String,
  description: String,
  bedrooms: Number,
  beds: Number,
  guests: Number,
  baths: Number,
  amenities: String,
  city: String,
  lock: String,
  rate: Number
  )`;

//const Description = mongoose.model('Description', descriptionSchema);

module.exports = Description;


