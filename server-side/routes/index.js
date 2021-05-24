var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'recipe_develop',
  password: 'recipedev321',
  database: 'recipedb'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM tbl_company', function(err, results){
    if (err) console.error('err : ' + err);
    console.log(results);
    return res.json(results)
  });
});

module.exports = router;
