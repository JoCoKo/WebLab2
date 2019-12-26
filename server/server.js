const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const {insert, deleteCity, selectAll, findOne} = require('./db');

const appid = 'a922dbf9e4f67bdf3c204274271b9d94';

const app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/weather', function (req, res) {
  let url = new URL('https://api.codetabs.com/v1/proxy');
  url.search = new URLSearchParams({
    quest: `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${appid}`
  }).toString();
  fetch(url)
    .then(data => data.json())
    .then((data) => res.json(data))
    .catch(() => res.status(500).end());
});

app.get('/weather/coordinates', function (req, res) {
  let url = new URL('https://api.codetabs.com/v1/proxy');
  url.search = new URLSearchParams({
    quest: `https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&appid=${appid}`
  }).toString();
  fetch(url)
    .then(data => data.json())
    .then((data) => res.json(data))
    .catch(() => res.status(500).end());
});

app.get('/favorites', async function (req, res) {
  try {
    res.json(await selectAll());
  } catch (err) {
    res.status(500).end();
  }
});

const contain = async (city) =>
  (await selectAll()).reduce((flag, {name}) => name === city ? true : flag || false, false);

app.post('/favorites', async function (req, res) {
  try {
    if (! await contain(req.body.city)) {
      const data = JSON.parse(await insert(req.body.city)).ops[0];
      res.json((data));
    } else res.json(await findOne(req.body.city)).end()
  } catch (err) {
    res.status(500).end();
  }
});

app.delete('/favorites', async function (req, res) {
  try {
    await deleteCity(req.body.id);
    res.json('deleted');
  } catch (err) {
    res.status(500).end();
  }
});

app.listen(3012, function () {
  console.log("Server started");
});