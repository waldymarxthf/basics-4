export const VARIABLES = {
	TABS: document.querySelectorAll(".tabs__item"),
	FORM_ELEMENT: document.querySelector(".weather__search"),
	WEATHER_BLOCK: document.querySelectorAll(".weather__block"),
	FORM: document.querySelector(".weather__search"),
	NOW: {
		TEMPERATURE: document.querySelector(".weather__block-temp span"),
		CITY: document.querySelector(".weather__block-content-city"),
		ICON: document.querySelector(".weather__block-icon"),
	},
	DETAILS: {
		CITY:  document.querySelector(".weather__details-title"),
		TEMPERATURE: document.querySelector(".temperature"),
		FEEL_LIKE: document.querySelector(".feel"),
		WEATHER: document.querySelector(".weather-sky"),
		SUNRISE: document.querySelector(".sunrise"),
		SUNSET: document.querySelector(".sunset"),
	},
};
