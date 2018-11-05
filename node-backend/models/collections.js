module.exports = function(router, con) {

  //GET ALL
  router.get('/api/collections', function (req, res) {
    var sql = "SELECT * FROM collections WHERE Active = true";
    var query = con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result)
    });
    console.log("SQL: " + query.sql)
  })

  //CREATE
  router.post('/api/collections', function (req, res) {
    var sql = "INSERT INTO collections (Name) VALUES (?)" ;
    console.log(req.body)
    var query = con.query(sql, [req.body.Name], function (err, result) {
      if (err) throw err;
      res.send(result[0])
    });
    console.log("SQL: " + query.sql)
  })

  //READ
  router.get('/api/collections/:id', function (req, res) {
    var sql = "SELECT * FROM collections WHERE Active = true AND CollectionId = ? ";
    var query = con.query(sql, [req.params.id], function (err, result) {
      if (err) throw err;
      res.send(result[0])
    });
    console.log("SQL: " + query.sql)
  })

  //UPDATE
  router.put('/api/collections/:id', function (req, res) {
    var sql = "UPDATE collections SET Name = ? WHERE CollectionID = ?;";
    var query = con.query(sql, [req.body.Name,req.params.id], function (err, result) {
      if (err) throw err;
      res.send(result[0])
    });
    console.log("SQL: " + query.sql)
  })

  //DELETE
  router.delete('/api/collections/:id', function (req, res) {
    var sql = "UPDATE collections SET Active = false WHERE CollectionID = ?" ;
    var query = con.query(sql, [req.params.id], function (err, result) {
      if (err) throw err;
      res.send(result[0])
    });
    console.log("SQL: " + query.sql)
  })

};