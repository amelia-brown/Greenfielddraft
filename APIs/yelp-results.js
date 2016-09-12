/* eslint-disable */
var apiKey = require('./api-key.js');
var Yelp = require('../database/yelpController.js');
var request = require('request');
var Promise = require('bluebird');

module.exports.getRecommendedNeighborhoods = function(city, terms) {
  return new Promise(function(resolve, reject) {
    searchYelp(city, terms)
    .then(function(results) {
      return new Promise(function(resolve, reject) {
        getNeighborhoods(results, city)
        .then(function(top3) {
          resolve(top3);
          return top3;
        })
      })
        .then(function(data) {
          resolve(data);
        })
    })
  });
};


var searchYelp = function(location, terms) {
  var results = {};
  results.categories = [];

  return new Promise(function(resolve, reject) {
    for (var i = 0; i < terms.length; i++) {
      Yelp.searchYelpListings(location, term[i])
      .then(function(data) {
        if (existingListings !== null) {
          listings = listings;
        } else {
          makeYelpRequest(location, term);
        }
      });
    }
  });
};

var makeYelpRequest = function(location, term) {
  var request_data = {
    method: 'GET',
    url: 'https://api.yelp.com/v2/search?'
  };
  request({
    url: request_data.url,
    method: request_data.method,
    oauth: {
      consumer_key: apiKey.Consumer_Key,
      consumer_secret: apiKey.Consumer_Secret,
      token: apiKey.Token,
      token_secret: apiKey.Token_Secret,
      signature_method: 'HMAC-SHA1',
    },
    qs: {
      location: location,
      term: terms[i],
      limit: 5,
      sort: 2,
    }
  }, function(err, response, body) {
    var term = response.socket._httpMessage.path.split('&')[1].split('=')[1];
    if (err) {
      return console.log('Error: ', err);
    }
    var data = [];
    var categories = {};
    resData = JSON.parse(body);
    for (var x = 0; x < resData.businesses.length; x++) {
      for (var j = 0; j < resData.businesses[x].categories.length; j++) {
        if (!categories[resData.businesses[x].categories[j][1]]) {
          categories[resData.businesses[x].categories[j][1]] = 1;
        } else {
          categories[resData.businesses[x].categories[j][1]]++;
        }
      }
      data.push({
        type: term,
        name: resData.businesses[x].name,
        rating: resData.businesses[x].rating,
        reviewCount: resData.businesses[x].review_count,
        url: resData.businesses[x].url,
        phone: resData.businesses[x].display_phone,
        address: resData.businesses[x].location.display_address,
        neighborhoods: resData.businesses[x].location.neighborhoods
      });
    }
    var catArray = [];
    for (item in categories) {
      catArray.push({category: item, value: categories[item]});
    }
    catArray.sort(function(a, b) {
      b.value - a.value;
    });
    if (results.categories.length === terms.length - 1) {
      if (results.categories.length === 0) {
        results.allData = data;
        results.categories.push(catArray[0].category);
      } else {
        results.allData = results.allData.concat(data);
        results.categories.push(catArray[0].category);
      }
      resolve(results);
    }
    if (results.categories.length === 0) {
      results.allData = data;
      results.categories.push(catArray[0].category);
    } else {
      results.allData = results.allData.concat(data);
      results.categories.push(catArray[0].category);
    }
  });
  Yelp.saveListings(location, term, data);
};

var getNeighborhoodPhoto = function(neighborhood, city) {
  return new Promis
