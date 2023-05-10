// Задача: отображение погоды для выбранного города.

import {getDOMElement, timeConverter, saveToLocalStorage} from './utils.js'

const tabsContent = document.querySelectorAll('.tabs-content-item');
const tabsBtn = document.querySelectorAll('.tab-item');
const tabsBtns = getDOMElement('.tabs');
const searchCityInput = getDOMElement('.weather-search-form-input');
const searchCityForm = getDOMElement('.weather-search-form');
const weatherNowCity = getDOMElement('.selected-city-now');
const btnAddFavoriteCity = getDOMElement('.favorite-btn');
const favoriteCitiesList = getDOMElement('.favourite-cities-list');
const favoriteCities = document.querySelectorAll('.favourite-cities-list-item');

let storage = JSON.parse(localStorage.getItem('storage')) || {cities: []};

// отображение информации
async function showWeather(city) {
    // получение данных с сервера
    const data = await fetchNowWeather(city);
   
    // подготовка необходимых данных
    const vars = process(data);
    
    // отрисовка данных
    render(vars);
}

// получение данных от api
async function fetchNowWeather(city) {
    try {
        const ServerUrl = 'http://api.openweathermap.org/data/2.5/weather';
        const apiKey = '8b70971e38e651a72781439cafacf538';
        const url = `${ServerUrl}?q=${city}&appid=${apiKey}&units=metric`;

        const respons = await fetch(url);
        if (respons.ok) {
            const data = await respons.json();
            return data;           
        }
        else {
            throw new Error((await respons.json()).message);
        }
    } catch (error) {
        alert('Error: '+ error.message);
        console.log(error);
    }
}

// выбор нужных данных из полученных и сохранение их в localStorage
function process(data) {
    const vars = {};

    vars.city = data.name;
    vars.temp = Math.round(data.main.temp);
    vars.iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    vars.feelsLikeTemp = Math.round(data.main.feels_like);
    vars.precipitation = data.weather[0].main;
    vars.timeZone = data.timezone;
    vars.sunrise = timeConverter(data.sys.sunrise, vars.timeZone);
    vars.sunset = timeConverter(data.sys.sunset, vars.timeZone);
    console.log(data.name);
        
    return vars;
}

// отрисовка данных
function render(vars) {
    const varsForNow = {
        city: vars.city,
        temp: vars.temp,
        iconUrl: vars.iconUrl,
    };
    renderWeatherNow(varsForNow);
    const varsForDetailes = {
        city: vars.city,
        temp: vars.temp,
        feelsLikeTemp: vars.feelsLikeTemp,
        precipitation: vars.precipitation,
        timeZone: vars.timeZone,
        sunrise: vars.sunrise,
        sunset: vars.sunset,
    };
    renderWeatherDetails(varsForDetailes);
}

function renderWeatherNow(vars) {
    const weatherNowIcon = getDOMElement('.weather-now-precipitation-img');
    const weatherNowTemperature = getDOMElement('.temperature');

    weatherNowCity.textContent = vars.city;
    weatherNowTemperature.textContent = vars.temp;
    weatherNowIcon.src = vars.iconUrl;
}

function renderWeatherDetails(vars) {
    const weatherDetailsCity = getDOMElement('.selected-city-details');
    const weatherDetailsTemp = getDOMElement(".weather-details-temp");
    const weatherDetailsFeelsLike = getDOMElement(".weather-details-feels-like");
    const weatherDetailsPrecipitation = getDOMElement(".weather-details-precipitation");
    const weatherDetailsSunrise = getDOMElement(".weather-details-sunrise");
    const weatherDetailsSunset = getDOMElement(".weather-details-sunset");

    weatherDetailsCity.textContent = vars.city;
    weatherDetailsTemp.textContent = vars.temp;
    weatherDetailsFeelsLike.textContent = vars.feelsLikeTemp;
    weatherDetailsPrecipitation.textContent = vars.precipitation;
    weatherDetailsSunrise.textContent = vars.sunrise;
    weatherDetailsSunset.textContent = vars.sunset;
}

const tabsBtnsHandler = (event) => {
    if (event.target.classList.contains('tab-item')) {
        const btnIndex = Array.from(tabsBtn).indexOf(event.target);
        tabsBtn.forEach(tab => tab.classList.remove('active-tab'));
        Array.from(tabsBtn)[btnIndex].classList.add('active-tab');
        tabsContent.forEach(block => block.classList.add('inactive-block'));
        Array.from(tabsContent)[btnIndex].classList.remove('inactive-block');
    }
}

const searchFormHandler = (event) => {
    try {
        event.preventDefault();
    const city = searchCityInput.value.trim();
    if (!city) {
        throw new Error('Некорректное название города');
                
    }
    showWeather(city);
    
    }
    catch (error){
        alert('Error: '+ error);
    }
    finally {
        searchCityForm.reset();
    }
}

const btnFavoriteCityHandler = () => {
    const city = weatherNowCity.textContent;
    addFavoriteCities(city);
}

function addFavoriteCities(city) {
    addFavoriteCityToStorage(city);
    saveToLocalStorage('storage', storage);
    renderFavoriteCities();
}

function addFavoriteCityToStorage(city) {
    if (storage.cities.length !== 0 && storage.cities.includes(city)) {
        alert('В вашем списке избранных городов уже есть этот город');
        return;
    }
    storage.cities.push(city);
   
}

function renderFavoriteCities() {
    favoriteCitiesList.innerHTML = '';
    storage.cities.forEach(city => addFavoriteCityNode(city));
}

function addFavoriteCityNode(city) {
    const favoriteCity = document.createElement('li');
    const btnDeleteCity = document.createElement('button');
    const spanCity = document.createElement('span');
    
    spanCity.textContent = city;
    spanCity.classList.add('favourite-city-span');
    favoriteCity.classList.add('favourite-cities-list-item');
    btnDeleteCity.classList.add('favourite-cities-list-delete-btn');
    favoriteCity.setAttribute('data-city', city);
    favoriteCitiesList.append(favoriteCity);
    favoriteCity.append(spanCity);
    favoriteCity.append(btnDeleteCity);
    favoriteCity.addEventListener('click', favoriteCitiesListHandler);
}

function removeFavoriteCity(city) {
    deleteFavoriteCityFromStorage(city);
    renderFavoriteCities();
}

function deleteFavoriteCityFromStorage(city) {
    storage.cities = storage.cities.filter(c => c !== city);
    saveToLocalStorage('storage', storage);
  
}


function favoriteCitiesListHandler(e) {
    const parentElement = e.target.closest('[data-city]');
    const city = parentElement.getAttribute('data-city');
    if (e.target.classList.contains('favourite-cities-list-delete-btn')) {
        removeFavoriteCity(city);
        return;
    }
    if (e.target.classList.contains('favourite-city-span')) {
        showWeather(city);
        return;
    }
   
}



btnAddFavoriteCity.addEventListener('click', btnFavoriteCityHandler);

tabsBtns.addEventListener('click', tabsBtnsHandler);

searchCityForm.addEventListener('submit', searchFormHandler);

function init() {
    if (storage.cities.length === 0) {
        showWeather("Koh Pha Ngan");
    }
    else {
        showWeather(storage.cities[0]);
    }
    renderFavoriteCities();
}

init();
