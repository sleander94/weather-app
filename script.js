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

async function formattedData(location) {
  const data = await location;
  this.name = data.name;
  console.log(this.name);
  this.temp = data.main.temp;
  console.log(this.temp);
  this.description = data.weather[0].description;
  console.log(this.description);
}

const denver = getWeather('Denver', 'imperial');
formattedData(denver);
