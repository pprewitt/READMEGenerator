const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const userInputs = [
    {
        type: "input",
        message: "Please enter a project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a project description:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use",
        name: "usage"
    },
    {
        type: "input",
        message: "Who contributed to your project? Did you follow any tutorials or reference any guides?",
        name: "Credits"
    },
    {
        type: "list",
        message: "Please select an open source license:",
        name: "license",
        choices: [
            'Apache 2.0 License', 
            'GNU GPL v3',
	        'MIT License',
 	        'ISC License (ISC)',
	        'None'
        ]
    },
    {
        type: "list",
        message: "Select whether to include the Contributor Covenant:",
        name: "contribute",
        choices: [
            'Yes', 
            'No',
        ]
    },
    {
        type: "input",
        message: "How do you test this project?",
        name: "tests"
    },
];

// function to write README file
.then(function (data) {
    let filename = ("README.md");
   fs.writeFile(fileName, data, function(err) ){
    if (err) {
        return console.log(err);
      }
    
      console.log("README has been generated!");
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
