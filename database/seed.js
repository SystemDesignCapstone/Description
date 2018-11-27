
const faker = require('faker');
const fs = require('fs');
const fastcsv = require('fast-csv');


var seed = () => {

  var results  = [];
  for (var i = 5000001; i <= 10000000; i++) {
    //let amenitiesArr = ["Pool", "Spa", "Laundry", "Parking", "Heating", "Wifi"]
    //let checkIn = ["keypad", "lockbox", "smartlock"]
    let optionsArr = ["Entire house", "Entire apartment", "Entire Townhouse"]
    //let percent = [90,91,92,93,94,95,96,97,98];
    let beds = Math.floor(Math.random() * 10) + 1;
    let sampleData = {};
    sampleData.id = i;
    sampleData.amenities =  "Pool"; //amenitiesArr[Math.floor(Math.random() * amenitiesArr.length)]
    sampleData.baths = Math.floor(Math.random() * beds) + 1;
    sampleData.bedrooms = Math.floor(Math.random() * 5) + 1;
    sampleData.beds = beds;
    sampleData.description = faker.lorem.sentence();
    sampleData.guests = beds * 2; //w
    sampleData.houseName = faker.lorem.word();
    sampleData.imageurl = faker.image.avatar();
    sampleData.lock = "no";
    sampleData.owner = faker.name.findName();
    sampleData.rate = 80;
    sampleData.type = optionsArr[Math.floor(Math.random() * optionsArr.length)];


    results.push(sampleData);
    }
    return results;
}

var data = seed();
//console.log(data);
const sdcSeed = () => {
  console.time();
  const csvStream = fastcsv.createWriteStream({headers: false}),
    writableStream = fs.createWriteStream("seed2.csv");

  writableStream.on("finish", () => {
    console.log('CSV DONE!');
  });

  csvStream.pipe(writableStream);

  for (let i = 0; i < 5000000; i++) {
    csvStream.write(data[i]);
  }

  csvStream.end();
  console.timeEnd();
};


sdcSeed();