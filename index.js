const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fs = require("fs");
const generateHTML = require("./util/generateHtml");
const team = []


function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "As a manager, add your name here"
            },
            {
                type: "input",
                name: "managerID",
                message: "ID"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Email"
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "Office Number"
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum)
            team.push(manager)
            generateTeam()
        })
}

function generateTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamMember",
            message: "Please choose from list below to generate your team",
            choices: ["Engineer", "Intern", "Quit"]
        },
    ]).then(answers => {
        switch (answers.teamMember) {
            case "Engineer":
                createEngineer()

                break;
            case "Intern":
                createIntern()

                break;
            default:
                fs.writeFileSync("index.html", generateHTML(team), "utf-8")
        }
    })
}
function createEngineer() {

    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Name"
        },
        {
            type: "input",
            name: "engineerID",
            message: "ID"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Email"
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "GitHub"
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)
        team.push(engineer)
        generateTeam()
    })
}

function createIntern() {

    inquirer.prompt([
        {
            type: "input",
            name: "InternName",
            message: "Name"
        },
        {
            type: "input",
            name: "InternID",
            message: "ID"
        },
        {
            type: "input",
            name: "InternEmail",
            message: "Email"
        },
        {
            type: "input",
            name: "internSchool",
            message: "School"
        },
    ]).then(answers => {
        const intern = new Intern(answers.InternName, answers.InternID, answers.InternEmail, answers.internSchool)
        team.push(intern)
        generateTeam()
    })
}
promptUser()