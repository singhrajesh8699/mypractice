var bcrypt = require('bcrypt'),
    Model = require('../model/models.js')

module.exports.show = function(req, res) {
  res.render('signup',{user: "welcome to sign up page",title:"singup"})
}

module.exports.signup = function(req, res) {
  var name=req.body.name
  var username = req.body.username
  var password = req.body.password
  var password2 = req.body.password2
  var email=req.body.email
  
  if (!username || !password || !password2) {
    req.flash('error', "Please, fill in all the fields.")
    res.render('signup',{user: "fill all the fields",title:"singup"})
  }
  
  if (password !== password2) {
    req.flash('error', "Please, enter the same password twice.")
    res.render('signup',{user: "Please, enter the same password twice",title:"singup"})
  }
  
  var salt = bcrypt.genSaltSync(10)
  var hashedPassword = bcrypt.hashSync(password, salt)
  
  var newUser = {
    name:name,
    username: username,
    salt: salt,
    password: hashedPassword,
    email:email,
  }
  
  Model.User.sync({force: true}).then(function () {

  Model.User.create(newUser).then(function() {
    res.redirect('/')
  }).catch(function(error) {
    req.flash('error', "Please, choose a different username.")
    res.render('signup',{user: error,title:"singup"})
  })
  })
}