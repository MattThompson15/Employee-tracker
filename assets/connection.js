const mysql = require('mysql2')
//Description: Establishes a connection to the MySQL database

// Connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mgt95543',
    database: 'employee_db',
});
//Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database with ID ' + connection.threadId);
});
//Export the connection for use in other files
module.exports = connection;