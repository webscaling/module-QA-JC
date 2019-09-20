require('newrelic');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const client = require('./db/db.js');

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/item', (req, res) => {
  let product = req.query.productid;
  client.query(`SELECT * from questions where prodid = ${product}`, (err, response) => {
  res.send(response.rows);
  })
});

const port = 3000;
app.listen(port, () => console.log(`QA component is connected on port: ${port}`));