const db  = require('./index.js');
const Description = require('./description.js');

const sampleData = [
 { id: 1,
  Owner: "Bob Loblaw",
  houseName: "Beach House",
  description: "Full house overlooking the ocean...",
  bedrooms: 5,
  beds: 5,
  guests: 10,
  baths: 4,
  amenities: "Pool, Spa"
}


]


const insertSampleData = function() {
  Description.create(sampleData)
    .then(() => db.disconnect());
};

insertSampleData();