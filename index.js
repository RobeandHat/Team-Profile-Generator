//Imported modules

const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

managementArray = [];

//Prompts for managers, pushes to managementArray

function managerInput() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please input manager name",
        name: "name",
      },
      {
        type: "input",
        message: "Please input manager email address",
        name: "email",
      },
      {
        type: "input",
        message: "Please input manager id",
        name: "id",
      },
      {
        type: "input",
        message: "Please input manager office number",
        name: "office",
      },
    ])
    .then((managerResponse) => {
      const manager = new Manager(
        managerResponse.name,
        managerResponse.email,
        managerResponse.id,
        managerResponse.office
      );
      managementArray.push(manager);
    });
}

managerInput();
