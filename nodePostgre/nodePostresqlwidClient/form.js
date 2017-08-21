var express = require('express');
var path    = require("path");
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();
app.use('/public', express.static(path.join(__dirname, 'public'))) // place all html here

app.get('/', function(req, res){
     res.sendFile(path.join(__dirname+'/public/form.html')); //one way of doing
    // res.sendFile('form.html')
});


// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 


// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});
app.listen(8081); 