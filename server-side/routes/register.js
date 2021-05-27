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

/* GET register method. */
router.get('/', function (req, res, next) {
    res.render('register', { title: "RECIPES" });
})


/* POST register method. */
router.post('/', function (req, res, next) {
    const sql = "INSERT INTO tbl_customer(customer_email, customer_pwd, customer_name, customer_phone, customer_destination) VALUES (?, ?, ?, ?, ?)";
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    let phone = req.body.phone;
    let address = req.body.address;
    let datas = [email, password, name, phone, address];

    connection.query(sql, datas, function (err, results) {
        if (err) {
            console.log("err : " + err);
            res.render(`<script> alert("회원가입 도중 오류가 발생했습니다") </script>`);
        }
        console.log("results : " + JSON.stringify(results));
        // return res.json({ success: true });
        res.cookie("login", {
            authorized: true,
            id: "custeomer_id",
        });
        res.redirect('/');
    });

    console.log(req.body);
});

module.exports = router;
