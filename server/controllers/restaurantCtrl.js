const Restaurant = require('../models/restaurant');
class RestaurantCtrl {
  static getRestaurant(req, res, next) {
    Restaurant.getRestaurant(req, res, next);
  }

  static detailRestaurant(req, res, next) {
    Restaurant.detailRestaurant(req, res, next);
  }
}

module.exports = RestaurantCtrl;
