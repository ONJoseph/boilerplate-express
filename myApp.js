var express = require('express');
var app = express();
var path = require('path');

// Serve static files from the "public" directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve the index.html file at the root path "/"
app.get('/', function(req, res) {
  var absolutePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});

// Serve JSON at the "/json" route
app.get('/json', function(req, res) {
    res.json({
      message: "Hello json"
    });
  });

module.exports = app;
