// function to generate markdown for README
const generateMarkdown = ({email, gitusername, title, description, installation, usage, credits, license, contribute, test }) =>{
  return `

  ![npm](https://img.shields.io/static/v1?label=license&message=${license}&color=blue)
  \n \n # ${title}  
  \n \n ## Description \n ${description} 
  \n \n # Table of Contents \n- [Installation](#installation) \n- 
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

}

module.exports = generateMarkdown;
