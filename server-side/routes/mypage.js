const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbConfig = require('./dbConfig');
const dbOptions = {
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database
};
const connection = mysql.createConnection(dbOptions);

/* GET mypage method. */
router.get('/', function (req, res, next) {
    let id = req.cookies.login['id'];
    let usercode = req.cookies.login['usercode'];

	if (usercode == "customer") {
		let sql = "SELECT customer_email, customer_name, customer_phone, customer_destination, customer_point FROM tbl_customer WHERE customer_id=?";
		connection.query(sql, [id], function (err, customer_info) {
			if (err) console.log(err);
            res.render('mypage', { title: "My Page", mypage: customer_info });
		});
	}
    else if (usercode == "company") {
		let sql = "SELECT company_email, company_name, company_tel, company_income FROM tbl_company WHERE company_id=?";
		connection.query(sql, [id], function (err, company_info) {
			if (err) console.log(err);
            res.render('mypage', { title: "My Page", mypage: company_info });
		});
	}
    else if (usercode == "admin") {
		let sql = "SELECT admin_email, admin_name FROM tbl_admin WHERE admin_id=?";
		connection.query(sql, [id], function (err, admin_info) {
			if (err) console.log(err);
            res.render('mypage', { title: "My Page", mypage: admin_info });
		});
	}
});

module.exports = router;