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
    if (units === 'imperial') {
      info.temp = `${data.main.temp} °F`;
    } else {
      info.temp = `${data.main.temp} °C`;
    }
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
      keyDiv.classList.toggle(`${Object.keys(weather)[i]}`);
      keyDiv.textContent = Object.values(weather)[i];
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
