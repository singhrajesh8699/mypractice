var Sequelize = require("sequelize");

const sequelize = new Sequelize('postgres://rajesh:rajesh@localhost:5432/rajesh');
 sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



/*var User = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  name: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  salt: {
    type: Sequelize.STRING
  }

	});

User.sync({force: true}).then(function () {
  // Table created
  return
User.create({
		username:"rajeshsingh",
		email:"raj@gmail.com",
		name:"raj",
		password:"raj",
		salt:"10"
})

});*/


module.exports = sequelize;
