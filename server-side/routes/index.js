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

/* GET home page. */
router.get('/', function (req, res, next) {
  // connection.query('SELECT * FROM tbl_company', function (err, results) {
  //   if (err) console.error('err : ' + err);
  //   console.log(results);
  //   return res.json(results)
  // });
  return res.render('index', { title: "RECIPES"});
});

module.exports = router;
