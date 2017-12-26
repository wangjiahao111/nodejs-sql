const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(process.cwd(), 'static')));
app.use(bodyParser.urlencoded({ extended: false }));


const list = require('./routers/list.js');
const admin = require('./routers/admin.js');
const login = require('./routers/login.js');
const logs = require('./routers/logs.js');
const user = require('./routers/user.js');

app.get('/list', list);
app.get('/admin', admin);
app.get('/login', login);
app.post('/logs', logs);
app.get('/user', user);

app.listen(8080);