var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/greenfield');

var Schema = mongoose.Schema;


var CraigslistSchema = new Schema({cityandsearchkey: 'string',listings: 'string'})
var Craigslist = mongoose.model('craigslist',CraigslistSchema);

var YelpSchema = new Schema({city: 'string', term: 'string', businesses: 'string'});
var Yelp = mongoose.model('yelp', YelpSchema);

var PhotoSchema = new Schema({city: 'string', neighborhood: 'string', img: 'string'});
var Photo = mongoose.model('photo', PhotoSchema);

//var test = new Craigslist({cityandsearchkey:"test",listings:'test'})

//test.save()

module.exports = {Craigslist: Craigslist, Yelp: Yelp, Photo: Photo};
