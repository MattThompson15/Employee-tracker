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
        console.table(rows);
    } catch (error) {
        console.error('Error viewing employees', error);
    }
};

const addDepartment = async () => {
    const { departmentName } = await inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter the name of the department',
        },
    ]);

    try {
        await connection.promise().query('INSERT INTO department (name) VALUES (?)', [departmentName]);
        console.log (`Department "${departmentName}" added successfully.`);
    } catch (error) {
        console.error('Error adding department:', error);
    }
};

const addRole = async () => {
    const { title, salary, departmentId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the role:',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role',
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID for the role:',
        },
    ]);

    try {
        await connection.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
        console.log(`Role "${title}" added successfully.`);
    } catch (error) {
        console.error('Error adding role:', error);
    }
};

const addEmployee = async () => {
    const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter the first name of the employee',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter the last name of the employee',
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID for the employee',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID for the employee (optional):',
        },
    ]);

    if (firstName.toLowerCase() === 'menu') {
        return;
    }

    try {
        await connection.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?)', [firstName, lastName, roleId, managerId]);
        console.log(`Employee "${firstName} ${lastName}" added successfully.`);
    } catch (error) {
        console.error('Error adding employee', error);
    }
};
   
const updateEmployeeRole = async () => {
    const employees = await connection.promise().query('SELECT * FROM employee');
    const roles = await connection.promise().query('SELECT * FROM role');
    
    const employeeChoices = employees[0].map(employee => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
    }));

    const roleChoices = roles[0].map(role => ({
        name: role.title,
        value: role.id,
    }));

    const { employee, roleId } = await inquirer.prompt([
        {
            type: 'list',
            name: 'employeeId',
            message: 'Select an employee to update',
            choices: [...employeeChoices, { name: 'Return to Menu', value: 'menu' }],
        },
        {
            type: 'list',
            name: 'roleId',
            message: 'Select a new role for the employee',
            choices: roleChoices,
        },
    ]);

    if (employeeId === 'menu') {
        return;
    }

    try {
        await connection.promise().query('UPDATE employee SET role_id = ? WHERE id = ?', [roleId, employeeId]);
        console.log('Employee role updated successfully.');
    } catch (error) {
        console.error('Error updating employee role:', error);
    }
;}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
};