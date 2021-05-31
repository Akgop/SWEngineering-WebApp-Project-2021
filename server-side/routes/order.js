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
  const customerId = req.cookies.login.id;
  // 주문을 넣는다.
  function insertOrder(i, sql, data) {
    console.log(i);
    // connection.query(sql, data, function(err, result) {
    //   console.log(i, insert_order);
    // });
  }

  // 들어온 개수만큼 반복문을 돌린다.
  async function insertLoop () {
    let sql_insert_order = 'insert into tbl_order(customer_id, product_id, order_quantity, ) values (?,?,?,?,?,NOW())'
    for (let i=0; i<req.body.length; i++) {
      let e = req.body[i];
      let data_insert_order = [customerId, e.product_id, e.ordier_quantity, e.order_price];
      await insertOrder(i, sql_insert_order, data_insert_order);
    }
  }
  insertLoop();

  // 장바구니에서 삭제한다.

  // 판매자 income을 증가시킨다.

  // 구매자 포인트를 차감시킨다.

  return res.json(req.body);
})


// router.post('/', function (req, res, next) {
//   var pay__sql = "update tbl_customer set  customer_point = ? WHERE customer_id = ?";

//   var pay_flag = true
//   var total_price = 0;
//   var company_array = [];
//   var price_array = [];
//   var p_id_array = [];
//   var quantity_array = [];
//   var customer_id = req.cookies.login['id'];
  
//   var len = Object.keys(req.body).length
//   var req_data = req.body;

  

  

//   req.body.forEach(element => {
//     var procudt_id = element.product_id
//     var order_quantity = element.order_quantity
//     var order_price = element.order_price
//     var company_id = element.company_id
//     total_price = total_price + order_price
  
//     company_array.push(company_id);
//     console.log(order_price)
//     price_array.push(parseInt(order_price));
//     p_id_array.push(procudt_id)
//     quantity_array.push(order_quantity)

    
//   });

//   console.log(company_array,price_array,p_id_array,quantity_array);


//   var customer_select = "SELECT customer_point FROM tbl_customer WHERE customer_id = ?"
  
  
  

//   connection.query(customer_select, customer_id, function (err, response) {
//       console.log(response[0].customer_point);
//       console.log(total_price);
//       if (total_price <= response[0].customer_point){
//         var pay = response[0].customer_point - total_price
//         var pay_data = [pay,customer_id]
//         connection.query(pay__sql, pay_data, function (err, payment) {
//           var company_select = "SELECT company_income  FROM tbl_company WHERE company_id = ?";
//     for(var index =0; index < company_array.length; index ++){
      
//       connection.query(company_select, company_array[index], function (err, response) {
//           var c_income = parseInt(response[0].company_income) + parseInt(price_array[index])
//           var company__sql = 'UPDATE tbl_company SET company_income = ? WHERE company_id = ?';
//           var insert_order = 'insert into tbl_order values (?,?,?,?,?,NOW())';
//           console.log(index)
//           console.log("수입" ,parseInt(price_array[0]))
//           var update_data = [c_income ,company_array[index]]
//           var inser_data = [customer_id ,p_id_array[index],quantity_array[index] , price_array[index]]
//           var id =company_array[index]
//           connection.query(company__sql, [c_income ,id], function (err, response) {
//             console.log(response)
//           });
//           connection.query(insert_order,[customer_id ,p_id_array[index],quantity_array[index] , price_array[index]], function (err, response) {
//             console.log(response)
//         });
//       });
      
//     }

//           console.log("결제 완료");
//           connection.end();
//       });
//       }
//       else{
//         pay_flag = false;
//         return res.send(444);
//       }
//     });
//   console.log(company_array.length)

  

// });


module.exports = router;
