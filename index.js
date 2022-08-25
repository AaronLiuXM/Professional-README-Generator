// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Welcome to the README generator! Please provide your full name",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a short description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "How to install the app",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use the app",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license for your app",
    choices: ["MIT License", "GNU General Public License", "Apache License"],
  },
  {
    type: "input",
    name: "contributing",
    message: "List of collaborators",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub usename?",
  },
  {
    type: "input",
    name: "email",
    message: "Waht is your email",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide the tests for your application, and how to use: ",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(
    `${fileName}.md`,
    generateMarkdown(data),
    "utf8",
    function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Your data is written to ${fileName}.md.`);
      }
    }
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      writeToFile(response.title, response);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
