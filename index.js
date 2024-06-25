// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'What would you like to call your project?'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your github username'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
      },
      {
        type: 'input',
        name: 'install',
        message: 'How do we install your app?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do we use your app?'
      },
      {
        type: 'input',
        name: 'errors',
        message: 'How should we report any errors?'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How can we contribute?'
      },
      {
        type: 'input',
        name: 'sources',
        message: 'Cite any sources used in the project.'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What tests should be run for it?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select one of the following licenses',
        choices: ['MIT', 'IBM', 'APACHE', 'No License']
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
//some kind of prompt to ask user for details
function init() {
    inquirer.prompt(questions).then(data => {
        writeToFile('README.md', data)
    })
}

// Function call to initialize app
init();
