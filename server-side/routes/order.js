const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbConfig = require('./dbConfig');
const dbOptions = {
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database
};
const connection = mysql.createConnection(dbOptions);

/* GET login method. */
router.post('/', function (req, res, next) {
	console.log(req.body);
    return res.json(req.body);
});

module.exports = router;
