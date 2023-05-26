import {loadCities, saveCities, saveMainCity, loadMainCity} from "../main/components/localStorage.js";

const mainBlockCity = document.querySelector('.main-block__city');
const temperatureBlockValue = document.querySelector('.temperature-block__value');
const temperatureSecondBlockValue = document.querySelector('.temperature-second-block__value');
const weatherBlockValue = document.querySelector('.weather-block__value');
const sunriseBlockTitle = document.querySelector('.sunrise-block__value');
const sunsetBlockValue = document.querySelector('.sunset-block__value');
const searchFormInput = document.querySelector('.search-form__input');
const searchFormButton =document.querySelector('.search-form__button');
const locationsBlock = document.querySelector('.locations-block__locations');

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

const cities = loadCities();
const favoriteCity = loadMainCity();
if (favoriteCity) {
    mainBlockCity.textContent = favoriteCity.city;
    temperatureBlockValue.textContent = favoriteCity.temperature;
    temperatureSecondBlockValue.textContent = favoriteCity.temperatureSecond;
    weatherBlockValue.textContent = favoriteCity.Weather;
    sunriseBlockTitle.textContent = favoriteCity.Sunrise;
    sunsetBlockValue.textContent = favoriteCity.Sunset;
}

const sendRequest = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка при выполнении запроса');
        }
        const result = await response.json();
        return result
    } catch (error) {
        throw new Error('Ошибка при ответе от сервера');
    }
}

const handleResponse = (data) => {
    console.log(data)
    mainBlockCity.textContent = data.name;
    temperatureBlockValue.textContent = data.main.temp;
    temperatureSecondBlockValue.textContent = data.main.feels_like;
    weatherBlockValue.textContent = data.weather[0].description;

    const timezoneOffset = data.timezone

    const sunrise = new Date(data.sys.sunrise * 1000);
    sunrise.setSeconds(sunrise.getSeconds() + timezoneOffset);

    const hoursSunrise = sunrise.getHours();
    const minutesSunrise = sunrise.getMinutes();
    const sunriseTime = hoursSunrise.toString().padStart(2, '0') + ':' + minutesSunrise.toString().padStart(2, '0')
    sunriseBlockTitle.textContent = sunriseTime;

    const sunset = new Date(data.sys.sunset * 1000);
    const hoursSunset = sunset.getHours();
    const minutesSunset = sunset.getMinutes();
    const sunsetTime = hoursSunset.toString().padStart(2, '0') + ':' + minutesSunset.toString().padStart(2, '0')
    sunsetBlockValue.textContent = sunsetTime;

    saveMainCity(data.name, data.main.temp, data.main.feels_like, data.weather[0].description, sunriseTime, sunsetTime)
}

searchFormButton.addEventListener('click', async (evt) => {
    console.log('nтут')
    evt.preventDefault();
    const cityName = searchFormInput.value
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const responseData = await sendRequest(url);
        handleResponse(responseData)
    } catch (error) {
        console.log('Ошибка:', error.message)
    }
})


const createCityBlock = (item) => {
    const newCity = document.createElement('div');
    const newCityTitle = document.createElement('span');
    const newCityButton = document.createElement('button');

    newCity.classList.add('locations-block__wrapper');
    newCityTitle.classList.add('locations-block__location');
    newCityTitle.textContent = item.city;
    newCityButton.classList.add('locations-block__button');
    newCityButton.setAttribute('data-city', item.city);

    newCity.append(newCityTitle, newCityButton)

    return newCity
}

const createCitiesBlock = (arr) => {
    locationsBlock.textContent = '';
    arr.forEach((item) => {
        const newCity = createCityBlock(item);
        locationsBlock.append(newCity)
    })
    console.log('done')
}
createCitiesBlock(cities);

const addTask = (arr,cityName) => {
    const isDuplicate = arr.filter(item => item.city.toLowerCase() === cityName.trim().toLowerCase())
    if (isDuplicate.length > 0) {
        return;
    }

    arr.push({
        city: cityName
    })

    saveCities(cities);
}

const deleteTask = (arr,cityName) => {
    const taskIndex = arr.findIndex(item => item.city === cityName);
    if (taskIndex !== -1) {
        arr.splice(taskIndex, 1);
    }

    saveCities(cities);
}

locationsBlock.addEventListener('click', async (evt) => {
    const {target} = evt;
    if (target.classList.contains('locations-block__button')) {
        const closestCityName =
            target
                .closest('.locations-block__wrapper')
                .querySelector('.locations-block__location');
        deleteTask(cities,closestCityName.textContent);
        createCitiesBlock(cities)
    }

    if (target.classList.contains('locations-block__location')) {
        const cityName = target.textContent
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

        try {
            const responseData = await sendRequest(url);
            handleResponse(responseData)
        } catch (error) {
            console.log('Ошибка:', error.message)
        }
    }
})
