var express = require('express');

var app = express();
app.use(express.static('public'));

app.listen(1337, function() {
  console.log('Boom! Server started at http://localhost:1337');
});
