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

/* GET login method. */
router.get('/', function (req, res, next) {
	res.render('login', { title: "RECIPES" });
});

/* POST login method. */
router.post('/', function (req, res, next) {
	let usercode = req.body.usercode;

	if (usercode == "customer") {
		let sql = "SELECT customer_id, customer_pwd FROM tbl_customer WHERE customer_email=?";
		let email = req.body.email;
		let password = req.body.password;

		connection.query(sql, [email], function (err, results) {
			if (err) console.log(err);

			if (!results[0]) return res.json('please check your email.');

			if (password == results[0].customer_pwd) {
				res.cookie("login", {
					authorized: true,
					id: results[0].customer_id,
					usercode: usercode
				});
				res.redirect('/');
			}
			else
				res.redirect('/login');
		});
	}
	else if (usercode === "company") {
		let sql = "SELECT company_id, company_pwd FROM tbl_company WHERE company_email=?";
		let email = req.body.email;
		let password = req.body.password;

		connection.query(sql, [email], function (err, results) {
			if (err) console.log(err);
			
			if (!results[0]) return res.json('please check your email.');

			if (password == results[0].company_pwd) {
				res.cookie("login", {
					authorized: true,
					id: results[0].company_id,
					usercode: usercode
				});
				res.redirect('/');
			}
			else
				res.redirect('/login');
		});
	}
	else if (usercode === "admin") {
		let sql = "SELECT admin_id, admin_pwd FROM tbl_admin WHERE admin_email=?";
		let email = req.body.email;
		let password = req.body.password;

		connection.query(sql, [email], function (err, results) {
			if (err) console.log(err);
			
			if (!results[0]) return res.json('please check your email.');

			if (password == results[0].admin_pwd) {
				res.cookie("login", {
					authorized: true,
					id: results[0].admin_id,
					usercode: usercode
				});
				res.redirect('/');
			}
			else
				res.redirect('/login');
		});
	}

});

module.exports = router;
