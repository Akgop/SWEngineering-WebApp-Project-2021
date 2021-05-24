var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'developerTae',
  password: '1234',
  database: 'tutorial'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.connect();

  connection.query('SELECT * FROM board', function(err, results){
    if (err) console.error('err : ' + err);
    console.log(results);
    return res.json(results)
  });

  connection.end();
});

module.exports = router;
