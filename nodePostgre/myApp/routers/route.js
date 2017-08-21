var express = require('express');
var router = express.Router();
var path    = require("path");
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var sequelize = require('../dbConn/databaseConn');

var Users = [];

router.get('/', function(req, res){
	res.render('signup',{user: "welcome to sign up page",title:"singup"});
	
});

router.post('/signup', function(req, res){

   if(!req.body.username || !req.body.password){
      res.status("400");
      res.send("Invalid details!");
     
   } else {
      Users.filter(function(user){
            

         if(user.username === req.body.username){
         	res.render('signup',
         		{user: "User Already Exists! Login or choose another user id",title:"singup"});
         }
         	
	 });
      sequelize.dbConn();
      var newUser = {username: req.body.username, password: req.body.password};
      Users.push(newUser);
      req.session.username = newUser;
      res.render('home',{user: req.body.name});
     
      //res.render('/home',{"user":"req.body.name"});
   }
});


function checkSignIn(req, res,next){
	console.log(req.session.username)
   if(req.session.username){
      next();     //If session exists, proceed to page
   } else {
      var err = new Error("Not logged in!");
      next(err);  //Error, trying to access unauthorized page!
   }
}

router.get('/home', checkSignIn, function(req, res){
   res.render('home',{user: req.body.name});
  });

router.get('/login', function(req, res){
   res.render('login');
   
});

router.post('/login', function(req, res){
  
   if(!req.body.username || !req.body.password){
	  res.render('login', {message: "Please enter both id and password"});
	  
   } else {
      Users.filter(function(user){
      	 
         if(user.username === req.body.username && user.password === req.body.password){
            req.session.username = user;
            res.render('home',{user: req.body.username});
            
         }else{
         	 res.render('login');
         }
        
      });

   }
});

router.get('/logout', function(req, res){
   req.session.destroy(function(){
      console.log("user log out!");
      });
   res.render('login');
  
});



module.exports = router;