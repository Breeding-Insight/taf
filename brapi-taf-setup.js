import axios from 'axios';

let programIds = process.argv.slice(2);
      
//http://<brapi-server url>/brapi/v2/programs
//http://brapiserver:8080
//${process.env.VUE_APP_BI_API_V1_PATH}
/*const { data } = await axios({
    url: 'http://brapiserver:8080/brapi/v2/programs',
    method: 'post',
    data: query//,
    //params: { full }
});
*/

//axios.all( []); for calling multiple post
await axios.post('http://brapiserver:8080/brapi/v2/programs', {
    "programName": "Snacks",
    "externalReferences": [
        {
            "referenceSource": "breeding-insight.org",
            "referenceID": programIds[1]
        }
    ]
})
.then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
})
;
