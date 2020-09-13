// include mysqlconnection configuration
var connection = require('./mysqlconnection')


// orm for this.selectAll, insertone and updateone
var orm = {

    selectAll: function(callback) {
        connection.query('SELECT * FROM burgers', function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },

    insertOne: function(burger, callback) {
        connection.query('INSERT INTO burgers (burger, devoured) VALUES (?, ?)', [burger, false], function(err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    updateOne: function(ID, callback) {
        connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [true, ID], function(err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};


module.exports = orm;