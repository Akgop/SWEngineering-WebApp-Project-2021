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

var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/assets/img/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
var upload = multer({ storage: storage })


/* GET menu_id. */
router.get('/', function (req, res, next) {
  const usercode = req.cookies.login.usercode;

  if (usercode === "customer") {
    let sql = "SELECT * FROM tbl_product INNER JOIN tbl_category ON tbl_product.category_name = tbl_category.category_name and tbl_category.category_id = ?";
    const category_name = req.query.ingredient;
    const sql1s = mysql.format(sql_1, category_name);
    connection.query(sql1s, function (err, product) {
      res.render('product', { title: "RECIPES", product: product })
    });
  }
  else if (usercode === "company") {
    res.render("product_register", {title: "RECIPES"});
  }
});

/* POST product. */
router.post('/', upload.single("image"), function (req, res, next) {
  const company_id = req.cookies.login.id;

  const product_price = req.body.product_price;
  const product_item_name = req.body.product_item_name;
  const category_name = req.body.category;
  const product_image = req.file.originalname;

  const sql = "INSERT INTO tbl_product(company_id, product_image, product_price, product_flag, product_avg_score, product_item_name, category_name) VALUES (?,?,?,?,?,?,?)";
  const data = [company_id, product_image, product_price, 0, 5, product_item_name, category_name];
  connection.query(sql, data, (err, product) => {
    res.redirect("/");
  });
});

/* UPDATE product. */
router.post('/update', (req, res, next) => {
  const company_id = req.cookies.login.id;
  const product_item_name = req.body.product_item_name;
  const product_price = req.body.product_price;
  const category_name = req.body.category_name;
  const product_id = req.body.product_id;

  const sql = "UPDATE tbl_product SET product_item_name=?, product_price=?, category_name=? WHERE company_id=? and product_id=?";
  const data = [product_item_name, product_price, category_name, company_id, product_id];
  connection.query(sql, data, (err, result) => {
    console.log(err);
    console.log(result);
    res.redirect("/");
  });
})

/* UPDATE product. */
router.post('/delete', (req, res, next) => {
  const company_id = req.cookies.login.id;
  const product_id = req.body.product_id;

  const sql = "DELETE FROM tbl_product WHERE company_id=? and product_id=?";
  const data = [company_id, product_id];
  connection.query(sql, data, (err, result) => {
    res.redirect("/");
  });
})


router.get('/statistic', (req, res, next) => {
  const usercode = req.cookies.login.usercode;
  if (usercode !== "company") {
    res.redirect("/");
  }
  const sql = "SELECT o.order_price, p.product_item_name, p.company_id, c.company_income, c.company_name \
          FROM tbl_order AS o INNER JOIN tbl_product AS p ON o.product_id=p.product_id \
          INNER JOIN tbl_company AS c ON p.company_id=c.company_id and c.company_id=?";
  const company_id = req.cookies.login.id;

  connection.query(sql, [company_id], (err, statistic) => {
    console.log(statistic);
    res.render('order_statistic', {title: "RECIPES", statistic: statistic})
  });
})

module.exports = router;
