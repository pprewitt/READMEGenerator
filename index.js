const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
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
const generateMarkdown = ({email, gitusername, title, description, installation, usage, credits, license, contribute, test }) =>{
    return `
    \n \n# ${title}  
    \n \n ## Description \n ${description} 
    \n \n# Table of Contents \n- [Installation](#installation) \n- 
    [Usage](#usage) \n- [Contribution](#contribution) \n- 
    [Tests](#tests) \n- [License](#license) \n- [Contact](#contact) \n \n  
    \n \n## Installation \n ${installation} 
    \n \n## Usage \n ${usage}
    \n \n## Credits \n ${credits}
    \n \n## License \n This application is licensed: ${license}
    \n \n## Contribution \n ${contribute} 
    \n \n## Tests \n ${test} 
    \n \n## Questions/Contact \n Contact me: 
    \n \n [GitHub](https://github.com/${gitusername}) \n \n Email: [${email}](mailto:${email}); `
// readme file text
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