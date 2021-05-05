# TEST AUTOMATION FRAMEWORK
Breeding Insight UI Test Automation Framework
## Features
- Create tests using Gherkin syntax
- Execute tests on Chrome and Firefox
- Execute multiple tests at the same time
- CI/CD integration ready

## Components
- [NightwatchJS](https://nightwatchjs.org/)
- [Nightwatch API](https://nightwatch-api.netlify.app/)
- [CucumberJS](https://cucumber.io/)

## Requirements
To run tests locally, you need to install the following:
[NodeJS](https://nodejs.org/en/)
[Java JRE or JDK](https://www.java.com/en/)
Version Control Client 
[Visual Studio Code](https://code.visualstudio.com/)
| Visuatl Studio Code Plugin | Configuration |
| ------ | ------ |
| Cucumber (Gherkin) Full Support | Edit settings.json file and include the following:<br>"cucumberautocomplete.steps":["src/step_definitions/*.js"],<br>"cucumberautocomplete.strictGherkinCompletion": true, |
| Cuke Step Definition Generator | none |
| Gherkin Table Formatter | none |

## Quick Start
1. Clone the repository. (https://github.com/Breeding-Insight/taf.git)
1. Install dependencies required to run the tests:
```sh
npm install
```
3. Run tests
```sh
npm run test:chrome
```

# Gherkin Conventions
## Setting Values
- Entering a string in a text field use "sets"
_When user sets "abcdef@test.com" in email field_

## Interacting with controls
- Interacting with controls, use "selects"
    _When user selects "United States" in Country dropdown_
    _When user selects "Apple, Banana, Pear" in combo box_
    _When user selects "Yes" in 'Are you hungry' radio button box_
    _When user selects "Here" link_
    _When user selects "Cancel" button_

## Validating controls
- Visibility of a control
    _Then user can see "Snacks" button_
    _Then user can not see "Cancel" link_
