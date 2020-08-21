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
    name: "test"
},

]);
}
const generateMarkdown = ({email, gitusername, title, description, installation, usage, credits, license, contribute, test }) =>{
    return `
    \n \n# ${title}  // Title
    \n \n ## Description \n ${description} // Description
    \n \n# Table of Contents \n- [Installation](#installation) \n- // Table Of Contents
    [Usage](#usage) \n- [Contribution](#contribution) \n- 
    [Tests](#tests) \n- [License](#license) \n- [Questions](#questions) \n \n  
    ## Installation \n ${installation} // Installation
    \n \n## Usage \n ${usage} // Usage
    \n \n## License \n This application is covered by: ${license} // License Section
    \n \n## Contribution \n ${contribute} // Contribution 
    \n \n## Tests \n ${test} // Tests
    \n \n## Questions \n If you have any questions feel free to contact: \n \n // Questions & Contact
    [GitHub](https://github.com/${gitusername}) \n \n Email: [${email}](mailto:${email}); `
// readme file text
}

// async function writePage() {
//   await inquirer.prompt(readMePrompts).then(function(response){
//     let email = response.email
//     let gitusername = response.gitusername 
//     let title = response.title
//     let description = response.description
//     let installation = response.installation
//     let usage = response.usage
//     let credits = response.credits
//     let license = response.license
//     let test = response.test

   
   
//    fs.writeFile('README.md', data, function(err) {
//         if (err) {
//             return console.log(err);
//           }
        
//           console.log("README has been generated!");
//   });
// } 


// // function to write README file
// inquirer.prompt(userInputs).then(function (data) {
//     let filename = ("README.md");
   
// })

// function to initialize program
const init= async () =>{
    try {
        const answers = await readMePrompts();
        const README = generateMarkdown(answers);
        await writeFileAsync(README.md, answers)
        console.log("README has been generated!")
    } catch (error) {
        console.log (error)
    }
    
}

// function call to initialize program
init()