import axios from 'axios';
import * as core from '@actions/core';

core.warning(`${process.argv}  warning test`);
core.info(`${process.argv}  info test`);
let programInfo = process.argv.slice(2).map(str => str.trim());

/*await axios.all([
  axios.post
  axios.post
]); for calling multiple post
//make a loop
//`${process.env.VUE_APP_BI_API_V1_PATH}/programs/${programId}/brapi/v2/search/studies`
*/
//try a get for testing?

//process.env.__OW_API_HOST
axios.get(`http://172.17.0.1:8080/brapi/v2/programs`).then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
});

/*
await axios.post('http://localhost:8080/brapi/v2/programs', [{
    "programName": "Snacks",
    "externalReferences": [
        {
            "referenceSource": "breeding-insight.org",
            "referenceID": programInfo[0]
        }
    ]
}])
.then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
});
*/
