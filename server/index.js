const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/dbMethods.js');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/reviews', (req, res) => {
  db.get(req, res);
});

app.post('/reviews', (req, res) => {
  console.log(req.body)
  db.save(req.body, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
