const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
	console.log('get');
	const sqlString = 'SELECT * FROM feedback;';
	pool
		.query(sqlString)
		.then((result) => {
			res.send(result.rows);
			res.sendStatus(201);
		})
		.catch((err) => {
			console.log('Error in post', err);
			res.sendStatus(500);
		});
});

router.post('/', (req, res) => {
	console.log('get');
	const sqlString =
		'INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3, $4);';
	const { feeling, understanding, support, comments } = req.body;
	pool
		.query(sqlString, [feeling, understanding, support, comments])
		.then((result) => {
			res.sendStatus(201);
		})
		.catch((err) => {
			console.log('Error in post', err);
			res.sendStatus(500);
		});
});

module.exports = router;
