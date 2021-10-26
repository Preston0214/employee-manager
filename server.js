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
    inquirer.prompt([
        {
            type:'input',
            message:'what is the name of the department?',
            name:'newDepartment'
        }
    ])
}

function addEmployee(){
    inquirer.prompt([
        {
            type:'input',
            message:'what is the employees first name?',
            name:'firstName'
        },
        {
            type:'input',
            message:'what is the employees last name?',
            name:'lastName'
        },
        {
            type:'input',
            message:'what is the employees role?',
            name:'employeeRole'
        },
        {
            type:'input',
            message:'who is the employees manager (manager id)?',
            name:'manager'
        },
    ])
}

function addRole(){
    inquirer.prompt([
        {
            type:'input',
            message:'what is the name of the new role?',
            name:'new role'
        },
    ])
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
    inquirer.prompt([
        {
            type:'input',
            message: 'which employee would you like to update (employee id)?',
            name:'employeeUpdate'
        },
    ])
}

init()