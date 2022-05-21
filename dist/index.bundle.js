"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


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
    let date = new Date((data.dt + data.timezone) * 1000);
    console.log(date);
    date.setHours(date.getHours() + 6);
    info.date = date.toString().slice(0, 24);
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxTQUFTLFNBQVMsTUFBTTtBQUNuRixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQyxNQUFNO0FBQ04scUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBLG9DQUFvQyxxQkFBcUI7QUFDekQsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUMsTUFBTTtBQUNOLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDO0FBQ3JEO0FBQ0EsaUNBQWlDLHdCQUF3QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uLCB1bml0cykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD00ODc2YWQ5Y2JlY2RiZjFjODZiYThmYWZlM2M5M2Q5YWAsXG4gICAgICB7IG1vZGU6ICdjb3JzJyB9XG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmb3JtYXRXZWF0aGVyKHdlYXRoZXIpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlcjtcbiAgICBjb25zdCBpbmZvID0ge307XG4gICAgaW5mby5uYW1lID0gZGF0YS5uYW1lO1xuICAgIGluZm8uZGVzY3JpcHRpb24gPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgaWYgKHVuaXRzID09PSAnaW1wZXJpYWwnKSB7XG4gICAgICBpbmZvLnRlbXAgPSBgJHtkYXRhLm1haW4udGVtcH0gwrBGYDtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mby50ZW1wID0gYCR7ZGF0YS5tYWluLnRlbXB9IMKwQ2A7XG4gICAgfVxuICAgIGluZm8uZmVlbHNMaWtlID0gYEZlZWxzIGxpa2U6ICR7ZGF0YS5tYWluLmZlZWxzX2xpa2V9wrBgO1xuICAgIGluZm8uaHVtaWRpdHkgPSBgSHVtaWRpdHk6ICR7ZGF0YS5tYWluLmh1bWlkaXR5fSVgO1xuICAgIGlmICh1bml0cyA9PT0gJ2ltcGVyaWFsJykge1xuICAgICAgaW5mby53aW5kID0gYFdpbmQ6ICR7ZGF0YS53aW5kLnNwZWVkfSBtcGhgO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvLndpbmQgPSBgV2luZDogJHtkYXRhLndpbmQuc3BlZWR9IG0vc2A7XG4gICAgfVxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKGRhdGEuZHQgKyBkYXRhLnRpbWV6b25lKSAqIDEwMDApO1xuICAgIGNvbnNvbGUubG9nKGRhdGUpO1xuICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgNik7XG4gICAgaW5mby5kYXRlID0gZGF0ZS50b1N0cmluZygpLnNsaWNlKDAsIDI0KTtcbiAgICByZXR1cm4gaW5mbztcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoZGF0YSwgdW5pdHMsIGVsZW1lbnQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZm9ybWF0V2VhdGhlcihnZXRXZWF0aGVyKGRhdGEsIHVuaXRzKSk7XG4gICAgaWYgKHdlYXRoZXIpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh3ZWF0aGVyKS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBrZXlEaXYuY2xhc3NMaXN0LnRvZ2dsZShgJHtPYmplY3Qua2V5cyh3ZWF0aGVyKVtpXX1gKTtcbiAgICAgIGtleURpdi50ZXh0Q29udGVudCA9IE9iamVjdC52YWx1ZXMod2VhdGhlcilbaV07XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGtleURpdik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBhbGVydCgnTG9jYXRpb24gbm90IGZvdW5kLicpO1xuICB9XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbndlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnd2VhdGhlckNvbnRhaW5lcicpO1xuYm9keS5hcHBlbmRDaGlsZCh3ZWF0aGVyQ29udGFpbmVyKTtcbmxldCB1bml0cyA9ICdpbXBlcmlhbCc7XG5cbmZ1bmN0aW9uIGFkZFNlYXJjaGJhcihlbGVtZW50KSB7XG4gIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hCYXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2VhcmNoQmFyJyk7XG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VhcmNoSW5wdXQnKTtcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hCdXR0b24nKS5jbGljaygpO1xuICAgIH1cbiAgfSk7XG4gIHNlYXJjaEJhci5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gIGNvbnN0IHNlYXJjaFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZWFyY2hTdWJtaXQudGV4dENvbnRlbnQgPSAnU2VhcmNoJztcbiAgc2VhcmNoU3VibWl0LmNsYXNzTGlzdC50b2dnbGUoJ3NlYXJjaEJ1dHRvbicpO1xuICBzZWFyY2hTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGlzcGxheVdlYXRoZXIoc2VhcmNoSW5wdXQudmFsdWUsIHVuaXRzLCB3ZWF0aGVyQ29udGFpbmVyKTtcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuICB9KTtcbiAgc2VhcmNoQmFyLmFwcGVuZENoaWxkKHNlYXJjaFN1Ym1pdCk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc2VhcmNoQmFyKTtcbn1cblxuZnVuY3Rpb24gYWRkVW5pdEJ1dHRvbihlbGVtZW50KSB7XG4gIGNvbnN0IHVuaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgdW5pdEJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCd1bml0QnV0dG9uJyk7XG4gIHVuaXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICB1bml0QnV0dG9uLnRleHRDb250ZW50ID0gJ8KwRic7XG4gIHVuaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gd2VhdGhlckNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdkaXYnKS50ZXh0Q29udGVudDtcbiAgICBpZiAodW5pdHMgPT09ICdpbXBlcmlhbCcpIHtcbiAgICAgIHVuaXRzID0gJ21ldHJpYyc7XG4gICAgICB1bml0QnV0dG9uLnRleHRDb250ZW50ID0gJ8KwQyc7XG4gICAgICBkaXNwbGF5V2VhdGhlcihjdXJyZW50TG9jYXRpb24sIHVuaXRzLCB3ZWF0aGVyQ29udGFpbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdHMgPSAnaW1wZXJpYWwnO1xuICAgICAgdW5pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICfCsEYnO1xuICAgICAgZGlzcGxheVdlYXRoZXIoY3VycmVudExvY2F0aW9uLCB1bml0cywgd2VhdGhlckNvbnRhaW5lcik7XG4gICAgfVxuICB9KTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh1bml0QnV0dG9uKTtcbn1cblxuZGlzcGxheVdlYXRoZXIoJ01hZHJpZCcsIHVuaXRzLCB3ZWF0aGVyQ29udGFpbmVyKTtcbmFkZFNlYXJjaGJhcihib2R5KTtcbmFkZFVuaXRCdXR0b24oYm9keSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=