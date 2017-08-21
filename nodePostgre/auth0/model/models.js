var UserMeta = require('./User.js'),
    connection = require('../DbConnection/sequelize.js')

var User = connection.define('users', UserMeta.attributes, UserMeta.options)

// you can define relationships here

module.exports.User = User