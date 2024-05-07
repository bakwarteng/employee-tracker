const inquirer = require("inquirer");
const fs = require("fs");
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool(
  {
    // TODO: Enter PostgreSQL username
    user: "postgres",
    // TODO: Enter PostgreSQL password
    password: process.env.password,
    host: "localhost",
    database: "content_management_systems",
  },
  console.log(`Connected to the content_management_systems;.`)
);

pool.connect();

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "task",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add A Role",
          "Add an Employee",
          "Update an Employee Role",
        ],
      },
    ])
    .then((data) => {
      switch (data.task) {
        case "View All Departments":
          viewDepartments();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "View All Employees":
          viewEmployees();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add A Role":
          addRole();
          break;
        case "Add an Employee":
          addEmployee();
          break;
        case "Update an Employee Role":
          updateRole();
          break;
      }
    });
}
function viewDepartments() {
  pool.query("select * from department", function (err, { rows }) {
    console.table(rows);
    init();
  });
}
function viewRoles() {
  pool.query("SELECT * FROM role", function (err, { rows }) {
    if (err) {
      console.error(err);
    } else {
      console.table(rows);
    }
    init();
  });
}
function viewEmployees() {
  pool.query("SELECT * FROM employee", function (err, { rows }) {
    if (err) {
      console.error(err);
    } else {
      console.table(rows);
    }
    init();
  });
}
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDepartment",
        message: "Enter the name of the department ",
      },
    ])
    .then((answers) => {
      pool.query(
        `INSERT INTO department(department_name) VALUES ('${answers.addDepartment}')`,
        function (err, rows) {
          if (err) {
            console.error(err);
          } else {
            console.table(rows);
          }
          init();
        }
      );
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addRole1",
        message: "Add the role's name ",
      },
      {
        type: "input",
        name: "addRole2",
        message: "Add the role's salary",
      },
      {
        type: "input",
        name: "addRole3",
        message: "Add the role's department id",
      },
    ])
    .then((answers) => {
      pool.query(
        `INSERT INTO employee (first_name, last_name, role_name, department_name, role_id, salary, manager_name, manager_id) 
         VALUES ('${answers.addRole1}', ${answers.addRole2}, ${answers.addRole3})`,
        function (err, rows) {
          if (err) {
            console.error(err);
          } else {
            console.table(rows);
          }
          init();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addEmployee1",
        message: "Add the employee's first name ",
      },
      {
        type: "input",
        name: "addEmployee2",
        message: "Add the employee's last name ",
      },
      {
        type: "input",
        name: "addEmployee3",
        message: "Add the employee's role'name",
      },
      {
        type: "input",
        name: "addEmployee4",
        message: "Add the employee's department'name",
      },
      {
        type: "input",
        name: "addEmployee5",
        message: "Add the employee's role id",
      },
      {
        type: "input",
        name: "addEmployee6",
        message: "Add the employee's salary",
      },
      {
        type: "input",
        name: "addEmployee7",
        message: "Add the employee's manager name",
      },
      {
        type: "input",
        name: "addEmployee8",
        message: "Add the employee's manager id",
      },
    ])

    .then((answers) => {
      pool.query(
        `INSERT INTO employee (first_name, last_name, role_name, department_name, role_id, salary, manager_name, manager_id) 
         VALUES ('${answers.addEmployee1}', '${answers.addEmployee2}', '${answers.addEmployee3}','${answers.addEmployee4}', ${answers.addEmployee5}, ${answers.addEmployee6},'${answers.addEmployee7}', ${answers.addEmployee8})`,
        function (err, rows) {
          if (err) {
            console.error(err);
          } else {
            console.table(rows);
          }
          init();
        }
      );
    });
}

function updateRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "updateRole1",
        message: "what is the id of the employee you want to update",
      },
      {
        type: "input",
        name: "updateRole2",
        message: "What is the role you want the employee to have",
      },
    ])
    .then((answers) => {
      pool.query(
        `UPDATE employee SET role_name = '${answers.updateRole2}' WHERE id = ${answers.updateRole1}`,
        function (err, rows) {
          if (err) {
            console.error(err);
          } else {
            console.table(rows);
          }
          init();
        }
      );
    });
}

init();
