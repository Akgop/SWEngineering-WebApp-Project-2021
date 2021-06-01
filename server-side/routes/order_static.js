var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var app = express();
var dbConfig = require('./dbConfig');
var dbOptions = {
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
};

var connection = mysql.createConnection(dbOptions);

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/* GET compnat income */
router.get('/', function (req, res, next) {
  var sql_1 = "SELECT company_income tbl_company WHERE company_id = ?";
  var company_id = req.body.company_id;
  var sql1s = mysql.format(sql_1, company_id); 
  connection.query(sql1s, function (err, income) {
    res.render('income', {title: "RECIPES", income: income})
  });
});

module.exports = router;
