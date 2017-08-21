var Sequelize = require("sequelize");



const sequelize = new Sequelize('postgres://rajesh:rajesh@localhost:5432/rajesh');
 sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


module.exports = sequelize;
