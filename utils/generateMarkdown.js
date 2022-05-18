tests = [
  {
    name: "Chai",
    badge: "![Chai](https://img.shields.io/badge/Chai-A30701?style=plastic&logo=chai&logoColor=white)",
  },
  {
    name: "Jest",
    badge: "![Jest](https://img.shields.io/badge/Jest-C21325?style=plastic&logo=jest&logoColor=white)",
  },
  {
    name: "Insomnia",
    badge: "![Insomnia](https://img.shields.io/badge/Insomnia-5849be?style=plastic&logo=Insomnia&logoColor=white)",
  },
  {
    name: "Mocha",
    badge: "![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=plastic&logo=Mocha&logoColor=white)",
  },
  {
    name: "Testing Library",
    badge:
    "![Testing Library](https://img.shields.io/badge/Testing%20Library-CB3837?style=plastic&logo=Testing%20Library&logoColor=white)",
  },
];

// credits = [
//   {
//     name: "GitHub",
//     badge: "[![GitHub](https://img.shields.io/badge/GitHub-0E0F7E?style=plastic&logo=github&logoColor=white)](https://www.github.com/)",
//   },
//   {
//     name: "MDN Web Docs",
//     badge: "[![MDN](https://img.shields.io/badge/MDN_Web_Docs-black?style=plastic&logo=mdnwebdocs&logoColor=white)](https://developer.mozilla.org/)",
//   },
//   {
//     name: "Stack Overflow",
//     badge: "[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-blue.svg)](https://stackoverflow.com/)",
//   },
//   {
//     name: "W3Schools",
//     badge: "[![W3Schools](https://img.shields.io/badge/W3Schools-blue.svg)](https://www.w3schools.com/)",
//   },
// ];

const renderTableOfContents = (tableOfContents) => {
  if (tableOfContents.length > 1) {
    let toc = "";
    tableOfContents.forEach((choice) => {
      toc += `* [${choice}](#${choice.toLowerCase().replace(/ /g, "-")})\n`;
    });
    return `## Table of Contents \n` + toc + `\n  \n`;
  }
};

