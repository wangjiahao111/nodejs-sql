const express = require('express');
const router = express.Router();
const connection = require('../config/configmysql')();
router.post('/logs', (req, res) => {
    connection.query('select * from test where user=? and pwd=?', [req.body.user, req.body.pwd], (err, content) => {
        if (err) {
            res.send({ code: 1, msg: '登录失败!' });
        } else {
            if (content.length > 0) {
                res.send({ code: 0, msg: '登陆成功!' });
            } else {
                res.send({ code: 2, msg: '用户名或密码输入错误!' });
            }
        }
    })
});
module.exports = router;