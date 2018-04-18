const express = require ("express");
const path = require ("path");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api/routes")
//const ratingRoutes = require("./routes/api/ratingRoutes")
const PORT = process.env.PORT || 8080;

const configRoutes = require("./routes/payment");
configRoutes(app);

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
    next();
    }
    };
    
app.use(allowCrossDomain);


app.use(express.static("./client/build"));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
// Serve up static assets

// Add routes, both API and view
app.use(routes);

app.listen(PORT, function(){
    console.log(`Server now on port ${PORT}`)
})




// Set up promises with mongoose
mongoose.Promise = global.Promise;
 // mongoose.set('debug', false) // enable logging collection methods + arguments to the console
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/GamingGurus"

);


