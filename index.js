const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern =require('./lib/Intern');
const htmlRender = require('./src/htmlRenderer');
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "Output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter an employee ID. (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an Email address. (Required)',
            validate: email => {
                if (email) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the Office Number? (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Which action would you like to perform next:',
            choices: ['add an engineer', 'add an intern', 'finish team building']
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            case "add an engineer":
                promptEngineer();
                break;
            case "add an intern":
                promptIntern();
                break;
            default:
                buildTeam();       
        }
    });
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Engineers name? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter an employee ID. (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an Email address. (Required)',
            validate: email => {
                if (email) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter Enigineer GitHub Username. (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Interns name? (Required)',
            validate: internName => {
                if (internName) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Please enter an employee ID. (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter an Email address. (Required)',
            validate: email => {
                if (email) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the Interns School? (Required)',
            validate: school => {
                if (school) {
                    return true;    
                } else {
                    console.log('Field can not be left blank.');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(Intern);
        promptMenu();
    })
};

const buildTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, htmlRender(teamMembers), "utf-8");
}

promptManager();