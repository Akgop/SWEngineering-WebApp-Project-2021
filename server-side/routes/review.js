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


/* post review. */
router.post('/', function (req, res, next) {
  var sql_1 = "INSERT INTO tbl_review VALUES (?,?,?,?,?,NOW())";
  var customerId = req.cookies.login['id'];
  var review_image = req.query.review_image;
  var review_content = req.query.review_content;
  var product_id = req.query.product_id;
  var product_score = req.query.product_score;
  var sql1s = mysql.format(sql_1, category_name); 
  var sql_data = [customerId,review_image,review_content,product_id,product_score]
  connection.query(sql1s, sql_data, function (err, review) {
    res.render('review', {title: "RECIPES", review: review})
  });
  var sql_2 = "UPDATE tbl_product SET product_avg_score = (SELECT AVG(product_score) FROM tbl_review  WHERE product_id = ?)";
  var update_data = [product_score]
  connection.query(sql_2, update_data, function (err, score) {
    res.render('score', {title: "RECIPES", score: score})
  });

});

module.exports = router;
