const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[${license}](${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://lbesson.mit-license.org/`;
  }
  if (license === "GPL") {
    return `http://perso.crans.org/besson/LICENSE.html`;
  }
  if (license === "Apache") {
    return `http://www.apache.org/licenses/LICENSE-2.0`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  } else {
    return renderLicenseBadge(license);
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#collaborators)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  Project is Licensed under the ${data.license}

  ## Badges
  ${renderLicenseSection(data.license)}

  ## Collaborators
  ${data.contributing}

  ## Questions
  * [GitHub](https://github.com/${data.github})
  * For any questions, please reach me at [email](${data.email})
  
  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
