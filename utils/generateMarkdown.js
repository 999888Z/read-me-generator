// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title} 
## Description
${answers.description}
## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
This application is licensed under ${answers.license}
## Contributing
${answers.contributing}
## Tests 
${answers.tests}
## Questions
Please email me at ${answers.email} with any questions. \n
Github Profile: https://github.com/${answers.username}`}

module.exports = generateMarkdown;
