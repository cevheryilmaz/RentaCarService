
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RentaCarSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the car and model'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['CarPending', 'CarDriving', 'WasDelivered']
    }],
    default: ['CarPending']
  }
});

module.exports = mongoose.model('RentaCar', RentaCarSchema);