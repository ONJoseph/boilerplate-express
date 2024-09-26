var express = require('express');
var app = express();
require('dotenv').config();

// Root-level logger middleware
app.use(function(req, res, next) {
  const logString = `${req.method} ${req.path} - ${req.ip}`;
  console.log(logString);
  next(); // Call the next middleware or route handler
});

// Routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', function(req, res) {
  const messageStyle = process.env.MESSAGE_STYLE;
  const message = messageStyle === 'uppercase' ? 'HELLO JSON' : 'Hello json';
  res.json({ message: message });
});

module.exports = app;
