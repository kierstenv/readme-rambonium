// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short description of your project.",
  },
  {
    type: "checkbox",
    name: "tableOfContents",
    message: "What sections would you like to include in your README?",
    choices: ["Description", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"],
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for use.",
  },
  {
    type: "checkbox",
    name: "languages",
    message: "Which languages are used in this project?",
    choices: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "C",
      "C++",
      "C#",
      "Java",
      "Python",
      "Ruby",
      "TypeScript",
      new inquirer.Separator(" = Frameworks and Libraries = "),
      "Angular",
      "AngularJS",
      "Bootstrap",
      "Express.js",
      "JQuery",
      "Node.js",
      "NPM",
      "React",
      "Redux",
      "Vue.js",
      new inquirer.Separator(" = Cloud = "),
      "Heroku",
      new inquirer.Separator(" = Databases = "),
      "MongoDB",
      "MySQL",
      new inquirer.Separator(" = ORM = "),
      "Sequelize.js",
    ],
  },
  {
    type: "list",
    name: "license",
    message: "Under which license is your project distributed?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "BSD 2", "ISC", "UNLICENSED"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What do other developers need to know about contributing to the repo?",
  },
  {
    type: "checkbox",
    name: "tests",
    message: "Which test(s) does this repo use?",
    choices: ["Chai", "Jest", "Insomnia", "Mocha", "Testing Library"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "credits",
    message: "Who contributed to this project?",
  }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, err => {
    if (err) {
      throw err;
    } else {
      console.log('Successfully wrote to README.md');
    }
  });
};

// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions).then(answers => {
    const data = generateMarkdown(answers);
    writeToFile('README.md', data);
  });
};

// TODO: Function call to initialize app
init();