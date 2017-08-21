
const express = require('express');
const app = express();
var pg = require("pg");
const Query = require('pg').Query

var cors = require('cors')
app.use(cors())

app.get('/getJson', (req, res) => {

		var conString = "pg://rajesh:rajesh@localhost:5432/rajesh";
		var client = new pg.Client(conString);
		client.connect((err) => {
		  if (err) {
		    console.error('connection error', err.stack)
		  } else {
		    console.log('connected')
		  }
		})


		// client.query("CREATE TABLE IF NOT EXISTS emps(firstname varchar(64), lastname varchar(64))");
		// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Ronald', 'McDonald']);
		// client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Mayor', 'McCheese']);
		const query = new Query('SELECT * FROM emps')

		const result = client.query(query)


		query.on('row', (row) => {
		  console.log('row!', row) // { name: 'brianc' }
		   res.send(row);
		})
		query.on('end', () => {
		  console.log('query done')
		})
		query.on('error', (err) => {
		  console.error(err.stack)
		})
		 
})

app.listen(8081, ()=> {
  console.log('listening on 8081')
})