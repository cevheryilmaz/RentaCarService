var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  RentaCar = require('./api/models/rentaCarModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/RentaCarDB'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/rentaCarRoutes'); //importing route
routes(app); //register the route


app.listen(port);


//Error URL Message
app.use(function(req,res){
    res.status(404).send({url:req.originalUrl+' not found'})
});

console.log('RentaCar RESTful API server started on: ' + port);