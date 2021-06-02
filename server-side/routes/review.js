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


router.get("/", (req, res, next) => {
  const id = req.cookies.login.id;

  const sql = "SELECT review_id, product_item_name, product_score, review_time, customer_name \
              FROM tbl_review INNER JOIN tbl_product ON tbl_review.product_id = tbl_product.product_id \
              INNER JOIN tbl_customer ON tbl_customer.customer_id=tbl_review.customer_id";
  
  connection.query(sql, (err, review) => {
    console.log(err);
    console.log(review);
    res.render('review', {title: "RECIPES", review: review})
  });
});

/* 새로운 포스트 작성 */
router.get("/newpost", (req, res, next) => {
  const sql = "SELECT product_id, product_item_name FROM tbl_product";
  connection.query(sql, (err, product) => {
    res.render("newpost", {title: "RECIPES", product: product});
  })
})

/* 각 포스트 읽기 */
router.get("/post", (req, res, next) => {
  const sql = "SELECT * FROM tbl_review AS r INNER JOIN tbl_product AS p ON r.product_id=p.product_id AND review_id=?";
  const review_id = req.query.review_id;
  connection.query(sql, [review_id], (err, post) => {
    console.log(post);
    res.render("readreview", {title: "RECIPES", post: post});
  })
})


/* post review. */
router.post('/', upload.single("review_image"), (req, res, next) => {
  const sql_post = "INSERT INTO tbl_review(customer_id, review_image, review_content, product_id, product_score, review_time) \
      VALUES (?, ?, ?, ?, ?, NOW())";

  const customerId = req.cookies.login.id;
  const review_image = req.file.originalname;
  const review_content = req.body.content;
  const product_id = req.body.product_id;
  const product_score = req.body.rating;
  const data_post = [customerId, review_image, review_content, product_id, product_score];

  connection.query(sql_post, data_post, (err, review) => {
    const sql_update_rating = "UPDATE tbl_product SET product_avg_score=(SELECT AVG(product_score) FROM tbl_review WHERE product_id=?) WHERE product_id=?";
    const update_data = [product_id, product_id]
    connection.query(sql_update_rating, update_data, (err, score) => {
      res.redirect("/review");
    });
  });
});

module.exports = router;
