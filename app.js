const express = require('express');
const compression = require('compression');

var app = express();
app.use(compression());

var n = 1;

app.get('/ajax', (req, res) => {
  setTimeout(() => {
    res.send({name: 'world ' + n++});
  }, 1000);
});

app.get('/plastiq/bundle.js.map', (req, res) => {
  res.sendFile(__dirname + '/plastiq/bundle.js.map');
});

app.get('/plastiq/bundle.js', (req, res) => {
  res.sendFile(__dirname + '/plastiq/bundle.js');
});

app.get('/plastiq*', (req, res) => {
  res.sendFile(__dirname + '/plastiq/index.html');
});

app.get('/elm/compiled.js', (req, res) => {
  res.sendFile(__dirname + '/elm/compiled.js');
});

app.get('/elm*', (req, res) => {
  res.sendFile(__dirname + '/elm/index.html');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 4322;

app.listen(port, function () {
  console.log(`listening on http://localhost:${port}/`);
});
