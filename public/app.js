const button = document.getElementById('submit');
button.addEventListener('click', async event => {
    const city = document.getElementById('location').value;
    const location_url = `location/${city}`;
    const location_response = await fetch(location_url);
    const location = await location_response.json();
    weather = location.weather[0].main;
    mintemp = location.main.temp_min;
    maxtemp = location.main.temp_max;
    windspeed = location.wind.speed;
    pressure = location.main.pressure;
    //country = location.sys.country
    //document.getElementById('city').textContent = city;
    //document.getElementById('country').textContent = country;
    document.getElementById('city').textContent = city;
    document.getElementById('cweather').textContent = weather;
    document.getElementById('mintemp').textContent = mintemp;
    document.getElementById('maxtemp').textContent = maxtemp;
    document.getElementById('windspeed').textContent = windspeed;
    document.getElementById('pressure').textContent = pressure;
    console.log(location);


    const data = {city, weather, mintemp, maxtemp, windspeed, pressure };
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
       
    const dataIn = await fetch('/api', option);
    const database = await dataIn.json();
    console.log(database);
});