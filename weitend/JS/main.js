import { tabsBtnsHandler, renderData, getData, addToFavourite, deleteFromFavourite, renderFavourites } from "./script.js";
import { form, input} from "./ui.js";

export const favourites = [];

function loadLocations() {
  const town = JSON.parse(localStorage.getItem('location'));
  favourites.push(...town)
  renderFavourites(town)
}

export function saveToLocalStorage() {
  localStorage.setItem('location', JSON.stringify(favourites))
};

window.addEventListener('click', async (e) => {
  tabsBtnsHandler(e);
  addToFavourite(e);
  deleteFromFavourite(e);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const cityName = input.value;
  const apiKey = 'afc9f2df39f9e9e49eeb1afac7034d35';
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
  const data = await getData(url); 
  renderData(data);
  input.value = '';
  input.focus();
});

loadLocations()