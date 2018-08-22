// DEPENDENCIES AND EXPRESS
// ==================================================================
    var express= require("express");
    var bodyParser = require("body-parser");
    
    var PORT = process.env.PORT || 8080;

    var app = express();

// SERVER STATIC CONTENT
// ==================================================================
app.use(express.static("public"));

// PARSE APPLICATION/X-WWW-FORM-URLENCODED & JSON
// ==================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// HANDLEBARS
// ==================================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// IMPORT AND ACCESS ROUTES
// ==================================================================
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// START SERVER
// ==================================================================
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});