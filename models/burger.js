// include orm.js
var orm = require('../config/orm.js');

var burger = {

    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },

    insertOne: function(burger, callback) {
        orm.insertOne(burger, function(res) {
            callback(res);
        });
    },

    updateOne: function(id, callback) {
        orm.updateOne(id, function(res) {
            callback(res);
        });
    }

};

module.exports = burger;