var Sequelize = require("sequelize");

exports.dbConn=function(){

    const sequelize = new Sequelize('postgres://rajesh:rajesh@localhost:5432/rajesh');
    sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

}



 /* const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});
*/
// force: true will drop the table if it already exists
/*User.sync({force: true}).then(() => {
  // Table created
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});*/

/*User.findAll().then(users => {
  console.log(users)
})*/


//module.exports = sequelize;

/*
export class myClass {

}


func.x = () => {

}

func.variable = 2;
module.exports = func;*/
