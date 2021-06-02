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


/* GET sale list. */
router.get('/', function (req, res, next) {
  var sql_1 = "SELECT company_id,company_name,product_item_name ,order_id , customer_id, order_quantity, order_time FROM tbl_company LEFT JOIN tbl_product ON tbl_company.? = tbl_product.? JOIN tbl_order ON tbl_product.? = tbl_order.?;";
  
  var product_id = req.query.product_id;
  var sql1s = mysql.format(sql_1, product_id); 
  connection.query(sql1s, function (err, list) {
    res.render('Sale list', {title: "Sale list", list: list})
  });
});

module.exports = router;
