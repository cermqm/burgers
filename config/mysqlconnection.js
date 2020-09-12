var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // connection = mysql.createConnection("mysql: //pct3t68lgirgnaeh:nud4z6qrl7t2b7qc@w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ld9qt83xeqbpgxyt");
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "cermqm",
        password: "cermqm",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;