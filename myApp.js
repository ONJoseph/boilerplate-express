var express = require('express');
var app = express();
require('dotenv').config();

// Root-level logger middleware
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Middleware to add the current time to the request object
app.get('/now', function(req, res, next) {
  req.time = new Date().toString(); // Add time to req object
  next(); // Pass control to the next function in the chain
}, function(req, res) {
  res.json({ time: req.time }); // Respond with the time in JSON format
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
