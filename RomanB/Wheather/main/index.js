import {loadCities, saveCities, saveMainCity, loadMainCity} from './components/localStorage.js'

const searchFormInput = document.querySelector('.search-form__input');
const searchFormButton =document.querySelector('.search-form__button');
const mainBlockTemperature = document.querySelector('.main-block__temperature');
const mainBlockCity = document.querySelector('.main-block__city');
const locationsBlock = document.querySelector('.locations-block__locations');
const likeButton = document.querySelector('.main-block__like-button');
const newCityButton = document.querySelector('.newCityButton');

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';


const cities = loadCities();
const favoriteCity = loadMainCity();
if (favoriteCity) {
    mainBlockCity.textContent = favoriteCity.city;
    mainBlockTemperature.textContent = favoriteCity.temperature;
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
        throw new Error('Ошибка при обработке ответа сервера');
    }
}

const handleResponse = (data) => {
    mainBlockCity.textContent = data.name
    mainBlockTemperature.textContent = data.main.temp;

    saveMainCity(data.name, data.main.temp)
}

searchFormButton.addEventListener('click', async (e) => {
    e.preventDefault();
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
}
createCitiesBlock(cities)

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

likeButton.addEventListener('click', () => {
    addTask(cities,mainBlockCity.textContent)
    createCitiesBlock(cities)
})

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















