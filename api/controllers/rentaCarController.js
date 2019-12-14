'use strict';


var mongoose = require('mongoose'),
RentaCar = mongoose.model('RentaCar');

  //list_all_rentacar Function
  exports.list_all_rentacar = function(req, res) {
    RentaCar.find({}, function(err, rentacar) {
      if (err)
        res.send(err);
      res.json(rentacar);
    });
  };

  //create_a_rentacar Function
exports.create_a_rentacar = function(req, res) {
    var new_rentacar = new RentaCar(req.body);
    new_rentacar.save(function(err, rentacar) {
      if (err)
        res.send(err);
      res.json(rentacar);
    });
  };

  //update_a_rentacar Function
exports.update_a_rentacar = function(req, res) {
  RentaCar.findOneAndUpdate({_id: req.params.rentacarId}, req.body, {new: true}, function(err, rentacar) {
    if (err)
      res.send(err);
    res.json(rentacar);
  });
};

