const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const app = express();
const dbConfig = require('./dbConfig');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dbOptions = {
	user: dbConfig.user,
	password: dbConfig.password,
	database: dbConfig.database
};
const connection = mysql.createConnection(dbOptions);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/* GET login method. */
router.get('/', function (req, res, next) {
	res.render('login', { title: "RECIPES" });
});


/* POST login method. */
router.post('/', function (req, res, next) {
	var usercode = req.body.usercode;

	if (usercode == "customer") {
		var sql = "SELECT customer_id, customer_pwd FROM tbl_customer WHERE customer_email=?";
		var email = req.body.email;
		var password = req.body.password;

		console.log(req.body);

		connection.query(sql, [email], function (err, results) {
			if (err) console.log(err);

			if (!results[0]) return res.json('please check your email.');

			console.log('사용자 입력: ', password);
			console.log('db정보(비밀번호): ', results[0].customer_pwd);
			console.log('db정보(id): ', results[0].customer_id);

			if (password == results[0].customer_pwd){
				res.cookie("login", {
					authorized: true,
					id: results[0].customer_id,
					usercode: usercode
				});
			res.redirect('/');}
			else
			res.redirect('/login');
		});
	}
	else if (usercode == "company") {
		var sql = "SELECT company_id, company_pwd FROM tbl_company WHERE company_email=?";
		var email = req.body.email;
		var password = req.body.password;

		console.log(req.body);

		connection.query(sql, [email], function (err, results) {
			if (err) console.log(err);

			if (!results[0]) return res.json('please check your email.');

			console.log('사용자 입력: ', password);
			console.log('db정보(비밀번호): ', results[0].company_pwd);
			console.log('db정보(id): ', results[0].company_id);

			if (password == results[0].company_pwd) {
				res.cookie("login", {
					authorized: true,
					id: results[0].company_id,
					usercode: usercode
				});
			res.redirect('/');}
			else
			res.redirect('/login');
		});
	}
	else if (usercode == "admin") {
		var sql = "SELECT admin_id, admin_pwd FROM tbl_admin WHERE admin_email=?";
		var email = req.body.email;
		var password = req.body.password;

		console.log(req.body);

		connection.query(sql, [email], function (err, results) {
			if (err) console.log(err);

			if (!results[0]) return res.json('please check your email.');

			console.log('사용자 입력: ', password);
			console.log('db정보(비밀번호): ', results[0].admin_pwd);
			console.log('db정보(id): ', results[0].admin_id);

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
