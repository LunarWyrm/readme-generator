// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}
function renderLicenseBadge(license) {
  if (license === 'APACHE') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
}

function renderLicenseBadge(license) {
  if (license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
}

function renderLicenseBadge(license) {
  if (license === 'No License') {
    return `delete this test`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'APACHE':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'IBM':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
// add rest of contents to table
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How To Contribute](#contribution)
- [Tests](#tests)
- [Error Reporting](#errors)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Credits
${data.sources}

## License
${renderLicenseBadge(data.license)}

## How To Contribute
${data.contribution}

## Tests
${data.tests}

## Error Reporting
${data.errors}

## Questions
${data.username}
${data.email}

`;
}

module.exports = generateMarkdown;
