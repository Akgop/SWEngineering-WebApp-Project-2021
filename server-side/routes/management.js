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

/* GET 회원 조회 화면 */
router.get('/', function(req, res, next){
    res.redirect('/management/list/1');
});

router.get('/list/:page', function(req, res, next){
    let usercode = req.body.usercode;

    if (usercode == "customer") {
		let sql = "SELECT * FROM tbl_customer";
		connection.query(sql, function (err, customer_info) {
			if (err) console.error(err);
            res.json(customer_info);
		});
	}
    else if (usercode == "company") {
		let sql = "SELECT * FROM tbl_company";
		connection.query(sql, function (err, company_info) {
			if (err) console.error(err);
            res.json(company_info);
		});
	}
});

/* GET 회원 추가 화면 */
router.get('/insert', function(req, res, next){
    res.render('insert', {title: "회원 추가"});
});

/* POST 회원 추가 로직 처리 */
router.post('/insert', function(req, res, next){
    let usercode = req.body.usercode;

    if (usercode == "customer") {
		let sql = "INSERT INTO tbl_customer(customer_email, customer_pwd, customer_name, customer_phone, customer_destination) VALUES (?, ?, ?, ?, ?)";
        let email = req.body.email;
        let password = req.body.password;
        let name = req.body.name;
        let phone = req.body.phone;
        let address = req.body.address;
        let datas = [email, password, name, phone, address];
		connection.query(sql, datas, function (err, insult_result) {
			if (err) console.error(err);
            res.json(insult_result);
		});
	}
    else if (usercode == "company") {
        let sql = "INSERT INTO tbl_company(company_email, company_pwd, company_name, company_tel) VALUES (?, ?, ?, ?)";
        let email = req.body.email;
        let password = req.body.password;
        let name = req.body.name;
        let phone = req.body.phone;
        let datas = [email, password, name, phone];
		connection.query(sql, datas, function (err, insult_result) {
			if (err) console.error(err);
            res.json(insult_result);
		});
	}
});

module.exports = router;