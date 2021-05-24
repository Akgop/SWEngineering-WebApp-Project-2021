var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("THIS IS GET");
    res.send({get: "HIHI"});
});

router.post('/', function(req, res, next) {
    console.log("THIS IS POST");
    console.log(req.body);
    res.send({post: "HIHIHHI"});
})

module.exports = router;
