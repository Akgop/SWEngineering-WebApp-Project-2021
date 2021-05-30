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

/* POST mypage method -> 개인정보 수정 */
router.post('/', function (req, res, next) {
	let id = req.cookies.login['id'];
	let new_phone = req.body.new_phone;
	let new_address = req.body.new_address;

	let sql = "UPDATE tbl_customer SET customer_phone=?, customer_destination=? WHERE customer_id=?";
	let datas = [new_phone, new_address, id];
	connection.query(sql, datas, function (err, update_result) {
		if (err)
			res.send("<script>alert('잘못된 요청으로 인해 변경되지 않았습니다.');history.back();</script>");
		else
			res.json(update_result);
	});
})

module.exports = router;