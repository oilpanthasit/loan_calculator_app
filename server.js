var express = require('express');
var app = express();
var path = require('path');

var index = require('./routes/index');

app.use('/', index);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/modules', express.static(__dirname + '/node_modules/'));
app.get('/', function (req, res) {
  res.send("TESTING");
})
app.listen(3000);
console.log("server running on port 3000");
