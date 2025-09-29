let express = require('express');
let app = express();

// Serve static files from public folder
app.use('/public', express.static(__dirname + '/public'));

// Serve index.html at root
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});




































 module.exports = app;
