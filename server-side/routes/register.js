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
    const usercode = req.body.usercode;

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const phone = req.body.phone;
    const address = req.body.address;

    if (usercode === "customer") {
        const user_sql = "INSERT INTO tbl_customer(customer_email, customer_pwd, customer_name, customer_phone, customer_destination) VALUES (?, ?, ?, ?, ?)";
        let user_data = [email, password, name, phone, address];
        connection.query(user_sql, user_data, (err, results) => {
            if (err) console.log(err);
            res.cookie("login", {
                authorized: true,
                id: results[0].company_id,
                usercode: usercode
            });
            res.redirect('/');
        });
    }
    else if (usercode === "company") {
        const company_sql = "INSERT INTO tbl_company(company_email, company_pwd, company_name, company_tel, company_income) VALUES (?, ?, ?, ?, 1)";
        const company_data = [email, password, name, phone];
        connection.query(company_sql, company_data, (err, results) => {
            if (err) console.log(err);
            res.cookie("login", {
                authorized: true,
                id: results[0].company_id,
                usercode: usercode
            });
            res.redirect('/');
        });
    }
    else {
        const admin_sql = "INSERT INTO tbl_admin(admin_email, admin_pwd, admin_name) VALUES (?, ?, ?)";
        const admin_data = [email, password, name];
        connection.query(admin_sql, admin_data, (err, results) => {
            if (err) console.log(err);
            res.cookie("login", {
                authorized: true,
                id: results[0].company_id,
                usercode: usercode
            });
            res.redirect('/');
        });
    }
});

module.exports = router;
