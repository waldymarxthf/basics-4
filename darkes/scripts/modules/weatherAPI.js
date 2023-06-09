import {
   showWeatherNow,
   showWeatherDetails,
   showWeatherForecast
} from "./weather.js";
import { setLocalStorage } from "./localStorage.js";

export async function fetchData(endpoint, cityName) {
   const serverUrl = 'http://api.openweathermap.org/data/2.5';
   const apiKey = 'afc9f2df39f9e9e49eeb1afac7034d35';
   const url = `${serverUrl}/${endpoint}?q=${cityName}&units=metric&appid=${apiKey}`;

   try {
      let response = await fetch(url)
      if (response.ok) {
         let data = await response.json();

         if (endpoint === 'weather') {
            showWeatherNow(data);
            showWeatherDetails(data);
            fetchData('forecast', data.name)
            setLocalStorage('lastCity', cityName);
         };

         if (endpoint === 'forecast') {
            showWeatherForecast(data);
         };
      } else {
         throw new Error((await response.json()).message);
      }
   } catch (error) {
      alert(error);
   }
};