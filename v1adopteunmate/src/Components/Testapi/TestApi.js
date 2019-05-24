import React, { Component } from 'react'; 
import axios from 'axios'
import igdb from 'igdb-api-node';

//api key :94fccc2d73bd254ff207db49e707f5c7

 
const client = igdb('94fccc2d73bd254ff207db49e707f5c7');
 
client.games({
    fields: '*', // Return all fields
    limit: 5, // Limit to 5 results
    offset: 15 // Index offset for results
}).then(res => {
    console.log(res)// response.body contains the parsed JSON response to this query
}).catch(error => {
    throw error;
});


function TestApi() {
    axios.get('https://api-v3.igdb.com/games/', {'HTTP_CONTENT_LANGUAGE': self.language}, {'user-key': '94fccc2d73bd254ff207db49e707f5c7'})
    .then(res => console.log(res))
    return (
        <p>on test</p>
    )
}

export default TestApi