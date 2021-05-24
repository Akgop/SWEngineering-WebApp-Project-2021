var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',
  password: '1234',
  database: 'info'
});

connection.connect();

connection.query('SELECT * FROM user', function(err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end();

module.exports = router;
