module.exports = function(router,con) {

  router.get('/api/items', function (req, res) {
    var sql = "select * from items where Active = true";
    var query = con.query(sql, function (err, result) {
      if (err) throw err;
      res.send(result)
    });
    console.log("SQL: " + query.sql)
  })

  //GET ALL In Collection
  router.get('/api/items/collection/:id', function (req, res) {
    var sql = "select * from items where CollectionID = ? AND Active = true";  
    var query = con.query(sql,[req.params.id], function (err, result) {
      if (err) throw err;
      res.send(result)
    });
    console.log("SQL: " + query.sql)
  })

  //CREATE
  router.post('/api/items', function (req, res) {
    var sql = "INSERT INTO items (Name, Price, Collected, CollectionID) VALUES (?, ?, ?, ?)" ;
    var query = con.query(sql, [req.body.Name, req.body.Price, req.body.Collected, req.body.CollectionId], function (err, result) {
      if (err) throw err;
      UpdateCollectionByItemId(result.insertId);
      res.send(result[0]);
    });
    console.log("SQL: " + query.sql)
  })

  //READ
  router.get('/api/items/:id', function (req, res) {
    var sql = "SELECT * FROM items WHERE ItemID = ?";  
    var query = con.query(sql,[req.params.id], function (err, result) {
      if (err) throw err;
      res.send(result[0])
    });
    console.log("SQL: " + query.sql)
  })

  //Update
  router.put('/api/items/:id', function (req, res) {
    var sql = "UPDATE items SET Name = ?, Price = ?, Collected = ? WHERE ItemID = ?";
    var query = con.query(sql, [req.body.Name, req.body.Price, req.body.Collected, req.params.id], function (err, result) {
      if (err) throw err;
      res.send(result[0])
      UpdateCollectionByItemId(req.params.id);
    });
    console.log("SQL: " + query.sql)
  })

  //Delete
  router.delete('/api/items/:id', function (req, res) {
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

};