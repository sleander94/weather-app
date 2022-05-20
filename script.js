async function getWeather(location, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=4876ad9cbecdbf1c86ba8fafe3c93d9a`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}

async function formatWeather(weather) {
  try {
    const data = await weather;
    const info = {};
    info.name = data.name;
    info.temp = data.main.temp;
    info.description = data.weather[0].description;
    return info;
  } catch (error) {
    console.log(error);
  }
}

async function displayWeather(data, units, element) {
  try {
    const weather = await formatWeather(getWeather(data, units));
    if (weather) {
      element.textContent = '';
    }
    for (let i = 0; i < Object.keys(weather).length; i++) {
      const keyDiv = document.createElement('div');
      keyDiv.textContent = Object.values(weather)[i];
      element.appendChild(keyDiv);
    }
  } catch (error) {
    console.log(error);
    alert('Location not found.');
  }
}

function addSearchbar(element) {
  const search = document.createElement('input');
  search.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      document.querySelector('.search').click();
    }
  });
  element.appendChild(search);
  const searchSubmit = document.createElement('button');
  searchSubmit.textContent = 'Search';
  searchSubmit.classList.toggle('search');
  searchSubmit.addEventListener('click', () => {
    displayWeather(search.value, units, weatherInfo);
    search.value = '';
  });
  element.appendChild(searchSubmit);
}

const body = document.querySelector('body');
const weatherInfo = document.createElement('div');
weatherInfo.classList.toggle('weatherInfo');
let units = 'imperial';

const unitChanger = document.createElement('button');
unitChanger.type = 'button';
unitChanger.textContent = '°F';
unitChanger.addEventListener('click', () => {
  const currentLocation = weatherInfo.querySelector('div').textContent;
  if (units === 'imperial') {
    units = 'metric';
    unitChanger.textContent = '°C';
    displayWeather(currentLocation, units, weatherInfo);
  } else {
    units = 'imperial';
    unitChanger.textContent = '°F';
    displayWeather(currentLocation, units, weatherInfo);
  }
});
body.appendChild(unitChanger);

body.appendChild(weatherInfo);
displayWeather('Madrid', units, weatherInfo);
addSearchbar(body);
