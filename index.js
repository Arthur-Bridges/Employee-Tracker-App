import inquirer from "inquirer";
import mysql from 'mysql2';
import consoleTable from 'console.table';

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'Employeeregistrar_db'
    },
    console.log(`You are now connected to the Employee database.`)
);

function app() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What action would you like to perform: ',
            name: 'choice',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                ''
            ]
        }
    ]).then(data){
        switch (data.choice) {
            
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
            addDepartment();
            break;
            
            case 'Add a role':
            addRole();
            break;
            
            case 'Add an employee':
            addEmployee();
            break;
            
            case 'Update an employee role':
            updateEmployee();
            break;

            default:
                console.log("Try again!");
                startApp();
        }
    };
}

//OOP method below. IMPLEMENT a design pattern for future
    function viewDepartments(){
        db.query('SELECT * FROM department',  (results) => {
            console.table(results);
            startApp();
        });
    };

    function viewRoles(){
        db.query('SELECT * FROM role', (results) => {
            console.table(results);
            startApp();
        });
    };
    
    function viewEmployees(){
        db.query('SELECT * FROM employee',  (results) => {
            console.table(results);
            startApp();
        });
    };

    function addDepartment(){
        const add = inquirer.prompt([
            {
                type: 'input',
                message: 'What is the new department name?: ',
                name: 'newDepartment'
            }
        ])
        db.query('INSERT INTO department (department_name) VALUES (?)', [add.newDepartment], (results) => {
            console.table(results);
            startApp();
        });
    };

    function addRole(){
        const add = inquirer.prompt([
            {
                type: 'input',
                message: 'What is the new role name?: ',
                name: 'newRole'
            },
            {
                type: 'input',
                message: 'What is the new salary?: ',
                name: 'newSalary'
            },
            {
                type: 'input',
                message: 'What is the department ID?: ',
                name: 'departmentId'
            }
        ])
        db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [add.newRole, add.newSalary, add.departmentId], (results) => {
            console.table(results);
            startApp();
        });
    };

    function addEmployee(){
        const add = inquirer.prompt([
            {
                type: 'input',
                message: 'Input the first name: ',
                name: 'firstName'
            },
            {
                type: 'input',
                message: 'Input the last name: ',
                name: 'lastName'
            },
            {
                type: 'input',
                message: 'Input the Role ID: ',
                name: 'roleId'
            },
            {
                type: 'input',
                message: 'Input the Manager ID: ',
                name: 'managerId'
            }
        ])
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [add.firstName, add.lastName, add.roleId, add.managerId], (results) => {
            console.table(results);
            startApp();
        });
    };

    function updateEmployee(){

    };
    
