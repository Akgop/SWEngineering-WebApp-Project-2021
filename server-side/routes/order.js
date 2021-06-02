const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const app = express();
const dbConfig = require('./dbConfig');
const dbOptions = {
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
};

const connection = mysql.createConnection(dbOptions);

router.post('/', function(req, res, next) {
  // SQL 실제 실행부. Promise로 비동기->동기 처리.
  function SQLExecute(i, sql, data) {
    return new Promise(resolve => {
      connection.query(sql, data, function(err, result) {
        resolve(result);
      });
    })
  }

  // 들어온 개수만큼 반복문을 돌린다.
  async function SQLLoop () {
    const customerId = req.cookies.login.id;
    // 주문정보를 insert 한다, 장바구니에서 삭제한다, 판매자 income을 증가시킨다, 구매자 포인트를 차감시킨다.
    const sql_insert_order = 'INSERT INTO tbl_order(customer_id, product_id, order_quantity, order_price, order_time) VALUES (?,?,?,?,NOW())';
    const sql_delete_from_basket = "DELETE FROM tbl_basket WHERE customer_id=? and product_id=?";
    const sql_get_prev_income = "SELECT company_income FROM tbl_company WHERE company_id=?";
    const sql_update_new_income = "UPDATE tbl_company SET company_income=? WHERE company_id=?";
    const sql_get_point = "SELECT customer_point FROM tbl_customer WHERE customer_id=?";
    const sql_subtract_point = "UPDATE tbl_customer SET customer_point=? WHERE customer_id=?";
    for (let i=0; i<req.body.length; i++) {
      let e = req.body[i];
      // 주문 정보 insert
      let data_insert_order = [customerId, e.product_id, e.order_quantity, e.order_price];
      await SQLExecute(i, sql_insert_order, data_insert_order);

      // 장바구니 내역 삭제
      let data_delete_from_basket = [customerId, e.product_id];
      await SQLExecute(i, sql_delete_from_basket, data_delete_from_basket);

      // 회사 income 업데이트
      let data_get_prev_income = [e.company_id];
      let companyIncome = await SQLExecute(i, sql_get_prev_income, data_get_prev_income);
      let newIncome = parseInt(e.order_price) + parseInt(companyIncome[0].company_income);
      let data_update_income = [newIncome, e.company_id];
      await SQLExecute(i, sql_update_new_income, data_update_income);

      // 구매자 포인트를 차감시킨다.
      let data_get_point = [customerId];
      let customerPoint = await SQLExecute(i, sql_get_point, data_get_point);
      let newPoint = parseInt(customerPoint[0].customer_point) - parseInt(e.order_price);
      let data_subtract_point = [newPoint, customerId];
      await SQLExecute(i, sql_subtract_point, data_subtract_point);
    }
  }
  // 위 동기 함수 실행.
  SQLLoop();
  return res.json();
})

/* GET order List. */
router.get('/history', function (req, res, next) {
  const sql_get_history = "SELECT * FROM tbl_order INNER JOIN tbl_product ON tbl_order.product_id=tbl_product.product_id and tbl_order.customer_id=?";
  const customerId = req.cookies.login.id;
  connection.query(sql_get_history, [customerId], (err, order_list) => {
    console.log(order_list);
    res.render('order_history', {title: "RECIPES", order_list: order_list})
  });
});

router.get('/statistic', (req, res, next) => {
  const sql_1 = "SELECT company_income tbl_company WHERE company_id = ?";
  const company_id = req.cookies.login.id;
  const sql1s = mysql.format(sql_1, company_id); 
  connection.query(sql1s, function (err, income) {
    console.log(income);
    res.render('order_statistic', {title: "RECIPES", income: income})
  });
})

module.exports = router;
