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
    userLicenseLink = `(https://opensource.org/licenses/MIT)`
  } else if(license.license === 'The GPL License'){
    userLicenseLink = `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license.license === 'Apache 2.0') {
    userLicenseLink = `(https://opensource.org/licenses/Apache-2.0)`
  } else {
    userLicenseLink = ``;
  }
    return userLicenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license.license === 'The MIT License') {
    licenseSection = `This repository is licensed under 'The MIT License'`
  } else if(license.license === 'The GPL License'){
    licenseSection = `This repository is licensed under 'The GPL License'`
  } else if (license.license === 'Apache 2.0') {
    licenseSection = `This repository is licensed under 'The Apache 2.0 License'`
  } else {
    licenseSection = ``;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${renderLicenseBadge(data)}
  
  # ${data.title}

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
  - ${renderLicenseSection(data)} 
  - ${renderLicenseLink(data)}

  ## Contributing
  - ${data.contribute}

  # Test Instructions
  - ${data.test}

  ## Questions
  - You can view this repository on my github page ${data.github}
  - If you have any questions you can email me at ${data.email}
`;
}

module.exports = generateMarkdown;
