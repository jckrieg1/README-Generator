// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Mozilla') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  }
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  if (license === 'ISC') {
    return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)'
}
if (license === 'IBM') {
  return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)'
}
if (license === 'Apache 2.0') {
  return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
}
if (license === null) {
return ''
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'Mozilla') {
    return `[Mozilla](https://opensource.org/licenses/MPL-2.0)`
  }
if (license === 'MIT') {
    return `[MIT](https://opensource.org/licenses/MIT)`
}
if (license === 'ISC') {
  return `[ISC](https://opensource.org/licenses/ISC)`
}
if (license === 'IBM') {
  return `[IBM](https://opensource.org/licenses/IPL-1.0)`
}
if (license === 'Apache 2.0') {
return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Mozilla') {
    return `Lincensed under the ${renderLicenseLink(license)} license`
  }
if (license === 'MIT') {
  return `Lincensed under the ${renderLicenseLink(license)} license`
}
if (license === 'ISC') {
  return `Lincensed under the ${renderLicenseLink(license)} license`
}
if (license === 'IBM') {
  return `Lincensed under the ${renderLicenseLink(license)} license`
}
if (license === 'Apache 2.0') {
  return `Lincensed under the ${renderLicenseLink(license)} license`
}
if (license === null) {
  return ''
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Installation](#Installation)
  - [Questions](#Questions)
  - [License](#License)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Installation
  ${data.installation}

  ## Questions
  Please email me with any additional questions you may have with the email below. 
  - ${data.email}
  - ${data.github}

  ## License
  ${renderLicenseSection(data.license)}
  `;

}

// generateMarkdown()


module.exports = generateMarkdown;


// Apache 2.0 License
// License
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// IBM
// IBM Public License Version 1.0
// License: IPL 1.0
// [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

// ISC
// ISC License (ISC)
// License: ICL
// [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

// MIT
// The MIT License
// License: MIT
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// Mozilla
// Mozilla Public License 2.0
// License: MPL 2.0
// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
