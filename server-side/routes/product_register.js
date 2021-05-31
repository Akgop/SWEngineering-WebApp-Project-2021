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


/* POST product. */
router.post('/', function (req, res, next) {
  var sql_1 = "INSERT INTO tbl_product VALUES (?,?,?,?,?,?,?,?)";
  var product_id = req.query.product_id;
  var company_id = req.query.company_id;
  var product_image = req.query.product_image;
  var product_price = req.query.product_price;
  var product_flag = req.query.product_flag;
  var product_avg_score = req.query.product_avg_score;
  var product_item_name = req.query.product_item_name;
  var category_name = req.query.category_name;
  var sql_data = [product_id,company_id,product_image,product_price,product_flag,product_avg_score,product_avg_score,product_item_name]
  var sql1s = mysql.format(sql_1, category_name); 
  connection.query(sql1s, function (err, product) {
    res.render('product', {title: "RECIPES", product: product})
  });
});

module.exports = router;
