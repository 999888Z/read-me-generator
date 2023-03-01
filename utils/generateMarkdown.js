
// Created a function that returns the license link

function getLicenseKeyword(license) {
  let licenseKey = {};

  if (license === 'Apache') {
    licenseKey = {
      badgeKey: 'Apache%202.0-blue.svg',
      linkKey: 'Apache-2.0',
    }
  }
  else if (license === 'Eclipse') {
    licenseKey = {
      badgeKey: 'EPL%201.0-red.svg',
      linkKey: 'EPL-1.0',
    }
  }
  else if (license === 'IBM') {
    licenseKey = {
      badgeKey: 'IPL%201.0-blue.svg',
      linkKey: 'IPL-1.0',
    }
  }
  else if (license === 'ISC') {
    licenseKey = {
      badgeKey: 'ISC-blue.svg',
      linkKey: 'IPL',
    }
  }
  else if (license === 'MIT') {
    licenseKey = {
      badgeKey: 'MIT-yellow.svg',
      linkKey: 'MIT',
    }
  }


  return licenseKey;
}

// Created a function that returns a license badge based on which license is passed in

function renderLicenseBadgeLink(license) {

  if (license === '') {
    return;
  }

  const licenseKey = getLicenseKeyword(license);

  return `[![License](https://img.shields.io/badge/License-${licenseKey.badgeKey})](https://opensource.org/licenses/${licenseKey.linkKey})`;
}



// Created a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title} 
${renderLicenseBadgeLink(answers.license)}
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
This application is licensed under ${answers.license}.
## Contributing
${answers.contributing}
## Tests 
${answers.tests}
## Questions
Please email me at ${answers.email} with any questions. \n
Github Profile: https://github.com/${answers.username}`}

module.exports = generateMarkdown;
