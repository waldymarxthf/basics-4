import { loadDataDetails, loadDataNow } from "./ui.js";
import { round, timeConverter } from "./utils.js";

async function getData(cityName) {
  try {
    const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
    const apiKey = "afc9f2df39f9e9e49eeb1afac7034d35";
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    if (response.ok) {
      let json = await response.json();
      const temperature = round(json.main.temp);
      const icon = json.weather[0].icon;
      const name = json.name;
      const feels = json.main.feels_like;
      const status = json.weather[0].main;
      const timezone = json.timezone;
      const sunrise = timeConverter(json.sys.sunrise, timezone);
      const sunset = timeConverter(json.sys.sunset, timezone);
      loadDataNow(temperature, name, icon);
      loadDataDetails(temperature, name, feels, status, sunrise, sunset);
      return response.json;
    } else {
      throw new Error((await response.json()).message);
    }
  } catch (error) {
    alert(error);
  }
}

export { getData };
