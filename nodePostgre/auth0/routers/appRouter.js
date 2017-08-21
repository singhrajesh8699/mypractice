var passport = require('passport'),
    signupController = require('./signupController.js')

module.exports = function(express) {
  var router = express.Router()

  var isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated())
      return next()
    req.flash('error', 'You have to be logged in to access the page.')
    res.redirect('/')
  }
  
  router.get('/signup', signupController.show)
  router.post('/signup', signupController.signup)

  router.post('/login', passport.authenticate('local', {
      successRedirect: '/home',
      failureRedirect: '/',
      failureFlash: true 
  }))

  router.get('/', function(req, res) {
    res.render('login')
  })

  router.get('/home', isAuthenticated, function(req, res) {
    res.render('home',{user: req.body.username})
  })

  router.get('/logout', function(req, res) {
    req.session.destroy(function(){
      console.log("user log out!");
      });
    req.logout()
    res.redirect('/')
  })

  return router
}