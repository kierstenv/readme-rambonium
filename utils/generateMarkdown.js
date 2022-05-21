const renderTableOfContents = (tableOfContents) => {
  if (tableOfContents.length) {
    return "***\n ## Table of Contents \n" + tableOfContents.map(item => `* [${item}](#${item})`).join("\n") + " \n***\n";
  }
  return "";
};

const renderInstallation = (installation) => {
  if (installation.length) {
    return "## Installation \n" + installation;
  }
  return "";
};

const renderUsage = (usage) => {
  if (usage.length) {
    return "## Usage \n" + usage;
  }
  return "";
};

const renderLanguages = (languages) => {
  if (languages.length) {
    const languageBadges = {
      "HTML5": "[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://www.w3.org/TR/html5/)",
      "CSS3": "[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)",
      "JavaScript": "[![Javascript](https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)",
      "C": "[![C](https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white)](https://www.cprogramming.com/)",
      "C++": "[![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=flat-square&logo=c%2B%2B&logoColor=white)](https://en.wikipedia.org/wiki/C%2B%2B)",
      "C#": "[![C#](https://img.shields.io/badge/C%23-239120?style=flat-square&logo=c-sharp&logoColor=white)](https://en.wikipedia.org/wiki/C_Sharp)",
      "Java": "[![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=java&logoColor=white)](https://www.oracle.com/java/)",
      "Python": "[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)",
      "Ruby": "[![Ruby](https://img.shields.io/badge/Ruby-CC342D?style=flat-square&logo=ruby&logoColor=white)](https://www.ruby-lang.org/)",
      "TypeScript": "[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)",
      "Angular": "[![Angular](https://img.shields.io/badge/Angular-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.io/)",
      "AngularJS": "[![AngularJS](https://img.shields.io/badge/AngularJS-E23237?style=flat-square&logo=angularjs&logoColor=white)](https://angularjs.org/)",
      "Bootstrap": "[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)",
      "Express.js": "[![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)",
      "JQuery": "[![JQuery](https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/)",
      "JSON": "[![JSON](https://img.shields.io/badge/JSON-5E5C5C?style=flat-square&logo=json&logoColor=white)](https://www.json.org/)",
      "Node.js": "[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)",
      "NPM": "[![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/)",
      "React": "[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)",
      "Redux": "[![Redux](https://img.shields.io/badge/Redux-593D88?style=flat-square&logo=redux&logoColor=white)](https://redux.js.org/)",
      "Vue": "[![Vue](https://img.shields.io/badge/Vue.js-35495E?style=flat-square&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)",
      "Heroku": "[![Heroku](https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=heroku&logoColor=white)](https://www.heroku.com/)",
      "MongoDB": "[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)",
      "MySQL": "[![MySQL](https://img.shields.io/badge/MySQL-005C84?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)",
      "Sequelize.js": "[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=Sequelize&logoColor=white)](https://sequelize.org/)",
    };  
    return "## Languages & Tools \n" + languages.map(lang => languageBadges[lang]).join('');
  }  
  return "";
};  

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)";
    case "APACHE 2.0":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License: BSD 3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg?style=flat-square)](https://opensource.org/licenses/BSD-3-Clause)";
    case "BSD 2":
      return "[![License: BSD 2](https://img.shields.io/badge/License-BSD%202--Clause-blue.svg?style=flat-square)](https://opensource.org/licenses/BSD-2-Clause)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](https://opensource.org/licenses/ISC)";
    case "UNLICENSED":
      return "";
    default:
      return "";
  }
}

const renderContributing = (contributing, github) => {
  if (contributing) {
    return "## Contributing \n" + "This project is open source and we welcome contributions from the community. \n" + "Please visit the [GitHub repository](https://www.github.com/" + github + ") to see how to contribute. \n";
  }
  return "";
};

const renderTests = (tests) => {
  if (tests.length) {
    const testBadges = {
      "Chai": "![Chai](https://img.shields.io/badge/Chai-A30701?style=flat-square&logo=chai&logoColor=white)",
      "Jest": "![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)",
      "Insomnia": "![Insomnia](https://img.shields.io/badge/Insomnia-5849be?style=flat-square&logo=Insomnia&logoColor=white)",
      "Mocha": "![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=flat-square&logo=Mocha&logoColor=white)",
      "Testing Library": "![Testing Library](https://img.shields.io/badge/Testing%20Library-CB3837?style=flat-square&logo=Testing%20Library&logoColor=white)",
    };    
    return "## Tests \n" + tests.map(test => testBadges[test]).join('');
  }
  return "";
};

const renderQuestions = (github, gmail) => {
  if (github.length || gmail.length) {
    return "## Questions? \n" + "\n Feel free to contact me! \n" + `[![Github](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://www.github.com/${github})` + "\n" + `[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:${gmail})`;
  }
  return "";
};

const renderCredits = (credits) => {
  if (credits.length) {
    const creditBadges = {
      "UT Austin CBC": "[![UT Austin CBC](https://img.shields.io/badge/-UT%20Austin%20CBC-orange?style=flat-square)](https://techbootcamps.utexas.edu/coding//)",
      "GitHub":
        "[![GitHub](https://img.shields.io/badge/GitHub-0E0F7E?style=flat-square&logo=github&logoColor=white)](https://www.github.com/)",
      "MDN Web Docs":
        "[![MDN](https://img.shields.io/badge/MDN_Web_Docs-black?style=flat-square&logo=mdnwebdocs&logoColor=white)](https://developer.mozilla.org/)",
      "Stack Overflow":
        "[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-blue.svg?style=flat-square)](https://stackoverflow.com/)",
      "W3Schools":
        "[![W3Schools](https://img.shields.io/badge/W3Schools-blue.svg?style=flat-square)](https://www.w3schools.com/)",
    };
    return "## Credits \n" + credits.map(credit => creditBadges[credit]).join("");
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description ${renderLicense(data.license)}
  
  ${data.description}
  
  ${renderTableOfContents(data.tableOfContents)}
  
  ${renderInstallation(data.installation)}
  
  ${renderUsage(data.usage)}

  ${renderLanguages(data.languages)}

  ## License

  Licensed under the ${data.license} license. See [${`LICENSE.TXT`}](./LICENSE.TXT) for more information.

  ${renderContributing(data.contributing, data.github)}

  ${renderTests(data.tests)}

  ${renderQuestions(data.github, data.gmail)}

  ${renderCredits(data.credits)}
  
  `;
}

module.exports = generateMarkdown;