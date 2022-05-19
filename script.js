function handleError(fn) {
  return function (...params) {
    return fn(...params).catch(function (err) {
      console.log(err);
    });
  };
}

async function getWeather(location, units) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=4876ad9cbecdbf1c86ba8fafe3c93d9a`,
    { mode: 'cors' }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

handleError(getWeather('Denver', 'imperial'));
