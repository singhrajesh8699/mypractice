var express = require('express');
var path    = require("path");
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(cookieParser());
app.use(session({secret: "Your secret key"}));

var Users = [];

app.get('/', function(req, res){
     res.sendFile(path.join(__dirname+'/signup.html')); //one way of doing

});

app.post('/signup', function(req, res){
   if(!req.body.name || !req.body.password){
      res.status("400");
      res.send("Invalid details!");
   } else {
      Users.filter(function(user){
         if(user.name === req.body.name){
         	res.send("User Already Exists! Login or choose another user id")
            res.sendFile(path.join(__dirname+'/login.html'));
         }
         	
	 });
      var newUser = {id: req.body.name, password: req.body.password};
      Users.push(newUser);
      req.session.user = newUser;
      res.sendFile(path.join(__dirname+'/home.html'));
   }
});

function checkSignIn(req, res,next){
   if(req.session.user){
      next();     //If session exists, proceed to page
   } else {
      var err = new Error("Not logged in!");
      console.log(req.session.user);
      next(err);  //Error, trying to access unauthorized page!
   }
}
app.get('/home', checkSignIn, function(req, res){
    res.sendFile(path.join(__dirname+'/home.html'));
});

app.get('/login', function(req, res){
   res.sendFile(path.join(__dirname+'/login.html'));
});

app.post('/login', function(req, res){
   console.log(Users);
   if(!req.body.name || !req.body.password){

      res.sendFile(path.join(__dirname+'/login.html'));
   } else {
      Users.filter(function(user){
         if(user.name === req.body.name && user.password === req.body.password){
            req.session.user = user;
            res.sendFile(path.join(__dirname+'/home.html'));
         }
      });

      res.sendFile(path.join(__dirname+'/login.html'));
   }
});

app.get('/logout', function(req, res){
   req.session.destroy(function(){
      console.log("user logged out.")
   });
  res.sendFile(path.join(__dirname+'/login.html'));
});

app.use('/home', function(err, req, res, next){
console.log(err);
   //User should be authenticated! Redirect him to log in.
  res.sendFile(path.join(__dirname+'/login.html'));
});

app.listen(8081); 