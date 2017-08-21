var express = require('express');
var path    = require("path");
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
var routes = require('./routers/route.js');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/routers');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(cookieParser());
app.use(session({secret: "Your secret key",
				 saveUninitialized: true,
        		 resave: false,
				 cookie:{maxAge:1000*60}}));

app.use('/routes', routes);

app.listen(8081); 