import axios from 'axios';
const { Client } = require('pg');
const client = new Client();
await client.connect();

let res = await client.query("SELECT id FROM program WHERE name='Snacks' AS snacksId", (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
  }
});

let snacksId = res.rows[0].snacksId;
await client.end();

//axios.all( []); for calling multiple post
await axios.post('http://brapiserver:8080/brapi/v2/programs', {
    "programName": "Snacks",
    "externalReferences": [
        {
            "referenceSource": "breeding-insight.org",
            "referenceID": snacksId
        }
    ]
})
.then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
});
