
/*
  Pseudo code - to serve as a help guide.
*/
const faker = require('faker');
const copyFrom = require('pg-copy-streams').from;
const Readable = require('stream').Readable;
const { Pool,Client } = require('pg');
const fs = require('fs');
//const path = require('path');
//const datasourcesConfigFilePath = path.join(__dirname,'..','..','server','datasources.json');
//const datasources = JSON.parse(fs.readFileSync(datasourcesConfigFilePath, 'utf8'));

// const pool = new Pool({
//     user: datasources.PG.user,
//     host: datasources.PG.host,
//     database: datasources.PG.database,
//     password: datasources.PG.password,
//     port: datasources.PG.port,
// });

const connection = 'postgresql://postgres:@localhost:5432/sdcdb';
const db = new Client(connection);
let amenitiesArr = ["Pool", "Spa", "Laundry", "Parking", "Heating", "Wifi"];
let checkIn = ["keypad", "lockbox", "smartlock"]
let optionsArr = ["Entire house", "Entire apartment", "Entire Townhouse"]
let percent = [90,91,92,93,94,95,96,97,98];
db.connect();

const bulkInsert = (size) => {
  //db.connect().then(client=>{
    let done = () => {
      console.log("done function");
      stream.end();
      //db.release();
    }
    var stream = db.query(copyFrom('COPY ajd FROM STDIN'))
    var rs = new Readable;
    let x = size;
    rs._read = function () {
      if (x === size + 100000) {
        rs.push(null);
      } else {
      var imageUrl = faker.image.avatar();
      var Owner = faker.name.findName();
      var houseName = faker.lorem.word();
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
      x++;
      if(x % 10000 === 0){

        console.log(x)};
      }
    };
    let onError = strErr => {
      console.error('Something went wrong:', strErr);
      done();
    };
    rs.on('error', onError);
    stream.on('error', onError);
    stream.on('end',done);
    rs.pipe(stream);
  //});
}
for(let i = 0; i <= 10000000; i += 100000){
bulkInsert(i);
}