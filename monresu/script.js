const tabsContainerNode = document.querySelector('.tabs');
const tabNodes = document.querySelectorAll('.tabs__item');
const tabContentNodes = document.querySelectorAll('.weather__block');
const form = document.querySelector('.weather__search-form')
const inputCityNode = document.querySelector('.weather__search-form-input')

const NOW_SCREEN_NODES = {
  NOW_TEMP: document.querySelector('.weather__block-temp span'),
  NOW_CITY: document.querySelector('.weather__block-content-city'),
  NOW_ICON_WEATHER: document.querySelector('.weather__block-cloud')
}

const DETAILS_SCREEN_NODES = {
  DETAILS_CITY_NAME: document.querySelector('.weather__details-city'),
  DETAILS_TEMP: document.querySelector('.temperature'),
  DETAILS_TEMP_FEELSLIKE: document.querySelector('.feelslike'),
  DETAILS_WEATHER: document.querySelector('.weather-sky'),
  DETAILS_SUNRISE: document.querySelector('.sunrise'),
  DETAILS_SUNSET: document.querySelector('.sunset'),
}

const FORECAST_SCREEN_NODES = {
  FORECAST_CITY_NAME: document.querySelector('.weather__forecast-city')
}

const serverURL = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

tabsContainerNode.addEventListener('click', event => {
  if (!event.target.classList.contains('tabs__item')) return;
  const index = Array.from(tabNodes).indexOf(event.target);

  tabNodes.forEach(tab => tab.classList.remove('active'));
  tabContentNodes.forEach(content => content.classList.remove('active'));
  tabNodes[index].classList.add('active');
  tabContentNodes[index].classList.add('active');
});

function timeConverter(UNIX_timestamp){
  const a = new Date(UNIX_timestamp * 1000);
  const hour = a.getHours();
  const min = a.getMinutes();
  return hour + ':' + min;
}

function getCelsiusDegs(k) {
  return Math.floor(k - 273);
}

function getNormalCityName(cityName) {
  return cityName.split('')[0].toUpperCase() + cityName.slice(1);
}

async function getData(URL) {
  const response = await fetch(URL);
  let ans = await response.json();
  return ans;
}

form.addEventListener('submit', async event => {
  event.preventDefault();

  const cityName = inputCityNode.value;
  const URL = `${serverURL}?q=${cityName}&appid=${apiKey}`;
  const data = await getData(URL);

  form.reset();

  if ('message' in data) {
    alert('Города нет');
    return;
  };

  const iconID = data.weather[0].icon;
  const srcIcon = `https://openweathermap.org/img/wn/${iconID}@2x.png`;

  const weather = data.weather[0].main;
  const timeSunrise = timeConverter(data.sys.sunrise);
  const timeSunset = timeConverter(data.sys.sunset);

  NOW_SCREEN_NODES.NOW_TEMP.textContent = getCelsiusDegs(data.main.temp);
  NOW_SCREEN_NODES.NOW_ICON_WEATHER.src = srcIcon;
  NOW_SCREEN_NODES.NOW_CITY.textContent = getNormalCityName(cityName);
  DETAILS_SCREEN_NODES.DETAILS_CITY_NAME.textContent = getNormalCityName(cityName);;
  DETAILS_SCREEN_NODES.DETAILS_TEMP.textContent = getCelsiusDegs(data.main.temp)
  DETAILS_SCREEN_NODES.DETAILS_TEMP_FEELSLIKE.textContent = getCelsiusDegs(data.main.feels_like);
  DETAILS_SCREEN_NODES.DETAILS_WEATHER.textContent = weather;
  DETAILS_SCREEN_NODES.DETAILS_SUNRISE.textContent = timeSunrise;
  DETAILS_SCREEN_NODES.DETAILS_SUNSET.textContent = timeSunset;
  FORECAST_SCREEN_NODES.FORECAST_CITY_NAME.textContent = getNormalCityName(cityName);

});