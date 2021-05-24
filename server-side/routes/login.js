var express = require('express');
var router = express.Router();

// /* GET */
// router.get('/', function(req, res, next) {
//     // GET METHOD는 요청할 일이 없을 테니 지워도 된다. 오로지 실험용
//     console.log("THIS IS GET");
//     res.send({get: "HIHI"});
// });

/* POST login Method */
// { email, password } 를 받아서 로그인 처리, response로 토큰 반환(로그인 상태?)
router.post('/', function(req, res, next) {
    // 아래 코드 전부 지우고 {req.body} 에 들어있는 {email, password} 이용해서 코드 짜주세용
    console.log("THIS IS POST");
    console.log(req.body);
    res.send({ loginSuccess: true, user_id: req.body.email });
})

module.exports = router;
