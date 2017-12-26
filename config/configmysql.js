const mysql = require('mysql');
module.exports = function() {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123456',
        database: '1512a'
    });
    connection.connect((err) => {
        if (err) {
            throw err;
        }
    });
    return connection;
}