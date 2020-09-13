//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var app = express();

// define server port number
var PORT = process.env.PORT || 8080;

// app.use(express.static('views/images'));
app.use(express.static(__dirname + '/public'));

// needed to get burgers variable over to burgers_controller
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var for controller
var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// start app on port specified above
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});