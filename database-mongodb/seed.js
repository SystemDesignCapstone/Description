const db  = require('./index.js');
const Description = require('./description.js');

const sampleData = [



]


const insertSampleData = function() {
  Description.create(sampleData)
    .then(() => db.disconnect());
};

insertSampleData();