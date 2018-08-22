// IMPORTING THE ORM
// ==================================================================
var orm = require("../config/orm.js");

// FUNCTION THAT WILL INTERACT WITH DATABASE
// ==================================================================
var burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (result) => {
            cb(result);
        });
    },
    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (result) => {
            cb(result);
        });
    },
    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, (result) => {
            cb(result);
        });
    }
};

// EXPORT DATABASE FUNCTIONS FOR THE CONTROLLER
// ==================================================================
module.exports = burger;