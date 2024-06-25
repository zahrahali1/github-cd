// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const questions = require('./questions');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md successfully generated!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        })
        .catch(err => console.error(err));
}

// Function call to initialize app
init();