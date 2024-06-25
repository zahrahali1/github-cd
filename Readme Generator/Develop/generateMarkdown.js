//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
    if (license !== "None") {
        return `\n* [License](#license)\n`;
    }
    return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        return `## License

This project is licensed under the ${license} license.`;
    }
    return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
For questions or concerns, please contact ${data.githubUsername} via [GitHub](https://github.com/${data.githubUsername}) or email at ${data.email}.
`;
}

module.exports = generateMarkdown;