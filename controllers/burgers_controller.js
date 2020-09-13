// include express and burger model
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// route to point root to index
router.get('/', function(req, res) {
    res.redirect('/index');
});

// route for index.handlebars - main page
router.get('/index', function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
});

// route for add burger
router.post('/burger/create', function(req, res) {
    // console.log("req = ", req);
    // console.log("req.body.burger = " + req.body.burger);
    burger.insertOne(req.body.burger, function() {
        res.redirect('/index');
    });
});

// route to update burger ad devoured
router.post('/burger/eat/:id', function(req, res) {
    burger.updateOne(req.params.id, function() {
        res.redirect('/index');
    });
});

module.exports = router;