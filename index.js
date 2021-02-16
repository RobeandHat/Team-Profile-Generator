const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const employeesArray = [];

addEmployee();

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select employee role",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
      },
      {
        type: "input",
        message: "Please enter employee name",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter employee id",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter employee email",
        name: "email",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let moreInfo = "";
      switch (role) {
        case "Manager":
          moreInfo = "phone number";
          break;

        case "Intern":
          moreInfo = "school name";
          break;

        case "Engineer":
          moreInfo = "GitHub username";
          break;
      }

      inquirer
        .prompt([
          {
            message: `What is the employee's ${moreInfo}?`,
            name: "moreInfo",
          },
          {
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"],
            name: "addAnother",
          },
        ])
        .then(function ({ moreInfo }) {
          let newEmployee;
          switch (role) {
            case "Manager":
              newEmployee = new Manager(name, id, email, moreInfo);
              break;

            case "Engineer":
              newEmployee = new Engineer(name, id, email, moreInfo);
              break;

            case "Intern":
              newEmployee = new Intern(name, id, email, moreInfo);
              break;
          }
          employeesArray.push(newEmployee);
        });
    });
}
