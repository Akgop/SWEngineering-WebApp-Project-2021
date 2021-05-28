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
  var sql_1 = "SELECT * FROM tbl_product INNER JOIN tbl_category ON tbl_product.category_name = tbl_category.category_name and tbl_category.category_id = ?";
  var category_name = req.query.ingredient;
  var sql1s = mysql.format(sql_1, category_name); 
  connection.query(sql1s, function (err, product) {
    res.render('product', {title: "RECIPES", product: product})
  });
});

module.exports = router;
