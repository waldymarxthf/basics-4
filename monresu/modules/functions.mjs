export async function getData(URL) {
  const response = await fetch(URL);
  let ans = await response.json();
  return ans;
}

export function timeConverter(UNIX_timestamp){
  const a = new Date(UNIX_timestamp * 1000);
  const hour = a.getHours();
  const min = a.getMinutes();
  return hour + ':' + min;
}

export function getCelsiusDegs(k) {
  return Math.floor(k - 273.15);
}

export function getNormalCityName(cityName) {
  return cityName.split('')[0].toUpperCase() + cityName.slice(1);
}

import {NOW_SCREEN_NODES, DETAILS_SCREEN_NODES, FORECAST_SCREEN_NODES} from '../modules/variables.mjs'

export function DOMchange(data, cityName) {
  const weather = data.weather[0].main;
  const timeSunrise = timeConverter(data.sys.sunrise);
  const timeSunset = timeConverter(data.sys.sunset);
  const iconID = data.weather[0].icon;
  const srcIcon = `https://openweathermap.org/img/wn/${iconID}@4x.png`;

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
}
