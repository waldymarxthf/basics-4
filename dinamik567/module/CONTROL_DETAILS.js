import {TABS} from "./UI_ELEMENT.js";
import {STORAGE} from "./STORAGE.js";
import {getUrlRequest, getDateWidthServer} from "./URL.js";

export function setCurrentCity() {
    TABS.detailCurrentCity.textContent = STORAGE.getCurrentCity('city');
}

export function clearDetailsList() {
    TABS.detailList.innerHTML = '';
}

export async function createDetailsList() {

    const url = getUrlRequest(STORAGE.getCurrentCity('city'));
    const dateForecast = await getDateWidthServer(url)
        .catch(() => alert('Ошибка при извлечении данных'));

    const {
        main : {
            temp: dateTemperature,
            feels_like: dateTemperatureFeelsLike
        },
        sys : {
            sunrise: timeSunrise,
            sunset: timeSunset,
        },
        weather : {
            '0': {
                main: dateAboutWeather,
            }
        }
    } = dateForecast;


    //Создаем элемент с температурой

    const textElementOfTemperature = `Temperature: ${Math.round(dateTemperature)}`;
    const temperature = createItemOfDetailsList(
        'li',
        'details__list-item',
        textElementOfTemperature);

    //Создаем элемент как чувствуется температура
    const textElementOfFeelsLike = `Feels like: ${Math.round(dateTemperatureFeelsLike)}`;
    const feelsLike = createItemOfDetailsList(
        'li',
        'details__list-item',
        textElementOfFeelsLike);


    //Создаем элемент с погодой Weather
    const textElementOfWeather = `Weather: ${dateAboutWeather}`;
    const weather = createItemOfDetailsList(
        'li',
        'details__list-item',
        textElementOfWeather);

    //Создаем элемент Sunrise
    const dateAboutTimeSunrise = timeConverter(timeSunrise);
    const textElementOfSunrise = `Sunrise: ${dateAboutTimeSunrise}`;
    const sunrise = createItemOfDetailsList(
        'li',
        'details__list-item',
        textElementOfSunrise
    );

    //Создает элемент Sunset
    const dateAboutTimeSunset = timeConverter(timeSunset);
    const textElementOfSunset =`Sunset: ${dateAboutTimeSunset}`;
    const sunset = createItemOfDetailsList(
        'li',
        'details__list-item',
        textElementOfSunset
    );

    //Добавляем элементы в DOM
    TABS.detailList.appendChild(temperature);
    TABS.detailList.appendChild(feelsLike);
    TABS.detailList.appendChild(weather);
    TABS.detailList.appendChild(sunrise);
    TABS.detailList.appendChild(sunset);
}

function createItemOfDetailsList(tag, className, text) {
    const elemOfHtml = createHtmlElement(tag);
    addClassForElement(elemOfHtml, className);
    setTextForElement(elemOfHtml, text);

    return elemOfHtml;
}

function timeConverter(time) {
    const timeObject = new Date(time * 1000);
    return `${timeObject.getHours()}:${timeObject.getMinutes()}`
}

function createHtmlElement(tag) {
    return document.createElement(tag);
}

function setTextForElement(elem, text) {
    elem.textContent = text;
}

function addClassForElement(elem, className) {
    elem.classList.add(className)
}

