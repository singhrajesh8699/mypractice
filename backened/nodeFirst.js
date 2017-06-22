var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mytest";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var data=[

 {
   "salesperson": "Bob",
   "sales": 33
 },
 {
   "salesperson": "Robin",
   "sales": 12
 },
 {
   "salesperson": "Anne",
   "sales": 41
 },
 {
   "salesperson": "Mark",
   "sales": 16
 },
 {
   "salesperson": "Joe",
   "sales": 59
 },
 {
   "salesperson": "Eve",
   "sales": 38
 },
 {
   "salesperson": "Karen",
   "sales": 21
 },
 {
   "salesperson": "Kirsty",
   "sales": 25
 },
 {
   "salesperson": "Chris",
   "sales": 30
 },
 {
   "salesperson": "Lisa",
   "sales": 47
 },
 {
   "salesperson": "Tom",
   "sales": 5
 },
 {
   "salesperson": "Stacy",
   "sales": 20
 },
 {
   "salesperson": "Charles",
   "sales": 13
 },
 {
   "salesperson": "Mary",
   "sales": 29
 }
]

	/*db.createCollection("saleRecord", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
    });*/

   db.collection("saleRecord").insert(data, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });

  /*db.collection("saleRecord").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });*/

  /*db.collection("saleRecord").findOne({"sales": 13}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });*/

  /*db.collection("saleRecord").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Table deleted");
    db.close();
  });*/

});