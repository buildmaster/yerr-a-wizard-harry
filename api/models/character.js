'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CharacterSchema = new Schema({
	firstName: String,
	lastName: String,
	birthday: String,
	organizations: [],
	house: String,
	school: String,
	lineage: String,
	alias: String,
	wand: [],
	items: [], 
	pet: [{
		name: String,
		species: String
	}], 
	skills: String,
	deathEater: Boolean
});

module.exports = mongoose.model('Character', CharacterSchema);