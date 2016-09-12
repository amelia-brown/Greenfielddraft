var models = require('./config.js');

// Enter all listings for term in the database with a city document
module.exports.saveYelpListings = function(term, city, listings) {
  var listings = new models.Yelp({
    city: city,
    term:term,
    businesses: businesses,
  });

  listings.save(function(err) {
    if (err) {
      console.log(err);
    }
  });
};

// Find listings for term in the database using a city document
module.exports.findYelpListings = function(city, term) {
 models.Yelp.findOne({term: term, city: city}, 'businesses', function(err, businesses) {
    if (err) throw err;

    return businesses;
  });
};
