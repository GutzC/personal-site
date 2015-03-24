var express = require('express');
var app = express();

app.use(express.static(__dirname + "/Public"));

var port = 9090;

app.listen(port, function() {
    console.log("Listening to port " + port);
});
