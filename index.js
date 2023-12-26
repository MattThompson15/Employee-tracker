const inquirer = require('inquirer');
const {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
} = require('/queries');

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
        case 'Exit':
            process.exit();
        default:
            console.log('Invalid choice. Please try again.');
            mainMenu();
    }

};

mainMenu();