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

/* GET basket. */
router.get('/', function (req, res, next) {
    var sql = "SELECT * FROM tbl_basket INNER JOIN tbl_product ON tbl_basket.product_id=tbl_product.product_id and customer_id = ?";
    var customer_id = req.cookies.login['id'];
    var data = [customer_id];
    connection.query(sql, data, function (err, basket) {
        console.log(basket);
        res.render("basket", { title: "RECIPES", basket: basket });
    });
});

/* POST basket */
router.post('/', function (req, res, next) {
    console.log(req.body);
    const customerId = req.cookies.login['id'];
    const productId = req.body.product_id;
    let price = req.body.price;
    const quantity = req.body.quantity;

    // 이미 있는지 판별 -> 없으면 insert, 있으면 update
    let sql_lookup = "SELECT * FROM tbl_basket WHERE customer_id=? and product_id=?";
    let sql_insert = "INSERT INTO tbl_basket(customer_id, product_id, basket_quantity, basket_price) VALUES (?, ?, ?, ?)";
    let sql_update = "UPDATE tbl_basket SET basket_quantity=?, basket_price=? WHERE customer_id=? and product_id=?";
    let data_lookup = [customerId, productId];
    let data_insert = [customerId, productId, quantity, price];
    let data_update = [quantity, price, customerId, productId];
    connection.query(sql_lookup, data_lookup, function (err_lookup, lookup) {
        // 장바구니에 데이터가 없다면
        if (lookup.length === 0) {
            connection.query(sql_insert, data_insert, function (err_insert, insert) {
                console.log(insert);
                return res.json(insert);
            })
        }
        else {
            // 장바구니에 데이터가 이미 있다면 수량만 업데이트
            connection.query(sql_update, data_update, function (err_update, update) {
                console.log(update);
                return res.json(update);
            })
        }
    })
})

/* DELETE method */
router.get('/delete', function(req, res, next) {
    const productId = req.query.id;
    const customerId = req.cookies.login.id;

    const sql = "DELETE FROM tbl_basket WHERE customer_id=? and product_id=?"
    let data = [customerId, productId];

    connection.query(sql, data, function (err, response) {
        console.log(response);
        return res.redirect("/basket");
    });
})

module.exports = router;
