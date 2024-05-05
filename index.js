const inquirer = require("inquirer");
const fs = require("fs");
const { Pool } = require("pg");
require("dotenv").config();
// const table = require("./db/schema.sql");

// TODO: Create a function to write README file

const pool = new Pool(
  {
    // TODO: Enter PostgreSQL username
    user: "postgres",
    // TODO: Enter PostgreSQL password
    password: process.env.password,
    host: "localhost",
    database: "content_management_systems",
  },
  console.log(`Connected to the movies_db database.`)
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
          "View All Roles,",
          " View All Employees",
          "Add Department",
          "Add A Role",
          "Add an Employee",
          "Update an Employee Role",
        ],
        //chose to add a role
      },

      //   {
      //     type: "input",
      //     name: "Add Department",
      //     message: "Enter the name of the department ",
      //   },
      //   {
      //     type: "input",
      //     name: "Add Role1",
      //     message: "Add the employee's name ",
      //   },

      //   {
      //     type: "input",
      //     name: "Add Role2",
      //     message: "Add the employee's salary",
      //   },

      //   {
      //     type: "input",
      //     name: "Add Role3",
      //     message: "Add the employee's department",
      //   },
      // Add role to the database
      //   {
      // choose to add an employee
      //     type: "input",
      //     name: "Add Employee First Name",
      //     message: "Add Employee's First Name",
      //   },
      //   {
      //     type: "input",
      //     name: "Add Employee Last Name",
      //     message: "Add Employee's Last Name",
      //   },
      //   {
      //     type: "input",
      //     name: "Add Employee Role",
      //     message: "Add Employee's Role",
      //   },

      //   {
      //     type: "input",
      //     name: "Add Manager",
      //     message: "Add Employee's Manager",
      //   },
      //   // that employee is added to the database
      //   // update employee role
      //   {
      //     type: "list",
      //     name: "Update Role1",
      //     message: "Select an Employee",
      //     choices: ["John Doe", " Jane Plaine", "Anita Wine"],
      //   },

      //   {
      //     type: "list",
      //     name: "Update Role2",
      //     message: "Select New Role for Update",
      //     choices: ["Sales", "Engineering", "Legal"],
      //   },
    ])
    .then((data) => {
      if (data.task === "View All Departments") {
        viewDepartments();
      }
    });
}
function viewDepartments() {
  pool.query("select * from department", function (err, { rows }) {
    console.table(rows);
    init();
  });
}
init();
