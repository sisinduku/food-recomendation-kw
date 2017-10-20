const express = require('express');
const router = express.Router();
const RestaurantCtrl = require('../controllers/restaurantCtrl');

router.post('/get_restaurant', RestaurantCtrl.getRestaurant)
router.post('/detail_restaurant', RestaurantCtrl.detailRestaurant)

module.exports = router;
