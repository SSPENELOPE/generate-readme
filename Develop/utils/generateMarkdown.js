// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let userLicenseBadge = '';
  if (license.license === 'The MIT License') {
      userLicenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else if(license.license === 'The GPL License'){
    userLicenseBadge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (license.license === 'Apache 2.0') {
    userLicenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else {
    userLicenseBadge = '';
  }
    return userLicenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let userLicenseLink = '';
  if (license.license === 'The MIT License') {
    userLicenseLink = ``
  } else if(license.license === 'The GPL License'){
    userLicenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license.license === 'Apache 2.0') {
    userLicenseLink = `(https://opensource.org/licenses/Apache-2.0)`
  } else {
    userLicenseLink = '(https://opensource.org/licenses/MIT)';
  }
    return userLicenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ## Description
  - ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#License)
  ## Installation
  - ${data.installation}
  ## Usage 
  - ${data.usage}
  ## Credits
  - ${data.credits}
  ## License
  - ${renderLicenseBadge(data)}${renderLicenseLink(data)} 

`;
}

module.exports = generateMarkdown;
