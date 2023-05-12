import {
	timeConverter,
	findLocationIndex,
	errorHandler,
} from "./modules/utils.js";
import { showLoader, hideLoader } from "./modules/preloader.js";
import {
	saveLocationToLocalStorage,
	loadLocations,
	saveLastLocationToLocalStorage,
	loadLastLocation,
} from "./modules/localstorage.js";
import { VARIABLES } from "./modules/ui-variables.js";

VARIABLES.TABS.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		VARIABLES.TABS.forEach((t) => t.classList.remove("active"));
		VARIABLES.WEATHER_BLOCK.forEach((w) => w.classList.remove("active"));

		tab.classList.add("active");
		VARIABLES.WEATHER_BLOCK[index].classList.add("active");
	});
});

//* переключает табы

const locations = [];
const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
const serverUrlForecast = "http://api.openweathermap.org/data/2.5/forecast"
const apiKey = "afc9f2df39f9e9e49eeb1afac7034d35";

async function getCityWeather(location) {
	showLoader();
	console.clear();
	try {
		let link = `${serverUrl}?q=${location}&appid=${apiKey}&units=metric`;
		let response = await fetch(link);

		if (!response.ok) {
			throw new Error("Повторите попытку позже");
		} else {
			let data = await response.json();
			saveLastLocationToLocalStorage(location)
			return data;
		}
	} catch (error) {
		errorHandler(error);
	} finally {
		hideLoader();
	}
}

async function getCityForecast(location) {
	try {
		let link = `${serverUrlForecast}?q=${location}&appid=${apiKey}&units=metric`;
		let response = await fetch(link);

		if (!response.ok) {
			throw new Error("Повторите попытку позже");
		} else {
			let data = await response.json();
			return data;
		}
	} catch (error) {
		errorHandler(error);
	}
}

//* отправляет запрос на сервер и скачивает json

async function updateBlockNow(data) {
	if (!data) {
		throw new Error("Город или страна не найдена");
	}

	const iconBlockNow = data.weather[0].icon;
	const tempBlockNow = Math.round(data.main.temp);
	const cityBlockNow = data.name;
	const iconUrl = `https://openweathermap.org/img/wn/${iconBlockNow}@4x.png`;
	VARIABLES.NOW.TEMPERATURE.textContent = tempBlockNow;
	VARIABLES.NOW.CITY.textContent = cityBlockNow;
	VARIABLES.NOW.ICON.src = iconUrl;
}

//* обновляет блок NOW

async function updateBlockDetails(data) {
	if (!data) {
		throw new Error("Город или страна не найдена");
	}

	const cityBlockDetails = data.name;
	const tempBlockDetails = Math.round(data.main.temp);
	const feelsLikeBlockDetails = Math.round(data.main.feels_like);
	const weatherBlockDetails = data.weather[0].main;
	const sunriseBlockDetails = timeConverter(data.sys.sunrise, data.timezone);
	const sunsetBlockDetails = timeConverter(data.sys.sunset, data.timezone);
	VARIABLES.DETAILS.TEMPERATURE.textContent = tempBlockDetails;
	VARIABLES.DETAILS.CITY.textContent = cityBlockDetails;
	VARIABLES.DETAILS.FEEL_LIKE.textContent = feelsLikeBlockDetails;
	VARIABLES.DETAILS.WEATHER.textContent = weatherBlockDetails;
	VARIABLES.DETAILS.SUNRISE.textContent = sunriseBlockDetails;
	VARIABLES.DETAILS.SUNSET.textContent = sunsetBlockDetails;
}

//* обновляет блок DETAILS

