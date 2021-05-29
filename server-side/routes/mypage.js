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

/* GET mypage method. */
router.get('/', function (req, res, next) {
    res.render('mypage', { title: "마이페이지", login: req.cookies.login });
});

/* POST mypage method. */
router.post('/', function (req, res, next) {
    let authorized = req.cookies.login['authorized'];
    let id = req.cookies.login['id'];
    let usercode = req.cookies.login['usercode'];

	if (usercode == "customer") {
		let sql = "SELECT customer_email, customer_name, customer_phone, customer_destination, customer_point FROM tbl_customer WHERE customer_id=?";
		connection.query(sql, [id], function (err, customer_info) {
			if (err) console.log(err);
            console.log(customer_info);
            return res.json(customer_info);
		});
	}
    else if (usercode == "company") {
		let sql = "SELECT company_email, company_name, company_tel, company_income FROM tbl_company WHERE company_id=?";
		connection.query(sql, [id], function (err, company_info) {
			if (err) console.log(err);
            console.log(company_info);
            return res.json(company_info);
		});
	}
});

/* GET logout method. */
router.get('/logout', function (req, res, next) {
    res.clearCookie('login');
    res.redirect('/login');
});




module.exports = router;