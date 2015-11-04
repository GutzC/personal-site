var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));
//var port = process.env.EXPRESS_PORT || 9090;
var port = 80;
app.listen(port, function() {
    console.log("Listening to port " + port);
});
