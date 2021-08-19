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
| Visual Studio Code Plugin | Configuration |
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
## Running Tests Locally
Files to change

Scripts to run tests are in package.json. One can add additional scripts locally to run a subset of scenarios with a particular tag, ie:
```sh
"test:chromeSmokeTests": "mkdirp report && cucumber-js src/features --require cucumber.conf.js **--tags @SmokeTests** --require src/step_definitions --format node_modules/cucumber-pretty --format json:report/cucumber_report.json --env chrome; npm run report"
```
and then run it in terminal as
```sh
npm run test:chromeSmokeTests
```
## Database Assumptions
The implemented scenarios assume the following data is set up on BI:

**Users**
| Name | Email | System Role |
| ------ | ------ | ------ |
| Christian | christian@mailinator.com | admin |
| Cucumber Breeder | cucumberbreeder@mailinator.com | |
| Cucumber Member | cucumbermember@mailinator.com| |
| TrailMix Breeder | trailmix@mailinator.com | |

**Programs**
| Name | Species | Users (role) |
| ------ | ------ | ------ |
| Snacks | Grape | Cucumber Breeder (breeder) <br> Cucumber Member (member) <br> Christian (breeder) |
| Trail Mix | Grape | Cucumber Breeder (member) <br> TrailMix Breeder (breeder) <br> Christian (breeder) |

# Gherkin Conventions
## Setting Values
- Entering a string in a text field use "sets"
<br>_When user sets "abcdef@test.com" in email field_

## Interacting with controls
- Interacting with controls, use "selects"
<br>_When user selects "United States" in Country dropdown_
<br>_When user selects "Apple, Banana, Pear" in combo box_
<br>_When user selects "Yes" in 'Are you hungry' radio button box_
<br>_When user selects "Here" link_
<br>_When user selects "Cancel" button_

## Validating controls
- Visibility of a control, use "see" and "not see"
<br>_Then user can see "Snacks" button_
<br>_Then user can not see "Cancel" link_
