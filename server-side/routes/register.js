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

/* GET register method. */
router.get('/', function (req, res, next) {
    res.render('register', { title: "RECIPES" });
})


/* POST register method. */
router.post('/', function (req, res, next) {
    let sql = "INSERT INTO tbl_customer(customer_email, customer_pwd, customer_name, customer_phone, customer_destination) VALUES (?, ?, ?, ?, ?)";
    let email = req.body.email;
    let password = req.body.password;
    let name = req.body.name;
    let phone = req.body.phone;
    let address = req.body.address;
    let datas = [email, password, name, phone, address];

    connection.query(sql, datas, function (err, results) {
        if (err) console.log(err);

        res.cookie("login", {
            authorized: true,
            id: results.insert_id,
        });
        res.redirect('/');
    });
});

module.exports = router;
