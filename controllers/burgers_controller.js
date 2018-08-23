// DEPENDENCIES AND IMPORTING MODEL
// ==================================================================
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// ROUTES
// ==================================================================
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], (result) => {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;

    burger.deleteOne(condition, (result) => {
        if(result.affectedRows ==0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// EXPORT ROUTES FOR SERVER.JS
// ==================================================================
module.exports = router;