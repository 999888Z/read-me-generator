// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What are the usage instructions for your project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are the contributing guidelines for your project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What are the tests for your project?',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Choose a license.',
        choices: [ "Apache License 2.0", "GNU General Public License v3.0", "MIT License"], 
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please input your GitHub username.',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please input your email address.',
        name: 'email'
    },
    
])}

// TODO: Create a function to write README file
function writeToFile(info) {
    fs.writeFile('readme2.md', info, (err) =>
   err ? console.error(err) : console.log('Success!')
 );
}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
     
      .then((answers) => {
       const info = generateMarkdown(answers)
  
       writeToFile(info)
    })
     

      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();