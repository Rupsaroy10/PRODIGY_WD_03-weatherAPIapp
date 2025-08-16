const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
    const api_Key = "7845250d04c7ad3915369b108ca073ca";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "weather img/cloud.png";
            break;
        case 'Drizzel':
            weather_img.src = "weather img/drizzel.webp";
            break;   
        case 'Thunderstrom':
            weather_img.src = "weather img/thunderstrom.webp";
            break;     
        case 'Clear':
            weather_img.src = "weather img/clear.png";
            break;
        case 'Rain':
            weather_img.src = "weather img/rain.png";
            break;
        case 'Mist':
            weather_img.src = "weather img/mist.png";
            break;
        case 'Snow':
            weather_img.src = "weather img/snow.png";
            break;
        default:
            weather_img.src = "weather img/cloud.png";
    }  

    console.log(weather_data);

}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});