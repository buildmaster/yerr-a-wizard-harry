'use strict';

let mongoose = require('mongoose');
let mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/api';
mongoose.connect(mongoDB);

module.exports = {
	character: require('./character.js'),
	houses: require('./houses.js'),
	sortingHat: require('./sortinghat.js')
}