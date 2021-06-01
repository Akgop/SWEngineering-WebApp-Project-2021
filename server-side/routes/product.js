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
  console.log(data);
  connection.query(sql, data, (err, product) => {
    console.log(product);
    res.redirect("/");
  });
});

module.exports = router;
