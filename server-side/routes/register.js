var express = require('express');
var router = express.Router();

/* GET */
router.get('/', function(req, res, next) {
    // GET METHOD는 요청할 일이 없을 테니 지워도 된다. 오로지 실험용
    console.log("THIS IS GET");
    res.send({get: "HIHI"});
});

/* POST register Method */
router.post('/', function(req, res, next) {
    // 아래 코드 전부 지우고 {req.body} 에 들어있는 {email, name, password} 이용해서 코드 짜주세용
    console.log("THIS IS POST");
    console.log(req.body);
    res.send({ success: true });
})

module.exports = router;
