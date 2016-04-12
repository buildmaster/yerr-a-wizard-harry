'use strict';

let mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/api');

module.exports = {
	character: require('./character.js')
}