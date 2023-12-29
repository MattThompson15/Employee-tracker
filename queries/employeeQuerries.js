const connection = require('../assets/connection');
const inquirer = require('inquirer');

const viewDepartments = async () => {
    try {
        const [rows] = await connection.promise().query('SELECT * FROM department');
        console.table(rows);
    } catch (error) {
        console.error('Error viewing departments', error);
    }
};

const viewRoles = async () => {
    try {
        const [rows] = await connection.promise().query('SELECT * FROM role');
        console.table(rows);
    } catch (error) {
        console.error('ERROR viewing roles', error);
    }
};

const viewEmployees = async () => {
    try {
        const [rows] = await connection.promise().query('SELECT * FROM employee');
    }
}




module.exports = {
    viewDepartments
};