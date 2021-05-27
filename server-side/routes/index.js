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


/* POST login method. */
router.get('/', function (req, res, next) {
  var sql = "SELECT * FROM tbl_menu ";
  connection.query(sql, function (err, menu) {
    console.log(menu);
    return res.json(menu);
  });
});


module.exports = router;
