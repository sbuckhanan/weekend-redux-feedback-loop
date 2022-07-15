const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
	console.log('get');
});

router.post('/', (req, res) => {
	console.log('get');
});

module.exports = router;
