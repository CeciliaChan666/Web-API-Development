getData();

async function getData(){                
    const response = await fetch('/api');
    const data = await response.json();

             
    for(item of data){
        const root = document.createElement('p');
        const city = document.createElement('p');
        const weather = document.createElement('p');
        const mintemp = document.createElement('p');
        const maxtemp = document.createElement('p');
        const windspeed = document.createElement('p');
        const pressure = document.createElement('p');
        
        city.textContent = `City: ${item.city}`;
        weather.textContent = `Current weather: ${item.weather}`;
        mintemp.textContent = `min temp: ${item.mintemp}`;
        maxtemp.textContent = `max temp: ${item.maxtemp}`;
        windspeed.textContent = `wind speed: ${item.windspeed}`;
        pressure.textContent = `pressure: ${item.pressure}`;
                    
        root.append(city, weather, mintemp, maxtemp, windspeed, pressure);
        document.body.append(root);

};
    
    

    console.log(data);
};
