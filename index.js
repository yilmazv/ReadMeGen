const inquirer = require("inquirer");
const fs = require("fs");
const { emitWarning, title } = require("process");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Description of how the application works.",
      name: "description",
    },
    {
      type: "input",
      message: "How to install the application.",
      name: "installation",
    },
    {
      type: "input",
      message: "How to use the application.",
      name: "usage",
    },
    {
      type: "input",
      message: "Who contributed to this application?",
      name: "contribution",
    },
    {
      type: "input",
      message: "How to test the application?",
      name: "test",
    },
    {
      type: "list",
      message: "What license were used in the making of this application?",
      choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC License", "GNU"],
      name: "license",
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ])
  .then((response) => {
    const fileName = `${response.title}.md`;
    let badgeNew = "";
    let licenseNew = response.license;
    if (licenseNew === "GNU GPLv3") {
      badgeNew = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (licenseNew === "Apache License 2.0") {
      badgeNew = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (licenseNew === "MIT") {
      badgeNew = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (licenseNew === "ISC License") {
      badgeNew = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    } else if (licenseNew === "GNU") {
      badgeNew = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    }
    let readTemp = `## Title
    ${response.title}
## Table of Contents 
If your README is long, add a table of contents to make it easy for users to find what they need.
* [Description](#description)
* [Installation](installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Badges](#license)
* [Test](#test)
* [Github Username](#github%username)
* [Contact me](#contact%me)
    
## Description
  ${response.description}
    
## Installation
  ${response.installation}
    
## Usage
  ${response.usage}
    
## License
  ${response.license}
    
## Contribution
  ${response.contribution}
    
## Badges
  ${badgeNew}
    
## Test
  ${response.test}
    
## GitHub Username
  ${"github.com/" + response.username}
    
## Contact me
  ${response.email}`;
    fs.writeFile(fileName, readTemp, (err) =>
      err ? console.error(err) : console.log("Commit logged!")
    );
  });
