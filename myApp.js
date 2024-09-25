var express = require('express');
var path = require('path');
require('dotenv').config(); // Load environment variables

var app = express();

// Serve static files from the "public" directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve the index.html file at the root path "/"
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve JSON at the "/json" route
app.get('/json', function(req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({
    message: message
  });
});

module.exports = app;
