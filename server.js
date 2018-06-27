// base setup
var express = require('express');
var app = express();
var api = require('./api/index.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/api';
mongoose.createConnection(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Character = require('./api/models/character');

// configuration for bodyParser to get data from a POST

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

//set the port

var port = process.env.PORT || 8080;

// routes for the API
//Characters
app.use('/api/characters', api.character);

//Sorting Hat
app.use('/api/houses', api.houses);

//Sorting Hat
app.use('/api/sortinghat', api.sortingHat);
//start the server

app.listen(port);
console.log('wingardium leviosa')
