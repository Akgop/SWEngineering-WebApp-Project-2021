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


/* GET menu_id. */
router.get('/', function (req, res, next) {
  var sql_1 = "SELECT * FROM tbl_product WHERE category_name = ?";
  var category_name = req.body.category_name;
  var sql1s = mysql.format(sql_1, category_name); 
  connection.query(sql1s, function (err, ingredient) {
    return res.json(ingredient);
  });
});

module.exports = router;
