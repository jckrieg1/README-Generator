// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const createMarkdownContent = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project Description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project Usage?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution Info?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions(email)?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'For questions(github)?'
    },
    {
        type: 'list',
        message: 'What license do you want?',
        name: 'license',
        choices: ['Apache 2.0 License', 'IBM', 'ISC', 'MIT', 'Mozilla'],
    }
];


// TODO: Create a function to initialize app
function init() {
    // ask the user for the data they want to insert into the markdown (inquirer)
    return inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            let markdownContent = createMarkdownContent(answers)
            // writeToFile('README.md', markdownContent);
            fs.writeFile('README.md', markdownContent, function (err) {
                if (err) {
                    console.error(err);
                } else {
                    console.log('File created successfully!');
                }
            });
        })
        .catch((error) => {
            console.log(error);
        })
}


// Function call to initialize app
init();
