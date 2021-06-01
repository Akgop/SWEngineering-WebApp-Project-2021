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
  var sql_1 = "DELETE FROM tbl_product WHERE product_id = ?";
  var product_id = req.query.product_id;
  var sql1s = mysql.format(sql_1, product_id); 
  connection.query(sql1s, function (err, del_product) {
    res.render('del_product', {title: "RECIPES", del_product: del_product})
  });
});

module.exports = router;
