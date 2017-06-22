const express = require('express');
const app = express();

var cors = require('cors')
app.use(cors())

app.get('/getJson', (req, res) => {

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mytest";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  db.collection("saleRecord").find({}).toArray(function(err, result) {
    if (err) throw err;

    res.send(result);

    db.close();
  });

});

 
})

app.listen(8081, ()=> {
  console.log('listening on 8081')
})
