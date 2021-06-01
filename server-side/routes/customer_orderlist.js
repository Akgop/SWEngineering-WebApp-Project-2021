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


/* GET order List. */
router.get('/', function (req, res, next) {
  var sql_1 = "SELECT * FROM tbl_order WHERE customer_id= ?";
  var customer_id = req.cookies.login['id'];
  var sql1s = mysql.format(sql_1, customer_id); 
  connection.query(sql1s, function (err, order_list) {
    console.log(order_list);
    res.render('order_list', {title: "RECIPES", order_list: order_list})
  });
});

module.exports = router;
