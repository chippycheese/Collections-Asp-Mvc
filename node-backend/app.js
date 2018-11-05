//Node.js server using Express, MySql
var express = require('express');
const bodyParser = require("body-parser");
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
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MyNewPass",
  database: "my_collection"
});
console.log("Server Started")

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('Node.js Backend Server')
  console.log("Render './' - Home Page")
})


//// COLLECTIONS

//GET ALL
app.get('/api/collections', function (req, res) {
  var sql = "SELECT * FROM collections WHERE Active = true";
  var query = con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result)
  });
  console.log("SQL: " + query.sql)
})

//CREATE
app.post('/api/collections', function (req, res) {
  var sql = "INSERT INTO collections (Name) VALUES (?)" ;
  console.log(req.body)
  var query = con.query(sql, [req.body.Name], function (err, result) {
    if (err) throw err;
    res.send(result[0])
  });
  console.log("SQL: " + query.sql)
})

//READ
app.get('/api/collections/:id', function (req, res) {
  var sql = "SELECT * FROM collections WHERE Active = true AND CollectionId = ? ";
  var query = con.query(sql, [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result[0])
  });
  console.log("SQL: " + query.sql)
})

//UPDATE
app.put('/api/collections/:id', function (req, res) {
  var sql = "UPDATE collections SET Name = ? WHERE CollectionID = ?;";
  var query = con.query(sql, [req.body.Name,req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result[0])
  });
  console.log("SQL: " + query.sql)
})

//DELETE
app.delete('/api/collections/:id', function (req, res) {
  var sql = "UPDATE collections SET Active = false WHERE CollectionID = ?" ;
  var query = con.query(sql, [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result[0])
  });
  console.log("SQL: " + query.sql)
})


/// ITEMS

//GET ALL
app.get('/api/items', function (req, res) {
  var sql = "select * from items where Active = true";
  var query = con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result)
  });
  console.log("SQL: " + query.sql)
})

//GET ALL In Collection
app.get('/api/items/collection/:id', function (req, res) {
  var sql = "select * from items where CollectionID = ? AND Active = true";  
  var query = con.query(sql,[req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result)
  });
  console.log("SQL: " + query.sql)
})

//CREATE
app.post('/api/items', function (req, res) {
  var sql = "INSERT INTO items (Name, Price, Collected, CollectionID) VALUES (?, ?, ?, ?)" ;
  var query = con.query(sql, [req.body.Name, req.body.Price, req.body.Collected, req.body.CollectionId], function (err, result) {
    if (err) throw err;
    UpdateCollectionByItemId(result.insertId);
    res.send(result[0]);
  });
  console.log("SQL: " + query.sql)
})

//READ
app.get('/api/items/:id', function (req, res) {
  var sql = "SELECT * FROM items WHERE ItemID = ?";  
  var query = con.query(sql,[req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result[0])
  });
  console.log("SQL: " + query.sql)
})

//Update
app.put('/api/items/:id', function (req, res) {
  var sql = "UPDATE items SET Name = ?, Price = ?, Collected = ? WHERE ItemID = ?";
  var query = con.query(sql, [req.body.Name, req.body.Price, req.body.Collected, req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result[0])
    UpdateCollectionByItemId(req.params.id);
  });
  console.log("SQL: " + query.sql)
})

//Delete
app.delete('/api/items/:id', function (req, res) {
  var sql = "UPDATE items SET Active = false WHERE ItemID = ?" ;
  var query = con.query(sql, [req.params.id], function (err, result) {
    if (err) throw err;
    UpdateCollectionByItemId(req.params.id);
    res.send(result[0])
  });
  console.log("SQL: " + query.sql)
})



function UpdateCollectionByItemId(id){
  var sql = "select * from items where ItemID = ?";
  var query = con.query(sql, [id], function (err, result) {
    if (err) throw err;
    UpdateCollection(result[0].CollectionId)
  });
  console.log("SQL: " + query.sql)
}


function UpdateCollection(id){
  var sql = "SELECT * from items where CollectionID = ? AND Active = true";
  var query = con.query(sql, [id], function (err, result) {
    if (err) throw err;

    collected = 0;
    total = 0;

    result.forEach(function(element) {
      if(element.Collected == 1){
        collected = collected + 1;
      }
      total = total + 1;
    });
    var sql2 = "UPDATE collections SET Collected = ?, Total = ? WHERE CollectionId = ?" ;
    var query2 = con.query(sql2, [collected, total, id], function (err, result) {
      if (err) throw err;
    });
    console.log("SQL: " + query2.sql)
  });
  console.log("SQL: " + query.sql)
}