async function updateBlockForecast(data) {
	if (!data) {
		throw new Error("Город или страна не найдена");
	}

	const cityBlockForecast = data.city.name
	VARIABLES.FORECAST.CITY.textContent = cityBlockForecast

	VARIABLES.FORECAST.DATE.forEach((date, index) => {
		let dateBlockForecast = new Date((data.list[index].dt) * 1000)
		let humanDateBlockForecast = dateBlockForecast.toLocaleString("en-GB", {day: "numeric", month: "long"})
		date.textContent = humanDateBlockForecast
	})

	VARIABLES.FORECAST.TIME.forEach((date, index) => {
		let humanTimeBlockForecast = timeConverter(data.list[index].dt, data.city.timezone)
		date.textContent = humanTimeBlockForecast
	})

	VARIABLES.FORECAST.TEMPERATURE.forEach((temp, index) => {
		let tempBlockForecast = Math.round(data.list[index].main.temp)
		temp.textContent = tempBlockForecast
	})

	VARIABLES.FORECAST.PRECIPITATION.forEach((precipitaion, index) => {
		let precipitationBlockForecast = data.list[index].weather[0].main
		precipitaion.textContent = precipitationBlockForecast
	})

	VARIABLES.FORECAST.FEEL_LIKE.forEach((feelLike, index) => {
		let feelLikeBlockForecast = Math.round(data.list[index].main.feels_like)
		feelLike.textContent = feelLikeBlockForecast
	})

	VARIABLES.FORECAST.ICON.forEach((icon, index) => {
		let iconBlockForecast = data.list[index].weather[0].icon
		let iconUrl = `https://openweathermap.org/img/wn/${iconBlockForecast}@2x.png`;
		icon.src = iconUrl
	})

}

//* обновляет блок FORECAST

async function updateWeather(location) {
	try {
		let cityWeatherDataForecast = await getCityForecast(location)
		let cityWeatherData = await getCityWeather(location);
	
		await updateBlockNow(cityWeatherData);
		await updateBlockDetails(cityWeatherData);
		await updateBlockForecast(cityWeatherDataForecast)
	} catch (error) {
		console.error(error.message)
	}
}

//* функция которая получает данные и вызывает функции обновление блоков

async function weatherHandler(event) {
	event.preventDefault();
	const cityName = new FormData(VARIABLES.FORM_ELEMENT).get("city");
	await updateWeather(cityName);
	VARIABLES.FORM.reset();
}

//* функция для обработчика события

function addLocation() {
	try {
		const cityName = VARIABLES.NOW.CITY.textContent;

		if (locations.some((el) => el.location === cityName)) {
			throw new Error("Такой город уже добавлен");
		}

		locations.push({
			location: VARIABLES.NOW.CITY.textContent,
		});

		saveLocationToLocalStorage(locations);
		renderLocations();
	} catch (error) {
		errorHandler(error);
	}
}

//* добавляет локацию в массив

function renderLocations() {
	VARIABLES.LOCATIONS.LIST.innerHTML = "";
	locations.forEach((element) => {
		const newLocation = createLocationElement(element);
		VARIABLES.LOCATIONS.LIST.append(newLocation);
	});
}

//* рендерит локации из массива

function createLocationElement(element) {
	const newLocation = document.createElement("li");
	newLocation.classList.add("list-locations__item");
	newLocation.textContent = element.location;

	const newLocationBtn = document.createElement("button");
	newLocationBtn.classList.add("list-locations__item-btn");
	newLocation.append(newLocationBtn);

	newLocation.addEventListener("click", () => {
		updateWeather(element.location);
	});

	newLocationBtn.addEventListener("click", (event) => {
		event.stopPropagation();
		deleteLocation(newLocation);
	});

	return newLocation;
}

//* создает элементы локации

function deleteLocation(newLocation) {
	const index = findLocationIndex(locations, newLocation);
	locations.splice(index, 1);
	saveLocationToLocalStorage(locations);
	renderLocations();
}

//* функция удаления локации

addEventListener("DOMContentLoaded", async () => {
	let savedLocation = loadLastLocation();

	if (!savedLocation) {
		savedLocation = "Minsk";
		saveLastLocationToLocalStorage(savedLocation);
	}

	await updateWeather(savedLocation);
});

VARIABLES.NOW.LIKE.addEventListener("click", addLocation);

VARIABLES.FORM.addEventListener("submit", weatherHandler);

loadLocations(locations);
renderLocations();