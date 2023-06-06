import { UI_ELEMENTS, WEATHER } from "./variables.js";
import { updateWeatherInfo } from "./api.js";
import { isInputEmpty, findIndex, isCityExist, cleanInput } from "./utils.js";
import {
  saveFavoriteCitiesInlocalStorage,
  getFavoriteCitiesFromlocalStorage,
  saveCurrentCityInLocalStorage,
  getCurrentCityFromlocalStorage,
} from "./storage.js";

//! эксперимент с date-fns

import { format, formatDistance, subDays, formatRelative } from "../node_modules/date-fns";
import { ru } from "../node_modules/date-fns/locale";

const today = format(new Date(), "'Today is a' eeee");
const todayLong = format(new Date(), "'Today is a' PPPPpppp");
const result1 = format(new Date(2000, 0, 0), "MMMM");
const result2 = format(new Date(2000, 0, 1), "MMMM");
const bDay = format(new Date(1999, 1, 24), "d/MMM/YYY");
console.log(today);
console.log(todayLong);
console.log(result1);
console.log(result2);
console.log(bDay);


for (let i = 1; i < 8; i++) {
  const daysAgo = formatDistance(subDays(new Date(), i), new Date(), {
    addSuffix: true,
  });
  console.log(daysAgo);
}

const enFormat = formatRelative(subDays(new Date(), 3), new Date());
const ruFormat = formatRelative(subDays(new Date(), 3), new Date(), {
  locale: ru,
});
console.log(enFormat + '\n' + ruFormat);

//!

export let favoriteCities = [];

//* функция добавения города в массив

function addFavoriteCity() {
  const favoriteCity = WEATHER.NOW.CITY_NAME.textContent;

  if (isCityExist(favoriteCity)) {
    alert("Выбранный город уже добавен в избранное");
    return;
  }

  favoriteCities.push({ location: favoriteCity });
  saveFavoriteCitiesInlocalStorage(favoriteCities);
  render();
}

//* функция удаления города из массива

function removeFavoriteCity(city) {
  const index = findIndex(city);
  favoriteCities.splice(index, 1);
  saveFavoriteCitiesInlocalStorage(favoriteCities);
  render();
}

//* функция создания элемента списка избранных городов

function cleateElement(city) {
  const favoriteCity = document.createElement("li");
  favoriteCity.className = "city-item";
  favoriteCity.textContent = city.location;

  const btnCloseCity = document.createElement("button");
  btnCloseCity.className = "close-city";
  favoriteCity.append(btnCloseCity);

  btnCloseCity.addEventListener("click", () => {
    removeFavoriteCity(city.location);
  } );

  favoriteCity.addEventListener("click", () => {
    updateWeatherInfo(city.location);
    saveCurrentCityInLocalStorage(city.location);
  });

  return favoriteCity;
}

//* функция рендера блока с избранными городами

function render() {
  UI_ELEMENTS.CITIES_LIST.innerHTML = '';
  favoriteCities = getFavoriteCitiesFromlocalStorage();

  const cityName = getCurrentCityFromlocalStorage();
  updateWeatherInfo(cityName)

  favoriteCities.forEach((item) => {
    const newFavoriteCity = cleateElement(item);
    UI_ELEMENTS.CITIES_LIST.append(newFavoriteCity);
  });
}

//* функция получения данных города и запуск обновления погоды

async function showWeather(event) {
  event.preventDefault();
  const city = UI_ELEMENTS.INPUT_NAME.value;

  if (isInputEmpty(city)) {
    alert("Введите название города");
    return;
  }

  updateWeatherInfo(city);
  saveCurrentCityInLocalStorage(city);
  cleanInput();
}

UI_ELEMENTS.FORM.addEventListener("submit", showWeather);
UI_ELEMENTS.BTN_FAVORITE.addEventListener("click", addFavoriteCity);

window.addEventListener("DOMContentLoaded", render);