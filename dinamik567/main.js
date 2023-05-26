import {STORAGE} from "./module/STORAGE.js";
import {SCREEN, TABS, UI_Elements} from "./module/UI_ELEMENT.js";
import {createDetailsList, clearDetailsList, setCurrentCity} from './module/CONTROL_DETAILS.js'
import {getUrlRequest, getDateWidthServer} from "./module/URL.js";
import {listCities, addCityInListCities, removeCityInListCities} from "./module/LIST_OF_CITIES.js";


TABS.listTabs.addEventListener('click', clickTabHandler);

function clickTabHandler(e) {
    const nodeElems = e.target.parentElement.children;
    const ArrayElems = Array.from(nodeElems);

    ArrayElems.map(elem => {
        elem.classList.remove('active');
    });

    //Удалить класс active у экранов
    Array.from(SCREEN.listScreen).map(screen => screen.classList.remove('active'));

    e.target.classList.add('active');

    switch (e.target.textContent) {
        case 'Now' :
            SCREEN.screenNow.classList.add('active');
            return;
        case 'Details':
            SCREEN.screenDetails.classList.add('active');
            return
        case 'Forecast':
            SCREEN.screenForecast.classList.add('active');
            return;
    }
}

function buttonAddCityClickHandler() {
    addCityInListCities(UI_Elements.nameCityHTMLElem.textContent);
    render();
}

UI_Elements.buttonAddCity.addEventListener('click', buttonAddCityClickHandler);

async function render() {

    const cityName = STORAGE.getCurrentCity('city');
    const url = getUrlRequest(cityName);

    UI_Elements.listCitiesHTMLElement.innerHTML = '';

    listCities.map(obj => {
        const cityName = createCityHTMLElement(obj.cityName);
        const buttonRemoveCity = createButtonRemoveCity(buttonRemoveClickHandler);

        cityName.appendChild(buttonRemoveCity);
        UI_Elements.listCitiesHTMLElement.appendChild(cityName);
    });

    const dateForecast = await getDateWidthServer(url)
        .catch(() => alert('Ошибка при извлечении данных'));

    setCurrentCity();
    clearDetailsList();
    createDetailsList();

    UI_Elements.temperatureValue.textContent = await Math.round(dateForecast.main.temp);
    UI_Elements.nameCityHTMLElem.textContent = await dateForecast.name;
}

function createCityHTMLElement(content) {
    const cityName = document.createElement('li');
    cityName.innerHTML = `<span>${content}</span>`;
    cityName.classList.add('list-locations__item');

    return cityName;
}

function createButtonRemoveCity() {
    const buttonRemoveCity = document.createElement('button');
    buttonRemoveCity.textContent = 'x';
    buttonRemoveCity.type = 'click';

    return buttonRemoveCity
}

function buttonRemoveClickHandler(e) {
    const button = e.target.parentElement.querySelector('button');
    if (e.target !== button) {
        return
    }

    const cityNameHtmlElement = e.target.parentElement.querySelector('span');
    removeCityInListCities(cityNameHtmlElement.textContent);
    render();
}

UI_Elements.listCitiesHTMLElement.addEventListener('click', buttonRemoveClickHandler);
UI_Elements.listCitiesHTMLElement.addEventListener('click', selectedCityByClick);

async function selectedCityByClick(e) {
    const span = e.target.parentElement.querySelector('span');
    if(e.target !== span) {
        return
    }

    const cityName = span.textContent;
    STORAGE.saveCurrentCity('city', cityName);
    render();
}

UI_Elements.searchForm.addEventListener('submit', searchFormSubmitHandler);

async function searchFormSubmitHandler(e) {
    try {
        e.preventDefault();

        const url = getUrlRequest(UI_Elements.searchInput.value);
        STORAGE.saveFavoriteCities('city', UI_Elements.searchInput.value);
        UI_Elements.searchInput.value = '';

        const dateForecast = await getDateWidthServer(url)
            .catch(() => alert('Ошибка при извлечении данных'));

        UI_Elements.temperatureValue.textContent = await Math.round(dateForecast.main.temp);
        UI_Elements.nameCityHTMLElem.textContent = await dateForecast.name;
    } catch (Err) {
        alert('Нет данных поэтому городу, проверьте правильность записи');
    }
    return false;
}

render();