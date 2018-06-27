'use strict';
let express = require('express');
let router = express.Router();

router.get('/', (req, res) =>{
	let houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
	res.send(houses);
});

module.exports = router;