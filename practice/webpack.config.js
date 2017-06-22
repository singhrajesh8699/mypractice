
var path = require('path');
var webpack=require('webpack');

var app=path.resolve(__dirname,'src');

var config = {

   entry: app+'/main.js',
	
   output: {
      path: __dirname+'/src',
      filename: 'bundle.js',
   },
	
   devServer: {
      inline: true,

      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react','stage-0']
            }
         },
         {
         	test:/(\.scss|\.css)$/,
         	loader:'style!css'
         }
      ]
   }
}

module.exports = config;