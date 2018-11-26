//const Description = require('./description.js'); schema
const fs = require('fs');
//const csv = require('fast-csv');
const { Pool, Client } = require('pg');
const { Readable } = require('stream');
const faker = require('faker');
const copyFrom =require('pg-copy-streams').from;

const connection = 'postgresql://postgres:@localhost:5432/sdcdb';
const db = new Client(connection);

db.connect();


let x = 1;
let amenitiesArr = ["Pool", "Spa", "Laundry", "Parking", "Heating", "Wifi"];
let checkIn = ["keypad", "lockbox", "smartlock"]
let optionsArr = ["Entire house", "Entire apartment", "Entire Townhouse"]
let percent = [90,91,92,93,94,95,96,97,98];

const stream = db.query(copyFrom('COPY ajd FROM STDIN'))
const inStream = new Readable({
  read() {
    if (x <= 10000000) {
      var imageUrl = faker.image.avatar();
      var Owner = faker.name.findName();
      var houseName = faker.lorem.sentence();
      var description = faker.lorem.paragraph();
      var bedrooms = Math.floor(Math.random() * 5) + 1;
      let beds = bedrooms;
      var guests = beds * 2;
      var baths = Math.floor(Math.random() * beds) + 1;
      var amenities = amenitiesArr[Math.floor(Math.random() * amenitiesArr.length)]
      var type = optionsArr[Math.floor(Math.random() * optionsArr.length)];
      var lock = checkIn[Math.floor(Math.random() * checkIn.length)];
      var rate = percent[Math.floor(Math.random() * checkIn.length)];

      this.push(`${x}\t${imageUrl}\t${Owner}\t${houseName}\t${type}\t${description}\t${bedrooms}\t${beds}\t${guests}\t${baths}\t${amenities}\t${"n/a"}\t${lock}\t${rate}\n`);
      if(x % 10000 === 0){console.log(x)};
      x++;

    } else {
      console.log("Done Seeding");
      this.push(null);

    }
  },
});
stream.on('end', () => `Done seeding ${x} entries`);
inStream.on('end', () => `Done seeding ${x} entries`);
// inStream.on('finished', () => `Done seeding ${x} entries`);
// inStream.on(null, () => `Done seeding ${x} entries`);
inStream.pipe(stream);
