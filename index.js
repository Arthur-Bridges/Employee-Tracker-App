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

        }
    ]).then()
}

//OOP method below. IMPLEMENT a design pattern