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
  var sql_1 = "SELECT * FROM tbl_product WHERE product_item_name = ?";
  var product_item_name = req.query.product_item_name;
  var sql1s = mysql.format(sql_1, product_item_name); 
  connection.query(sql1s, function (err, product_detail) {
    res.render('product_detail', {title: "RECIPES", product_detail: product_detail})
  });
});

module.exports = router;
