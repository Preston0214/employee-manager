const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
  
function init(){
    inquirer.prompt([
        {
            type:'list',
            message:'what would you like to do?',
            choices:['view all departments','view all roles','view all employess','add department','add role','add employee','update employee role'],
            name:'start'
        }
    ])
}

function addDepartment(){
    //...
}

function addEmployee(){
    //...
}

function addRole(){
    //...
}

function viewEmployees(){
    //...
}

function viewRoles(){
    //...
}

function viewDepartments(){
    //...
}

function updateEmployeeRole(){
    //...
}

init()