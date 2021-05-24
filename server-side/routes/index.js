var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '10.20.17.168',
  user: 'recipe_develop',
  password: 'recipedev321',
  database: 'recipedb'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  connection.query('INSERT INTO tbl_company(company_email, company_pwd, company_name, company_tel, company_income) VALUES ("kw@kw.ac.kr", "kw123", "kwangwoon", "010-1234-5678", "10") ', function(err, results){
    if (err) console.error('err : ' + err);
    console.log(results);
    return res.json(results)
  });
});

module.exports = router;
