const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

let id = 0;

const employeeSummary = [];

function information (response) {
    inquirer
        .prompt ([
            {
                type: 'list',
                message: 'What is your role?',
                name: 'role',
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            },

            {
                message: "Please enter your name!",
                name: "name"
            },

            {
                message: "Please enter your email address!",
                name: "email"
            },

            {
                message: "Please enter your office number!",
                name: "officeNumber",
                when: function (response) {
                    return response.role === "Manager"
                }

            },

            {
                message: "Please Enter the schools name",
                name: "school",
                when: function (response) {
                    return response.role === "Intern"
                }
            },

            {
                message: "Please enter the engineer's Github information.",
                name: "github",
                when: function (response) {
                    return response.role === "Engineer";
                }
            },
            
            {
                type: 'confirm',
                message: "Are there any more employees you would like to add?",
                name: "confirm"
            }


        ])
        
}

​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
