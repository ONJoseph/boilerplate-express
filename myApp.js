var express = require('express');
var app = express();
var path = require('path');

// Serve the index.html file at the root path "/"
app.get('/', function(req, res) {
  var absolutePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});

module.exports = app;
