//Node.js server using Express, MySql

//Imports
var express = require('express');
const bodyParser = require("body-parser");

//Setting up app
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
app.listen(3000);


//Setting up database connection
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MyNewPass",
  database: "my_collection"
});
console.log("Server Started")


//root link
app.get('/', function (req, res) {
  res.send('Node.js Backend Server')
  console.log("Render './' - Home Page")
})


// MODELS Connections
require('./models/collections')(app, con);
require('./models/items')(app, con);