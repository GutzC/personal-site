var express = require('express');
var q = require('q');
var app = express();

app.use(express.static(__dirname + "/public"));

var port = 9091;

app.listen(port, function() {
    console.log("Listening to port " + port);
});