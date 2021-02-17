const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const employeeArray = [];

addEmployee();
buildHtml();
buildCSS();

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
          moreInfo = "room number";
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
            message: "Do you have more employees to make?",
            choices: ["Yes", "No"],
            name: "addAnother",
          },
        ])
        .then(function ({ moreInfo, addAnother }) {
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

          //Checks user for new employees, otherwise, adds ending to html

          employeeArray.push(newEmployee);
          content(newEmployee).then(function () {
            if (addAnother === "Yes") {
              addEmployee();
            } else {
              console.log("Your team has been built!");
              fs.appendFile(
                "./dist/index.html",
                `</div>
                </div>
               </body>
             </html>`,
                function (err) {
                  if (err) {
                    console.log(err);
                  }
                }
              );
            }
          });
        });
    });
}

//Builds the top half of the html

function buildHtml() {
  const html = `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Our Team</title>
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
                integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
                <link rel="stylesheet" href="style.css">
                <script src="https://kit.fontawesome.com/2f0e2cb727.js" crossorigin="anonymous"></script>    
            </head>
                <body>
                    <header class="container-fluid bg-dark text-white text-center">
                        <h1>Our Team</h1>
                    </header>   
                    <div class="container">
                        <div class="row">
                        `;
  fs.writeFile("./dist/index.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

//Creates CSS file

function buildCSS() {
  const CSS = `.card {
      max-width: 225px;
      min-width: 225px;
      text-align: center
      };
  
body {
  background-color: #d3d3d3;
};

.card-header {
  padding: 10px;
}
                   `;
  fs.writeFile("./dist/style.css", CSS, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

/////////////////////////////////////////////////////////////////////////
//Main Content Functions
////////////////////////////////////////////////////////////////////////

function content(response) {
  return new Promise(function (resolve, reject) {
    const name = response.getName();
    const role = response.getRole();
    const id = response.getId();
    const email = response.getEmail();
    let card = "";
    switch (role) {
      case "Manager":
        const roomNumber = response.getroomNumber();
        card = `
                <div class="card m-4">
                    <div class="card-header bg-dark text-white">
                        <h3>${name}</h3>
                        <h5><i class="fas fa-mug-hot"></i> Manager</h5>
                    </div>
                    <div class="card-body bg-light p-2">
                        <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: ${id}</p>
                        <p class="card-text bg-white border p-2 my-0">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">Room Number: ${roomNumber}</p>
                    </div>
                </div>`;
        break;

      case "Engineer":
        const gitHub = response.getGithub();
        card = `
                <div class="card m-4">
                    <div class="card-header bg-dark text-white">
                        <h3>${name}</h3>
                        <h5><i class="fas fa-glasses"></i> Engineer</h5>
                    </div>
                    <div class="card-body bg-light p-2">
                        <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: ${id}</p>
                        <p class="card-text bg-white border p-2 my-0">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">Github: <a href="http://github.com/${gitHub}" target="_blank">${gitHub}</a></p>
                    </div>
                </div>`;
        break;

      case "Intern":
        const school = response.getSchool();
        card = `
                <div class="card m-4">
                    <div class="card-header bg-dark text-white">
                        <h3>${name}</h3>
                        <h5><i class="fas fa-user-graduate"></i> Intern</h5>
                    </div>
                    <div class="card-body bg-light p-2">
                        <p class="card-text bg-white border-top border-right border-left p-2 my-0">ID: ${id}</p>
                        <p class="card-text bg-white border p-2 my-0">Email: <a href="mailto:${email}">${email}</a></p>
                        <p class="card-text bg-white border-bottom border-right border-left p-2 my-0">School: ${school}</p>
                    </div>
                </div>`;
        break;
    }
    console.log("Employee Added!");
    fs.appendFile("./dist/index.html", card, function (err) {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}
