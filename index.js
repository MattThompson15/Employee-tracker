const inquirer = require('inquirer');
// DEescription: Main entry point for the employee tracker app
const { 
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
 } = require('./queries/employeeQuerries')
// Main menu function

const mainMenu = async () => {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Exit',
    
            ],
        },
    ]);

    switch (choice) {
        case 'View all departments':
            viewDepartments();
            break;
        case 'View all roles':
            viewRoles();
            break;
        case 'View all employees':
            viewEmployees();
            break;
        case 'Add a department':
            await addDepartment();
            break;
        case 'Add a role':
             await addRole();
            break;
        case 'Add an employee':
            await addEmployee();
            break;
        case 'Update an employee role':
            await updateEmployeeRole();
            break;
        case 'Exit':
            process.exit();
           default:
            console.log('Invalid choice. Please try again');
            break;
    }

    const {goBack } = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'goBack',
            message: 'Do you want to go back to the main menu?',
            default: true,
        },
    ]);

    if (goBack) {
        await mainMenu();
    }

};
// Initialze the main menu
mainMenu();