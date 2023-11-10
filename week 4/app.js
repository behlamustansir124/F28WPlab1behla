const apiKey = 'cb9c04a827fd367329bbb0b345cfd09b';

const cityInput = document.getElementById('cityInput');
const btn = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info');

btn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const xhr = new XMLHttpRequest();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                const weatherDescription = data.weather[0].description;
                const temperature = data.main.temp;
                const windSpeed = data.wind.speed;

                const weatherSentence = `The weather in ${city} is ${weatherDescription}. The temperature is ${temperature}°C with a wind speed of ${windSpeed} m/s`;

                const styledWeatherSentence = document.createElement('p');
                styledWeatherSentence.textContent = weatherSentence;

                
                weatherInfo.appendChild(styledWeatherSentence);
            } else {
                console.error('Error:', xhr.status);
                weatherInfo.innerHTML += 'Failed to fetch weather data for this city. Please try again.';
            }
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
});
