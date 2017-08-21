var Sequelize = require("sequelize");

let User;

var createTable=function(sequelize){
	User = sequelize.define('profile', {
	  name:{
	  	type: Sequelize.STRING,
	  	get : function()  {
	     
	      return this.getDataValue('name');
	    },
	    set : function(val) {
	      this.setDataValue('name', val.toUpperCase());
	    }
	  },	
	  username: {
	    type: Sequelize.STRING,allowNull: false, unique: true,
	    get : function()  {
	     
	      return this.getDataValue('username');
	    },
		set : function(val) {
	      this.setDataValue('username', val.toUpperCase());
	    }
	  },
	  password: {
	    type: Sequelize.STRING,allowNull: false,
	    get : function()  {
	     
	      return this.getDataValue('password');
	    },
		set : function(val) {
	      this.setDataValue('password', val.toUpperCase());
	    }

	  },
	  email: {
	    type: Sequelize.STRING,allowNull: false, unique: true,
	    get : function()  {
	      return this.getDataValue('email');
	    },
		set : function(val) {
	      this.setDataValue('email', val.toUpperCase());
	    }
	  },

	});

}

var insert=function(newUser){
      User.create({
	    name: newUser.name,
	    username: newUser.username,
	    password: newUser.password,
	    email: newUser.email
	  });
	}

 var findAll=function(){
 	var data;
 	User.findAll().then(row => {
	    data=row;
	})
	return data;
 }



module.exports = {createTable,insert,findAll};