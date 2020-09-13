// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");

// Open Server
var PORT = process.env.PORT || 8080;

var app = express();

// app.use(express.static('views/images'));
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var router = require('./controllers/burgers_controller.js');
app.use('/', router);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});