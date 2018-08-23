// IMPORT MYSQL CONNECTION
// ==================================================================
var connection = require("../config/connection.js")

// FUNCTIONS TO HELP WITH SQL SYNTAX
// ==================================================================
function printQuestionMarks(num) {
    var arr = [];
    
    for (var i = 0; i < num; i++) {
        arr.push("?")
    }

    return arr.toString();
} 

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if(Object.hasOwnproperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
        }
    }

    return arr.toString();
}

// OBJECT FOR SQL STATEMENTS
// ==================================================================
var orm = {
    selectAll: (tableInput, cb) => {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            
            cb(result);
        });
    },
    insertOne: (table, cols, vals, cb) => {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            
            cb(result);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {
        var queryString = "UPDATE " + table;

        queryString += "SET ";
        queryString += objToSql(objColVals);
        queryString += "WHERE ";
        queryString += condition;
        
        console.log(queryString)

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            
            cb(result);
        });
        
    },
    deleteOne: (table, condition, cb) => {
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE";
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if(err) {
                throw err;
            }
            
            cb(result);
        });
    }

};

// EXPORT THE ORM OBJECT FOR THE MODEL
// ==================================================================
module.exports = orm;