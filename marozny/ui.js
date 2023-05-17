import { getData } from "./api.js";
import { loadLocations, saveLocationToLocalStorage } from "./localstorage.js";
import { UI_ELEMENTS } from "./ui-elements.js";
import { findLocationIndex } from "./utils.js";

const storage = [] || loadLocations(storage);

UI_ELEMENTS.NOW.TABS.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    UI_ELEMENTS.NOW.TABS.forEach((t) => t.classList.remove("active"));
    UI_ELEMENTS.NOW.WEATHER_BLOCK.forEach((w) => w.classList.remove("active"));
    tab.classList.add("active");
    UI_ELEMENTS.NOW.WEATHER_BLOCK[index].classList.add("active");
  });
});

function loadDataDetails(temperature, name, feels, status, sunrise, sunset) {
  UI_ELEMENTS.DETAILS.TEMPERATURE.textContent = temperature;
  UI_ELEMENTS.DETAILS.CITY.textContent = name;
  UI_ELEMENTS.DETAILS.FEELS_LIKE.textContent = feels;
  UI_ELEMENTS.DETAILS.SKY.textContent = status;
  UI_ELEMENTS.DETAILS.SUNRISE.textContent = sunrise;
  UI_ELEMENTS.DETAILS.SUNSET.textContent = sunset;
}

function loadDataNow(temperature, name, icon) {
  UI_ELEMENTS.NOW.TEMP.textContent = temperature + "°";
  UI_ELEMENTS.NOW.CURRENT_CITY.textContent = name;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  UI_ELEMENTS.NOW.CURRENT_ICON.setAttribute("src", iconUrl);
}

function renderLocations() {
  UI_ELEMENTS.NOW.LIST_FAV_CITIES.innerHTML = "";
  storage.forEach((element) => {
    const newFavCity = createLocationElement(element);
    UI_ELEMENTS.NOW.LIST_FAV_CITIES.append(newFavCity);
  });
}

function createLocationElement(element) {
  const newFavCity = document.createElement("li");
  newFavCity.classList.add("list-locations__item");
  newFavCity.textContent = element.location;

  const deleteFavCity = document.createElement("button");
  deleteFavCity.classList.add("list-locations__item-btn");
  newFavCity.append(deleteFavCity);

  newFavCity.addEventListener("click", () => {
    getData(element.location);
  });
  deleteFavCity.addEventListener("click", () => {
    deleteLocation(newFavCity);
  });
  return newFavCity;
}

function deleteLocation(name) {
  const index = findLocationIndex(storage, name);
  storage.splice(index, 1);
  saveLocationToLocalStorage(storage);
  renderLocations();
}

export { loadDataDetails, loadDataNow, renderLocations, createLocationElement, deleteLocation, storage };
