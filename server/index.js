require('newrelic');
const { Pool, Client } = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
//const Description = require('../database/description.js');

const app = express();
const PORT =  3000;

const connection = 'postgresql://postgres:@localhost:5432/sdcdb';
const Description  = new Client(connection);

Description.connect();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, '..', '/public')));

app.get('/:id', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

app.get('/data/:id', (req, res) => {
  //let id = Math.floor(Math.random() * 10000000);
  let id = req.params.id;
  Description.query(`SELECT * from ajd WHERE id= ${id}`, (err, description) => {
      if (err) {
        console.log('Error');
        res.status(504).send("Error")
      } else{
        res.send(JSON.stringify(description.rows[0]))
      }
   })
});

// app.post('/', (req, res) => {

// });


app.listen((PORT), () => {
  console.log(`listening on port + ${PORT}`);
});