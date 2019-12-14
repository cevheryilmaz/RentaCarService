'use strict';
module.exports = function(app) {
  var RentaCarList = require('../controllers/rentaCarController');
  

    // todoList Routes
    app.route('/rentacars')
        .get(RentaCarList.list_all_rentacar)
        .post(RentaCarList.create_a_rentacar);

    app.route('/rentacars/:rentacarId')
       .put(RentaCarList.update_a_rentacar);
};


