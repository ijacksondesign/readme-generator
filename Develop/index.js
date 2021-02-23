// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('Please enter your email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter a title for your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description for your project. (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            }
            else {
                console.log('Please enter a description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write instructions on how to use your project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else {
                console.log('Please write insructions for your project.');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license.',
        choices: ['GPLv3', 'Apache 2.0', 'MIT', 'Unlicense', 'None']
    },
    {
        type: 'confirm',
        name: 'contributors',
        message: 'Do you have any contributors?',
        default: false
    },
    {
        type: 'input',
        name: 'test',
        message: 'Provide tests for your project.',
        validate: testInput => {
            if (testInput) {
                return true;
            }
            else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();
