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
router.post('/', function (req, res, next) {
    var sql = "SELECT company_pwd FROM tbl_company WHERE company_email=?";
    var email = req.body.email;
    var password = req.body.password;
  
    connection.query(sql, [email], function (err, results) {
      if (err)
        console.log(err);
  
      if (!results[0])
        return res.json('please check your email.');
  
      console.log('사용자 입력: ', password);
      console.log('db정보: ', results[0].company_pwd);
      if (password == results[0].company_pwd)
        return res.json({ loginSuccess: true });
      else
        return res.json({ loginSuccess: false });
  
    });
  });

module.exports = router;
