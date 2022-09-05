// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps to install your app?',
        name: 'installation',
    },
    {
       type: 'input',
       message: 'How do you use this app?',
       name: 'usage', 
    },
    {
        type: 'input',
        message: 'Added contributers to your list of credits if you have any',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'What license do you have?',
        name: 'license',
        choices: ['The MIT License', 'The GPL License']
    }
];
// TODO: Create a function to initialize app
// Run the prompt here
function init() {
    inquirer.prompt(questions).then(   
    answers => { 
        fs.writeFile('sample.md', generateMarkdown(answers), err => err ? console.log(err) : console.log('sweet'));
    }
    )
         
}

// Function call to initialize app
init();
