import axios from 'axios';

let programIds = process.argv.slice(2);

//axios.all( []); for calling multiple post
await axios.post('http://brapiserver:8080/brapi/v2/programs', {
    "programName": "Snacks",
    "externalReferences": [
        {
            "referenceSource": "breeding-insight.org",
            "referenceID": programIds[0]
        }
    ]
})
.then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
});
