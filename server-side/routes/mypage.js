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
		let sql = "SELECT customer_id, customer_pwd FROM tbl_customer WHERE customer_email=?";


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
    


    
});

/* GET logout method. */
router.get('/logout', function (req, res, next) {
    res.clearCookie('login');
    res.redirect('/login');
});




module.exports = router;