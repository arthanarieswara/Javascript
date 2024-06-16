// fetch the weather data using async
async function fetchWeatherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae6e6a13a47c0114c86e27f6fb10594b&units=metric`);
    const data = await response.json();
    return data;
}


// desplaying the defalt weather data 



// display the weather data
function displayWeatherData(data) {
    const temperature = document.getElementById('temp');
    const place = document.getElementById('place');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');
    const icon = document.getElementById('icon');
    temperature.innerText = `${data.main.temp}°C`;
    place.innerText = data.name;
    description.innerText = data.weather[0].description;
    humidity.innerText = `${data.main.humidity}%`;
    wind.innerText = `${data.wind.speed} km/h`;
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

// get the weather data
function getWeatherData() {
    const city = document.getElementById('city').value;
    fetchWeatherData(city).then(data => displayWeatherData(data));
    document.getElementById('city').value = '';
}

// add event listener
document.getElementById('search').addEventListener('click', getWeatherData)

