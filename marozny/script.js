import { getData, updateBlock } from "./api.js";
import { loadLastLocation, loadLocations, saveLastLocationToLocalStorage } from "./localstorage.js";
import { UI_ELEMENTS } from "./ui-elements.js";
import { addToFavorite, renderLocations } from "./ui.js";

addEventListener("DOMContentLoaded", async () => {
  let savedLocation = loadLastLocation();

  if (!savedLocation) {
    savedLocation = "Poznań";
    saveLastLocationToLocalStorage(savedLocation);
  }

  await updateBlock(savedLocation);
});

UI_ELEMENTS.NOW.SEARCH_FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityName = UI_ELEMENTS.NOW.INPUT_CITY.value;
  updateBlock(cityName);
  event.target.reset();
});

UI_ELEMENTS.NOW.FAVORITE_BUTTON.addEventListener("click", () => {
  let name = UI_ELEMENTS.NOW.CURRENT_CITY.textContent;
  addToFavorite(name);
  renderLocations();
});
