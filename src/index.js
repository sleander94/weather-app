import { format } from 'date-fns';
import { assignIcon } from './icons.js';

async function getWeather(location, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=4876ad9cbecdbf1c86ba8fafe3c93d9a`,
      { mode: 'cors' }
    );
    const weatherData = await response.json();
    console.log(weatherData);
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
    info.description = data.weather[0].description;
    const icon = document.createElement('img');
    icon.src = assignIcon(data.weather[0].icon);
    info.icon = icon;
    if (units === 'imperial') {
      info.temp = `${data.main.temp} °F`;
    } else {
      info.temp = `${data.main.temp} °C`;
    }
    info.feelsLike = `Feels like: ${data.main.feels_like}°`;
    info.humidity = `Humidity: ${data.main.humidity}%`;
    if (units === 'imperial') {
      info.wind = `Wind: ${data.wind.speed} mph`;
    } else {
      info.wind = `Wind: ${data.wind.speed} m/s`;
    }
    info.date = format(new Date(data.dt * 1000), 'PPpp');
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
      keyDiv.classList.toggle(`${Object.keys(weather)[i]}`);
      if (keyDiv.classList.contains('icon')) {
        element.appendChild(Object.values(weather)[i]);
      } else {
        keyDiv.textContent = Object.values(weather)[i];
      }

      element.appendChild(keyDiv);
    }
  } catch (error) {
    console.log(error);
    alert('Location not found.');
  }
}
///////////////////////////////////////////////
const body = document.querySelector('body');
const weatherContainer = document.createElement('div');
weatherContainer.classList.toggle('weatherContainer');
body.appendChild(weatherContainer);
let units = 'imperial';

function addSearchbar(element) {
  const searchBar = document.createElement('div');
  searchBar.classList.toggle('searchBar');
  const searchInput = document.createElement('input');
  searchInput.classList.toggle('searchInput');
  searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      document.querySelector('.searchButton').click();
    }
  });
  searchBar.appendChild(searchInput);
  const searchSubmit = document.createElement('button');
  searchSubmit.textContent = 'Search';
  searchSubmit.classList.toggle('searchButton');
  searchSubmit.addEventListener('click', () => {
    displayWeather(searchInput.value, units, weatherContainer);
    searchInput.value = '';
  });
  searchBar.appendChild(searchSubmit);
  element.appendChild(searchBar);
}

function addUnitButton(element) {
  const unitButton = document.createElement('button');
  unitButton.classList.toggle('unitButton');
  unitButton.type = 'button';
  unitButton.textContent = '°F';
  unitButton.addEventListener('click', () => {
    const currentLocation = weatherContainer.querySelector('div').textContent;
    if (units === 'imperial') {
      units = 'metric';
      unitButton.textContent = '°C';
      displayWeather(currentLocation, units, weatherContainer);
    } else {
      units = 'imperial';
      unitButton.textContent = '°F';
      displayWeather(currentLocation, units, weatherContainer);
    }
  });
  element.appendChild(unitButton);
}

displayWeather('Madrid', units, weatherContainer);
addSearchbar(body);
addUnitButton(body);
