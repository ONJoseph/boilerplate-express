var express = require('express');
var app = express();

// Serve the string "Hello Express" at the root path "/"
app.get('/', function(req, res) {
  res.send("Hello Express");
});

module.exports = app;
