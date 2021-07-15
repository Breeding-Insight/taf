import axios from 'axios';
import * as core from '@actions/core';

core.warning(`${process.argv}  warning test`);
core.info(`${process.argv}  info test`);
let programInfo = process.argv.slice(2).filter(entry => entry.trim() != '');
//arr = arr.filter(entry => entry.trim() != '');

//axios.all( []); for calling multiple post
//make a loop

await axios.post('http://brapiserver:8080/brapi/v2/programs', {
    "programName": "Snacks",
    "externalReferences": [
        {
            "referenceSource": "breeding-insight.org",
            "referenceID": programInfo[0]
        }
    ]
})
.then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
});
