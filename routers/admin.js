const express = require('express');
const router = express.Router();
const connection = require('../config/configmysql')();
router.get('/admin', (req, res) => {
    connection.query('select * from test where user=?', [req.query.user], (err, content) => {
        if (err) {
            res.send({ code: 1, msg: '注册失败!' });
        } else {
            if (content.length > 0) {
                res.send({ code: 2, msg: '该用户已存在!' });
            } else {
                connection.query('insert into test (user,pwd) value(?,?)', [req.query.user, req.query.pwd], (err, content) => {
                    if (err) {
                        res.send({ code: 1, msg: '注册失败!' });
                    } else {
                        res.send({ code: 0, msg: '注册成功!' });
                    }
                })
            }
        }
    })
});
module.exports = router;