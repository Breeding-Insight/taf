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
Files to change:
- nightwatch.conf.js (change launch_url under default to your local url)
- workspace.code-workspace (change server to local:<your local bi-web port>)

Scripts to run tests are in package.json. One can add additional scripts locally to run a subset of scenarios with a particular tag, ie running all scenarios tagged as @SmokeTests:
```sh
"test:chromeSmokeTests": "mkdirp report && cucumber-js --require cucumber.conf.js --tags @SmokeTests --require src/step_definitions src/features --format @cucumber/pretty-formatter --format json:report/cucumber_report.json --world-parameters \"{\\\"browser\\\":\\\"chrome\\\"}\"; npm run report"

```
and then run it in terminal as
```sh
npm run test:chromeSmokeTests
```

Cucumber report by default will be saved to a folder and be overwritten with subsequent runs.

NOTE: If you are not using docker you may need to modify nightwatch.conf.js to change the "launch_url" in the test_settings/docker, to your local host and port. Example:
```
docker: {
  launch_url: "http://biproxy",
},
```
TO
```
docker: {
  launch_url: "http://localhost:8080",
},
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

**Automated Database Setup**

There is a script `setup_local_db.sh` that will setup your bidb and brapi-server databases assuming bi-docker-stack and taf repos are at the same level in the filesystem and default docker services/ports are used. 

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

# Running Tests With Selenium Docker and BI-Docker-Stack
TAF can launch browser on a Selenium docker container and run tests on bi-docker-stack.

## Prerequisite:
* Docker Desktop

## Clone the following repositories:
* https://github.com/Breeding-Insight/bi-docker-stack.git
* https://github.com/Breeding-Insight/taf.git

## Configuration:
* Set `API_BASE_URL` environmental variable to http://biproxy
* Set `WEB_BASE_URL` environmental variable to http://biproxy
* Set `JWT_DOMAIN` environmental variable to biproxy
* Set `REGISTERED_DOMAIN` environmental variable to biproxy

* Update the host's host file 
Windows : C:\Windows\System32\drivers\etc\host 
Unix: /etc/hosts
Add the following line "127.0.0.1 biproxy"

* Set the browser to "docker.chrome".
In package.json, set browser to "docker.chrome".
e.g. "--world-parameters \"{\\\"browser\\\":\\\"docker.chrome\\\"}\""

## Starting the containers
* For running specific branch code, make sure code is checked out in bi-docker-stack sub repo and go to the bi-docker-stack folder and execute
```sh
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d
```
* For running latest development branch, go to the bi-docker-stack folder and execute
```sh
docker-compose -f docker-compose.yml -f docker-compose-qa.yml up -d
```

* Go to TAF folder and execute
```sh
docker-compose up -d
```

