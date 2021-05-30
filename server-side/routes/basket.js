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


router.post('/', function (req, res, next) {
    console.log(req.body);
    const customerId = req.cookies.login['id'];
    const productId = req.body.product_id;
    const price = req.body.price;
    const quantity = req.body.quantity;

    // 이미 있는지 판별 -> 없으면 insert, 있으면 update
    let sql_lookup = "SELECT * FROM tbl_basket WHERE customer_id=? and product_id=?";
    let sql_insert = "INSERT INTO tbl_basket(customer_id, product_id, basket_quantity, basket_price) VALUES (?, ?, ?, ?)";
    let sql_update = "UPDATE tbl_basket SET basket_quantity=? WHERE customer_id=? and product_id=?";
    let data_lookup = [customerId, productId];
    let data_insert = [customerId, productId, quantity, price];
    let data_update = [quantity, customerId, productId];
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

/* GET basket. */
// router.post('/', function (req, res, next) {
//     var obj_length = Object.keys(req.body).length;
//     var aJsonArray = new Array();
//     var count = 0
//     var empty = []
//     for (count = 0; count < obj_length; count++) {
//         var customer_id = req.body[count].customer_id;
//         var product_id = req.body[count].product_id;
//         var basket_quantity = req.body[count].basket_quantity;
//         var basket_price = req.body[count].basket_price;
//         var sql_1 = "SELECT * FROM tbl_basket WHERE customer_id = ? and product_id = ?";
//         var data = [customer_id, product_id]
//         var sql1s = mysql.format(sql_1, data);

//         connection.query(sql1s, function (err, basket) {
//             var obj_length = basket.length;
//             console.log(basket)
//             if (basket.length != 0) {

//                 var sql_3 = "update tbl_basket set basket_quantity = ? , basket_price = ? WHERE  customer_id = ? and product_id = ?";
//                 var prev_q = parseInt(basket_quantity);
//                 var current_q = prev_q + parseInt(basket[0].basket_quantity)
//                 console.log(current_q)

//                 var prev_p = parseInt(basket_price);
//                 var current_p = prev_p + parseInt(basket[0].basket_price)
//                 console.log(current_p)

//                 var data3 = [current_q, current_p, basket[0].customer_id, basket[0].product_id]
//                 var sql13 = mysql.format(sql_3, data3);
//                 connection.query(sql13, data3, function (err, up) {
//                     console.log("update")
//                 });

//             }
//             else {
//                 var sql_2 = "INSERT INTO tbl_basket VALUES (?, ?, ?, ?)";
//                 var data_22 = [customer_id, product_id, basket_quantity, basket_price]
//                 var sql13 = mysql.format(sql_2, data_22);
//                 connection.query(sql13, data, function (err, ins) {
//                     console.log("INSERT")
//                 });
//             }

//         });

//     }


// });

/* GET basket. */
router.get('/', function (req, res, next) {
    var sql_4 = "SELECT * FROM tbl_basket WHERE customer_id = ?";
    var customer_id = req.body.customer_id;
    var data4 = [customer_id];
    connection.query(sql_4, data4, function (err, result) {
        return res.json({ title: "RECIPES", result: result })
    });
});
module.exports = router;
