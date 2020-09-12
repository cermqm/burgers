var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var connection = require("./.env/mysqlconnection.js")


var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(__dirname + '/public'));
app.use(express.static('views/images'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var connection;

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     // connection = mysql.createConnection("mysql: //pct3t68lgirgnaeh:nud4z6qrl7t2b7qc@w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ld9qt83xeqbpgxyt");
//     connection = mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "cermqm",
//         password: "cermqm",
//         database: "burgers_db"
//     });
// }

// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }

//     console.log("connected as id " + connection.threadId);
// });

// Use Handlebars to render the main index.html page with the burgers in it.
app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
            return res.status(500).end();
        }

        console.log(data);

        res.render("index", { burger: data });
    });
});

// Order a Burger
app.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger, devoured) VALUES (?, ?)", [req.body.burger, false], function(err, result) {
        if (err) {
            console.log("error = ", err.message);
            return res.status(500).end();
        }

        // Send back the ID of the new Burger
        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
    });
});

// Retrieve all burgers
app.get("/api/burgers", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
        if (err) {
            return res.status(500).end();
        }

        res.json(data);
    });
});

// Devour a Burger
app.put("/api/burgers/:id", function(req, res) {
    console.log("in server.js Devour a Burger - req.params.id = " + req.params.id);
    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [true, req.params.id], function(err, result) {
        if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
        } else if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();

    });
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});