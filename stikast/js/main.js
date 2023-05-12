import {
  searchForm,
  searchInput,
  nowTemperature,
  nowCityName,
  nowIcon,
  likeButton,
	like,
  addedLocationsList,
  tabs,
  screens,
	detailsTitle,
	detailsTemperature,
	detailsFells,
	detailsWeather,
	detailsSunrise,
	detailsSunset,
} from "./ui-elements.js";

import {
  saveLocation,
  loadLocations,
  saveLastLocation,
  loadLastLocation,
} from "./localstorage.js";

import { timeConverter } from "./time-converter.js";

const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";

tabs.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		tabs.forEach((item) => item.classList.remove("active"));
		screens.forEach((item) => item.classList.remove("active-screen"));

		tab.classList.add("active");
		screens[index].classList.add("active-screen")
	})
})

const locations = [];

function addLocation() {
	try {
		if (locations.some((item) => item === nowCityName.textContent)) {
			throw new Error("Such a city has already been added");
		}

		locations.push(nowCityName.textContent);
		saveLocation(locations);
		renderAddedLocations();

	} catch (error) {
		alert(error)
	}
}

function createAddedLocations(item) {
  const newLocation = document.createElement("li");
	const newLocationName = document.createElement("button");
	newLocationName.classList.add("newLocationName")
  newLocationName.textContent = item;

  const deleteButton = document.createElement("button");
  const deleteButtonIcon = document.createElement("img");
  deleteButtonIcon.src = "https://img.icons8.com/?size=512&id=46&format=png";

  deleteButton.append(deleteButtonIcon);
	newLocation.append(newLocationName)
  newLocation.append(deleteButton);
  addedLocationsList.append(newLocation);

  deleteButton.addEventListener("click", () => {
    const index = locations.findIndex((item) => item === newLocation.textContent);
    locations.splice(index, 1);
    saveLocation(locations);
    renderAddedLocations();
  });

	newLocationName.addEventListener("click", () => {
		updateWeather(item);
	})
}

function renderAddedLocations() {
  addedLocationsList.innerHTML = "";
  locations.forEach((element) => {
    createAddedLocations(element);
  });
}

async function getWeather(location) {
  try {
    const url = `${serverUrl}?q=${location}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error((await response.json()).message);
    } else {
      const data = await response.json();
			console.log(data)
      return data;
    }
  } catch (error) {
    alert(error.message);
    console.log(error.message);
  }
}

async function updateNow(data) {
	if (!data) {
		throw new Error("No such city has been found");
	}

	nowTemperature.textContent = `${Math.round(data.main.temp)}°`;
	nowCityName.textContent = data.name;
	nowIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
}

async function updateDetails(data) {
	if (!data) {
		throw new Error("No such city has been found");
	}

	detailsTitle.textContent = data.name;
	detailsTemperature.textContent = Math.round(data.main.temp);
	detailsFells.textContent = Math.round(data.main.feels_like);
	detailsWeather.textContent = data.weather[0].main;
	detailsSunrise.textContent = timeConverter(data.sys.sunrise, data.timezone)
	detailsSunset.textContent = timeConverter(data.sys.sunset, data.timezone)
}

async function updateWeather(location) {
	try {
		const city = await getWeather(location);

		saveLastLocation(location);

		await updateNow(city);
		await updateDetails(city);
	} catch (error) {
		console.error(error)
	}
}

async function weatherHandler(event) {
  event.preventDefault();
	const cityName = searchInput.value;
	await updateWeather(cityName)
  searchInput.value = "";
}

searchForm.addEventListener("submit", weatherHandler);
likeButton.addEventListener("click", addLocation);

loadLocations(locations);

const lastLocation = loadLastLocation();
await updateWeather(lastLocation)
renderAddedLocations();
