const express = require('express');
const Datastore = require('nedb');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));


const database = new Datastore('database.db');
database.loadDatabase();

//get data
app.get('/api', (request, response) => {
    database.find({},(err, data) =>{
        if (err){
            response.end();
            return;
        }
        response.json(data);
    });
});

//store data
app.post('/api', (request, response) =>{
    const data = request.body;
    database.insert(data);
    response.json(data);
});


app.get('/location/:city', async (request, response) => {
    const city = request.params.city;
    const location_url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=88b5040ac450b0a898e2387e7fee7faf`;
    const location_response = await fetch(location_url);
    const location = await location_response.json();
    response.json(location);
});
