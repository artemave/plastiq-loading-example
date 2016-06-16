const express = require('express');

var app = express();
var n = 1;

app.get('/bundle.js', (req, res) => {
  res.sendFile(__dirname + '/bundle.js');
});

app.get('/ajax', (req, res) => {
  setTimeout(() => {
    res.send({name: 'world ' + n++});
  }, 1000);
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 4322;

app.listen(port, function () {
  console.log(`listening on http://localhost:${port}/`);
});
