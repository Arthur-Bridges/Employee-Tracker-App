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
    ]).then(data) {
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
    }
}

//OOP method below. IMPLEMENT a design pattern
    function viewDepartments(){
        connection.query('SELECT * FROM department',  (results) => {
            console.table(results);
            startApp();
        });
    }

    function viewRoles(){
    const query = `
        SELECT role.id, role.title, department.name AS department, role.salary
        FROM role
        INNER JOIN department ON role.department_id = department.id
             `;
    connection.query(query, (err, results) => {
    console.table(results);
    startApp();
  });
    }
    