import { API, WEATHER } from "./variables.js";
import { isInputEmpty, convertUnixTime } from "./utils.js";

// * функция получения данных погоды с API

export async function getWeather(city) {
  try {
    const url = `${API.SERVER_URL}?q=${city}&appid=${API.API_KEY}&units=metric`;

    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      return data
    } else if (isInputEmpty(city)) {
      throw new Error("Название города не введено");
    } else {
      throw new Error((await response.json()).message);
    }
  } catch (error) {
    alert(error.message);
  }
}

// * функция установки данных погоды в раздел Now

export function setWeatherNow(data) {
  const { main, name, weather } = data;

  WEATHER.NOW.TEMPERATURE.textContent = `${Math.round(main.temp)}°`;
  const icon = weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  WEATHER.NOW.ICON.src = iconSrc;
  WEATHER.NOW.CITY_NAME.textContent = name;
}

// * функция установки данных погоды в раздел Details

export function setWeatherDetails(data) {
  WEATHER.DETAILS.CITY_NAME.textContent = data.name;
  WEATHER.DETAILS.TEMPERATURE.textContent = `${Math.round(data.main.temp)}°`;
  WEATHER.DETAILS.FEELS_LIKE.textContent = `${Math.round(data.main.feels_like)}°`;
  WEATHER.DETAILS.SUNRISE.textContent = convertUnixTime(data.sys.sunrise);
  WEATHER.DETAILS.SUNSET.textContent = convertUnixTime(data.sys.sunset);
}

//* функция обновления данных о погоде (получение + установка)

export async function updateWeatherInfo(city) {
  try{
    let cityWeather = await getWeather(city);
    setWeatherNow(cityWeather);
    setWeatherDetails(cityWeather);
  }
  catch(err) {
    console.log(err)
  }
}