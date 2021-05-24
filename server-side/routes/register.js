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

/* POST register method. */
router.post('/', function (req, res, next) {
    var sql = "INSERT INTO tbl_company(company_email, company_pwd, company_name, company_tel) VALUES (?, ?, ?, ?)";
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    var tel = req.body.tel;
    var datas = [email, password, name, tel];

    connection.query(sql, datas, function (err, results) {
        if (err) {
            console.log("err : " + err);
            return res.json({ success: false});
        }
        else {
            console.log("results : " + JSON.stringify(results));
            return res.json({ success: true});
        }
      });
});

module.exports = router;
