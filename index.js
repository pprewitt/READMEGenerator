const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile); 

const readMePrompts = () => {
    return inquirer.prompt([
{
    type: "input",
    message: "Please enter your email address: ",
    name: "email"
},
{
    type: "input",
    message: "Please enter your github username: ",
    name: "gitusername"
},
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
    name: "credits"
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
        'Unlicensed'
    ]
},
{
    type: "input",
    message: "Specify instructions to contribute to your project/code:",
    name: "contribute",
    
},
{
    type: "input",
    message: "How do you test this project?",
    name: "test"
},

]);
}

const init= async () =>{
    try {
        const answers = await readMePrompts();
        const README = generateMarkdown(answers);
        await writeFileAsync("README.md", README)
        console.log("README has been generated!")
    } catch (error) {
        console.log (error)
    }
    
}

// function call to initialize program
init()