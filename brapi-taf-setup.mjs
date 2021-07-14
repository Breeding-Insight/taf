import axios from 'axios';
import * as core from '@actions/core';

core.info(process.argv);
let programInfo = process.argv.slice(2);
//axios.all( []); for calling multiple post
//make a loop
await axios.post('http://brapiserver:8080/brapi/v2/programs', {
    "programName": programInfo[0].name,
    "externalReferences": [
        {
            "referenceSource": "breeding-insight.org",
            "referenceID": programInfo[0].id
        }
    ]
})
.then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
});
