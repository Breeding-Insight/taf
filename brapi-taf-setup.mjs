import axios from 'axios';
//import pg from 'pg';
//const { Client } =  pg;
//Uncertain about host and port
//or it could be a # or _ in the password supposedly?
/*
const pgClient = new pg.Client({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
await pgClient.connect();

let res = await pgClient.query("SELECT id FROM program WHERE name='Snacks' AS snacksId", (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
  }
});

let snacksId = res.rows[0].snacksId;
await pgClient.end();
*/

//json retrieval 
/*import fs from 'fs';
fs.readFile('./programIds.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  console.log("File data:", jsonString);
  let programInfo = JSON.parse(data);
})*/

const core = require('@actions/core');

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
