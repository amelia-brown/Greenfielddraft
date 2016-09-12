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
module.exports.searchYelpListings = function(city, term) {
  return new Promise(function(resolve, reject) {
    models.Yelp.findOne({term: term, city: city}, 'businesses', function(err, businesses) {
      if (err) throw err;
      resolve(businesses);
    });
  });
};

module.exports.savePhoto = function(city, neighborhood, url) {
  var photo = new models.Photo({city: city, neighborhood: neighborhood, url: url});
  photo.save(function(err) {
    if (err) { throw err; }
  });
};

module.exports.findPhoto = function(city, neighborhood) {
  return new Promise(function(resolve, reject) {
    models.Photo.findOne({city: city, neighborhood: neighborhood}, 'url', function(err, photo) {
      if (err) throw err;
      resolve(photo);
    });
  });
};
