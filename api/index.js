'use strict';

let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api');

module.exports = {
	character: require('./character.js'),
	houses: require('./houses.js'),
	sortingHat: require('./sortinghat.js')
}