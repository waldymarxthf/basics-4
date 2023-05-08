const tabs = document.querySelectorAll(".tabs__item");
const windows = document.querySelectorAll(".weather__block");
const form = document.querySelector(".weather__search-form");
const input = document.querySelector(".weather__search-form-input");
const temperature = document.querySelector(".weather__block-temp");
const city = document.querySelector(".weather__block-content-city");


const ABSOLUTE_ZERO = 273.15

const serverUrl = "http://api.openweathermap.org/data/2.5/weather"
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'

export { tabs, windows, form, input, temperature, city, ABSOLUTE_ZERO, serverUrl, apiKey };
