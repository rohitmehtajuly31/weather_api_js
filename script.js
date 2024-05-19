const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const key = '747cf5ef6189c8173c47fc5fe0dc9810';

async function weather(city) {
    const response = await fetch(`${url}${city}&appid=${key}`);
    const data = await response.json();
    console.log(data);
    console.log(data.weather[0].main);
    const cityn = document.querySelector('.city');
    cityn.innerHTML = data.name;
    const tempn = document.querySelector('.temp');
    const tempinc = data.main.temp // Convert from Kelvin to Celsius
    tempn.innerHTML = Math.round(tempinc)+"C"; // Round the temperature to the nearest integer

    //images part cloud
    const weathericon=document.querySelector('.weather-icon')
    if(data.weather[0].main=='Clouds'){
        weathericon.src='images/clouds.png'
    }
    else if(data.weather[0].main=='Clear'){
        weathericon.src='images/clear.png'
    }
    else if(data.weather[0].main=='Haze'){
        weathericon.src='images/drizzle.png'
    }
    else if(data.weather[0].main=='Rain'){
        weathericon.src='images/rain.png'
    }
    else if(data.weather[0].main=='Drizzle'){
        weathericon.src='images/drizzle.png'
    }
    else if(data.weather[0].main=='Mist'){
        weathericon.src='images/mist.png'
    }



}


function searchWeather() {
    const searchcity = document.querySelector('.search input').value.trim();
    if (searchcity !== '') {
        weather(searchcity);
    }
}

document.querySelector('.search button').addEventListener('click', searchWeather);
