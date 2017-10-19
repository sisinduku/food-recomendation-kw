const express = require('express');
const router = express.Router();
const RestaurantCtrl = require('../controllers/restaurantCtrl');

router.post('/get_restaurant', RestaurantCtrl.getRestaurant)

module.exports = router;