const languageBadges = [
  {
    name: "HTML5",
    badge:
      "[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=plastic&logo=html5&logoColor=white)](https://www.w3.org/TR/html5/)",
  },
  {
    name: "CSS3",
    badge:
      "[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=plastic&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)",
  },
  {
    name: "JavaScript",
    badge:
      "[![Javascript](https://img.shields.io/badge/JavaScript-323330?style=plastic&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)",
  },
  {
    name: "C",
    badge:
      "[![C](https://img.shields.io/badge/C-00599C?style=plastic&logo=c&logoColor=white)](https://www.cprogramming.com/)",
  },
  {
    name: "C++",
    badge:
      "[![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=plastic&logo=c%2B%2B&logoColor=white)](https://en.wikipedia.org/wiki/C%2B%2B)",
  },
  {
    name: "C#",
    badge:
      "[![C#](https://img.shields.io/badge/C%23-239120?style=plastic&logo=c-sharp&logoColor=white)](https://en.wikipedia.org/wiki/C_Sharp)",
  },
  {
    name: "Java",
    badge:
      "[![Java](https://img.shields.io/badge/Java-ED8B00?style=plastic&logo=java&logoColor=white)](https://www.oracle.com/java/)",
  },
  {
    name: "Python",
    badge:
      "[![Python](https://img.shields.io/badge/Python-3776AB?style=plastic&logo=python&logoColor=white)](https://www.python.org/)",
  },
  {
    name: "Ruby",
    badge:
      "[![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=plastic&logo=ruby&logoColor=white)](https://www.ruby-lang.org/)",
  },
  {
    name: "TypeScript",
    badge:
      "[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=plastic&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)",
  },

  {
    name: "Angular",
    badge:
      "[![Angular](https://img.shields.io/badge/Angular-DD0031?style=plastic&logo=angular&logoColor=white)](https://angular.io/)",
  },
  {
    name: "AngularJS",
    badge:
      "[![AngularJS](https://img.shields.io/badge/AngularJS-E23237?style=plastic&logo=angularjs&logoColor=white)](https://angularjs.org/)",
  },
  {
    name: "Bootstrap",
    badge:
      "[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=plastic&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)",
  },
  {
    name: "Express.js",
    badge:
      "[![Express](https://img.shields.io/badge/Express.js-000000?style=plastic&logo=express&logoColor=white)](https://expressjs.com/)",
  },
  {
    name: "JQuery",
    badge:
      "[![JQuery](https://img.shields.io/badge/jQuery-0769AD?style=plastic&logo=jquery&logoColor=white)](https://jquery.com/)",
  },
  {
    name: "JSON",
    badge:
      "[![JSON](https://img.shields.io/badge/JSON-5E5C5C?style=plastic&logo=json&logoColor=white)](https://www.json.org/)",
  },
  {
    name: "Node.js",
    badge:
      "[![Node.js](https://img.shields.io/badge/Node.js-339933?style=plastic&logo=nodedotjs&logoColor=white)](https://nodejs.org/)",
  },
  {
    name: "NPM",
    badge:
      "[![NPM](https://img.shields.io/badge/NPM-CB3837?style=plastic&logo=npm&logoColor=white)](https://www.npmjs.com/)",
  },
  {
    name: "React",
    badge:
      "[![React](https://img.shields.io/badge/React-20232A?style=plastic&logo=react&logoColor=61DAFB)](https://reactjs.org/)",
  },
  {
    name: "Redux",
    badge:
      "[![Redux](https://img.shields.io/badge/Redux-593D88?style=plastic&logo=redux&logoColor=white)](https://redux.js.org/)",
  },
  {
    name: "Vue",
    badge:
      "[![Vue](https://img.shields.io/badge/Vue.js-35495E?style=plastic&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)",
  },

  {
    name: "Heroku",
    badge:
      "[![Heroku](https://img.shields.io/badge/Heroku-430098?style=plastic&logo=heroku&logoColor=white)](https://www.heroku.com/)",
  },

  {
    name: "MongoDB",
    badge:
      "[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=plastic&logo=mongodb&logoColor=white)](https://www.mongodb.com/)",
  },
  {
    name: "MySQL",
    badge:
      "[![MySQL](https://img.shields.io/badge/MySQL-005C84?style=plastic&logo=mysql&logoColor=white)](https://www.mysql.com/)",
  },

  {
    name: "Sequelize.js",
    badge:
      "[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=plastic&logo=Sequelize&logoColor=white)](https://sequelize.org/)",
  },
];

const renderLanguageSection = (languages, languageBadges) => {
  if (languages.length === 0) {
    return "";
  } else {
    return `
      ## Languages and Tools
    `;
  }
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=plastic)](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=plastic)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=plastic)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg?style=plastic)](https://opensource.org/licenses/BSD-3-Clause)";
    case "BSD 2":
      return "[![License: BSD 2](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg?style=plastic)](https://opensource.org/licenses/BSD-2-Clause)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=plastic)](https://opensource.org/licenses/ISC)";
    case "UNLICENSED":
      return "";
    default:
      return "";
  }
}
                
const renderTestSection = (tests) => {
  if (tests.length === 0) {
    return "";
  } else {
    return tests.map((test) => test.badge).join("\n");
  }
};
  
const renderCreditsSection = (data) => {
  if (data.credits) {
    return "## Credits \n" + data.credits + "\n";
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description ${renderLicenseSection(data.license)}
  
  ${data.description}
  
  ${renderTableOfContents(data.tableOfContents)}
  
  ## Installation
  
  ${data.installation}
      
  ## Usage

  ${data.usage}

  ${renderLanguageSection(data.languages)}

  ## License

  Licensed under the ${data.license} license. See [${`LICENSE.TXT`}](./LICENSE.TXT) for more information.
  
  ## Contributing

  ${data.contributing}

  ## Tests

  ${renderTestSection(tests)}

  ## Questions?
  Feel free to contact me!

  [![Github](https://img.shields.io/badge/GitHub-100000?style=plastic&logo=github&logoColor=white)](https://www.github.com/${
    data.github
  })
  ![Gmail](https://img.shields.io/badge/Gmail-D14836?style=plastic&logo=gmail&logoColor=white)
  `;
}

module.exports = generateMarkdown;
