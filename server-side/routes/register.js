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
    var sql = "INSERT INTO tbl_customer(customer_email, customer_pwd, customer_name, customer_phone, customer_destination) VALUES (?, ?, ?, ?, ?)";
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    var phone = req.body.phone;
    var address = req.body.address;
    var datas = [email, password, name, phone, address];

    console.log(req.body);

    connection.query(sql, datas, function (err, results) {
        if (err) console.log(err);

        console.log("results : " + JSON.stringify(results));

        res.cookie("login", {
            authorized: true,
            id: results.insert_id,
        });
        res.redirect('/');
    });
});

module.exports = router;
