import { UI_ELEMENTS } from './js/ui.js';
import { showWeatherData } from './js/show.js';

function showError(error) {
  alert(error);
}

async function getWeatherData(cityName) {
  const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    let response = await fetch(url);
    if (response.ok) {
      const json = await response.json();
      showWeatherData(json);
    } else {
      throw new Error((await response.json()).message);
    }
  } catch (error) {
    showError(error);
  }
}

function submitSearchFormHandler(event) {
  event.preventDefault();
  const cityName = UI_ELEMENTS.FORM_INPUT.value;
  getWeatherData(cityName);
  event.target.reset();
}

UI_ELEMENTS.SEARCH_FORM.addEventListener('submit', submitSearchFormHandler);
