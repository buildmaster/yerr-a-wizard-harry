'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CharacterSchema = new Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	birthday: String,
	house: String,
	school: String,
	blood: {type: String, enum: ['pure-blood', 'half-blood', 'muggle-born', 'unknown']},
	alias: String,
	wand: [{type: String}],
	pet: [{
		name: String,
		species: String
	}], 
	boggart: String,
	deathEater: Boolean,
	dumbledoresArmy: Boolean,
	orderOfThePhoenix: Boolean,
	ministryOfMagic: Boolean,
});

module.exports = mongoose.model('Character', CharacterSchema);