var express = require('express');
var bodyParser = require('body-parser'); // Require body-parser
var app = express();

// Use body-parser to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// Root-level logger middleware
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Middleware to add the current time to the request object
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  res.json({ time: req.time });
});

// Echo server
app.get('/:word/echo', function(req, res) {
  const word = req.params.word; // Capture the word from the URL
  res.json({ echo: word });     // Respond with the word in JSON format
});

// Get query parameters
app.get('/name', function(req, res) {
  const firstName = req.query.first;  // Capture first name from query string
  const lastName = req.query.last;    // Capture last name from query string
  res.json({ name: `${firstName} ${lastName}` }); // Respond with full name
});

// POST handler to capture form data
app.post('/name', function(req, res) {
  const firstName = req.body.first;  // Capture first name from request body
  const lastName = req.body.last;    // Capture last name from request body
  res.json({ name: `${firstName} ${lastName}` }); // Respond with full name
});

// Serve static HTML file
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// JSON response with optional uppercase message
app.get('/json', function(req, res) {
  const messageStyle = process.env.MESSAGE_STYLE;
  const message = messageStyle === 'uppercase' ? 'HELLO JSON' : 'Hello json';
  res.json({ message: message });
});

module.exports = app;
