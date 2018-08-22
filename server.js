// DEPENDENCIES
// ===================================================
var express = require("express");
var bodyParser = require("body-parser")

// EXPRESS
// ===================================================
var app = express();
var PORT = process.env.PORT || 8080

// LISTENER
// ===================================================
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
})