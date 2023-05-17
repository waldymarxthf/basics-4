import { getData } from "./api.js";
import {
  loadLastLocation,
  loadLocations,
  saveLastLocationToLocalStorage,
  saveLocationToLocalStorage,
} from "./localstorage.js";
import { UI_ELEMENTS } from "./ui-elements.js";
import { renderLocations, storage } from "./ui.js";

function addToFavorite(name) {
  storage.push({
    location: name,
  });
  saveLocationToLocalStorage(storage);
  saveLastLocationToLocalStorage(name);
  renderLocations();
}

addEventListener("DOMContentLoaded", async () => {
  let savedLocation = loadLastLocation();

  if (!savedLocation) {
    savedLocation = "Poznań";
    saveLastLocationToLocalStorage(savedLocation);
  }

  await getData(savedLocation);
});

UI_ELEMENTS.NOW.SEARCH_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityName = UI_ELEMENTS.NOW.INPUT_CITY.value;
  getData(cityName);
  event.target.reset();
});

UI_ELEMENTS.NOW.FAVORITE_BUTTON.addEventListener("click", () => {
  let name = UI_ELEMENTS.NOW.CURRENT_CITY.textContent;
  addToFavorite(name);
});

loadLocations(storage);
renderLocations();
