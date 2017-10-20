const zomato = require('zomato');

class Restaurant {
  static getRestaurant(req, res, next) {
    let client = zomato.createClient({
      userKey: process.env.ZOMATOTOKEN,
    });
    if (req.body.token=='') {
      res.status(400).json(err);
    }
    client.search({
      q: "Restaurant", //Search Keyword
      lat: req.body.lat, //latitude
      lon: req.body.long, //longitude
      count: "5", // number of maximum result to display
      start: "1", //fetch results after offset
      radius: "10000", //radius around (lat,lon); to define search area, defined in meters(M)
      sort: "real_distance", //choose any one out of these available choices
      order: "asc" //	used with 'sort' parameter to define ascending(asc )/ descending(desc)
    }, function(err, result) {
      if (!err) {

        res.status(200).json(JSON.parse(result));
      } else {
        res.status(400).json(err);
      }
    });
  }

  static detailRestaurant(req, res, next) {
    let client = zomato.createClient({
      userKey: process.env.ZOMATOTOKEN,
    });
    client.getRestaurant({
      res_id: req.body.resId
    }, function(err, result) {
      if (!err) {
        console.log(result);
        res.status(200).json(JSON.parse(result));
      } else {
        console.log(err);
        res.status(400).json(err);
      }
    });
  }
}

module.exports = Restaurant;
