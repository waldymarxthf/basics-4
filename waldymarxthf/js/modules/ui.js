import { saveToLocalStorage, loadFromLocalStorage } from "./localstorage.js";
import { timeConverter, dateConverter, findLocationIndex, errorHandler } from "./utils.js";
import { getWeatherData } from "./api.js";
import { VARIABLES } from "./ui-variables.js";

const locations = new Set(loadFromLocalStorage("newLocation") || [])

export function createLocationElement(element) {
	const newLocation = document.createElement("li");
	newLocation.classList.add("list-locations__item");
	newLocation.textContent = element;

	const newLocationBtn = document.createElement("button");
	newLocationBtn.classList.add("list-locations__item-btn");
	newLocation.append(newLocationBtn);

	newLocation.addEventListener("click", async () => {
		renderTabs(await getWeatherData(element))
	});

	newLocationBtn.addEventListener("click", (event) => {
		event.stopPropagation();
		deleteLocation(newLocation.textContent);
	});

	return newLocation;
}

//* создает элементы локации

export async function updateBlockNow(data) {
	const { main, name, weather } = data;
	const tempBlockNow = Math.round(main.temp);
	const iconBlockNow = weather[0].icon;
	const iconUrl = `./assets/weather_icons/${iconBlockNow}.png`;

	VARIABLES.NOW.TEMPERATURE.textContent = tempBlockNow;
	VARIABLES.NOW.CITY.textContent = name;
	VARIABLES.NOW.ICON.src = iconUrl;
	changeIcon();
}

//* обновляет блок NOW

export async function updateBlockDetails(data) {
	const { name, main, weather, sys, timezone } = data;
	const tempBlockDetails = Math.round(main.temp);
	const feelsLikeBlockDetails = Math.round(main.feels_like);
	const weatherBlockDetails = weather[0].main;
	const sunriseBlockDetails = timeConverter(sys.sunrise, timezone);
	const sunsetBlockDetails = timeConverter(sys.sunset, timezone);

	VARIABLES.DETAILS.CITY.textContent = name;
	VARIABLES.DETAILS.TEMPERATURE.textContent = tempBlockDetails;
	VARIABLES.DETAILS.FEEL_LIKE.textContent = feelsLikeBlockDetails;
	VARIABLES.DETAILS.WEATHER.textContent = weatherBlockDetails;
	VARIABLES.DETAILS.SUNRISE.textContent = sunriseBlockDetails;
	VARIABLES.DETAILS.SUNSET.textContent = sunsetBlockDetails;
}

//* обновляет блок DETAILS

export async function updateBlockForecast(data) {
	const { city, list } = data;
	const cityBlockForecast = city.name;
	VARIABLES.FORECAST.CITY.textContent = cityBlockForecast;

	VARIABLES.FORECAST.DATE.forEach((date, index) => {
		let dateBlockForecast = dateConverter(list[index].dt, city.timezone);
		date.textContent = dateBlockForecast;
	});

	VARIABLES.FORECAST.TIME.forEach((date, index) => {
		let timeBlockForecast = timeConverter(list[index].dt, city.timezone);
		date.textContent = timeBlockForecast;
	});

	VARIABLES.FORECAST.TEMPERATURE.forEach((temp, index) => {
		let tempBlockForecast = Math.round(list[index].main.temp);
		temp.textContent = tempBlockForecast;
	});

	VARIABLES.FORECAST.PRECIPITATION.forEach((precipitaion, index) => {
		let precipitationBlockForecast = list[index].weather[0].main;
		precipitaion.textContent = precipitationBlockForecast;
	});

	VARIABLES.FORECAST.FEEL_LIKE.forEach((feelLike, index) => {
		let feelLikeBlockForecast = Math.round(list[index].main.feels_like);
		feelLike.textContent = feelLikeBlockForecast;
	});

	VARIABLES.FORECAST.ICON.forEach((icon, index) => {
		let iconBlockForecast = list[index].weather[0].icon;
		icon.src = `./assets/weather_icons/${iconBlockForecast}.png`;
	});
}

//* обновляет блок FORECAST

export function renderTabs([forecastData, weatherData]) {
	updateBlockNow(weatherData);
	updateBlockDetails(weatherData);
	updateBlockForecast(forecastData);
}

export function renderLocations() {
	VARIABLES.LOCATIONS.LIST.innerHTML = "";
	locations.forEach(el => {
		let elems = createLocationElement(el)
		VARIABLES.LOCATIONS.LIST.append(elems)
	})
	changeIcon();
}

//* рендерит локации из массива

function Locations(cityName) {
	this.cityName = cityName
}

export function addLocation() {
	try {
		const cityName = VARIABLES.NOW.CITY.textContent;

		if (locations.has(cityName)) {
			deleteLocation(cityName)
			return
		}

		const city = new Locations(cityName)
		locations.add(city.cityName);
		console.log(locations)

		saveToLocalStorage("newLocation", [...locations]);
		renderLocations();
	} catch (error) {
		errorHandler(error);
	}
}

//* добавляет локацию в массив

export function deleteLocation(newLocation) {
	locations.delete(newLocation);
	saveToLocalStorage("newLocation", [...locations]);
	renderLocations();
}

//* функция удаления локации

export function changeIcon() {
	const currentLocation = VARIABLES.NOW.CITY.textContent;
	const isLocationInArray = locations.has(currentLocation);

	if (isLocationInArray) {
		VARIABLES.NOW.LIKE.classList.add('liked')
	} else {
		VARIABLES.NOW.LIKE.classList.remove('liked')
	}
}

//* функция, делает сердечко нажатым если город добавили в избранное

export async function initializeUI() {
	VARIABLES.TABS.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			VARIABLES.TABS.forEach((t) => t.classList.remove("active"));
			VARIABLES.WEATHER_BLOCK.forEach((w) => w.classList.remove("active"));

			tab.classList.add("active");
			VARIABLES.WEATHER_BLOCK[index].classList.add("active");
		});
	});

	//* переключает табы
	
	VARIABLES.FORM.addEventListener("submit", async (event) => {
		event.preventDefault();
		const inputValue = new FormData(VARIABLES.FORM).get("city");
		renderTabs(await getWeatherData(inputValue))
		VARIABLES.FORM.reset();
	});

	//* обработчик событий на форму
	
	VARIABLES.NOW.LIKE.addEventListener("click", addLocation);
	
	//* обработчик событий на кнопку сердечка
	
	let savedLocation = loadFromLocalStorage("lastLocation");
	if (!savedLocation) {
		savedLocation = "Minsk";
		saveToLocalStorage("lastLocation", savedLocation);
	}

	//* загружает последнюю локацию из локалСтораджа
	
	renderTabs(await getWeatherData(savedLocation))
	renderLocations();
}