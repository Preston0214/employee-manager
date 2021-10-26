const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db');

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
        //...
    ])
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