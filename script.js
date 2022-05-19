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

async function formatWeather(location) {
  try {
    const data = await location;
    const info = {};
    info.name = data.name;
    info.temp = data.main.temp;
    info.description = data.weather[0].description;
    return info;
  } catch (error) {
    console.log(error);
  }
}

function addSearchbar(element) {
  const search = document.createElement('input');
  element.appendChild(search);
  const searchSubmit = document.createElement('button');
  searchSubmit.textContent = 'Search';
  searchSubmit.addEventListener('click', () => {
    displayWeather(search.value, document.body);
  });
  element.appendChild(searchSubmit);
}

async function displayWeather(data, element) {
  try {
    const weather = await formatWeather(getWeather(data, 'imperial'));
    console.log(weather);
    for (let i = 0; i < Object.keys(weather).length; i++) {
      const body = document.querySelector('body');
      const keyDiv = document.createElement('div');
      keyDiv.textContent = Object.values(weather)[i];
      body.appendChild(keyDiv);
    }
  } catch (error) {
    console.log(error);
    alert('City not found.');
  }
}

const body = document.querySelector('body');

addSearchbar(body);
