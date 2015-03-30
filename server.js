var express = require('express');
var app = express();

app.use(express.static(__dirname + "/Public"));

app.listen(process.env.EXPRESS_PORT || 9090, function() {
    console.log("Listening to port " + port);
});
