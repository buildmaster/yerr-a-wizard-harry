'use strict';

let mongoose = require('mongoose');
let mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/api';
mongoose.createConnection(mongoDB);

module.exports = {
	character: require('./character.js')
}