const mysql = require('mysql12');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'employee_db',
});

module.exports = connection;