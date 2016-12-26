var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', function(req, res){
  res.json('Welcome to Amozon-Clone!');
});

app.listen(3000, function(err){
  if(err) throw err;
  console.log("Server is running on port 3000");
});
