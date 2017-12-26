const express = require('express');
const router = express.Router();
const connection = require('../config/configmysql')();
router.get('/user', (req, res) => {
    connection.query('select * from test', (err, result, field) => {
        if (err) {
            res.send('查询失败!');
        } else {
            if (result.length > 0) {
                res.locals.data = result;
                res.render('user');
            } else {
                res.locals.data = '暂无用户信息!';
                res.render('user');
            }
        }
    })
});
module.exports = router;