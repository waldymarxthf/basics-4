const getElem = selector => document.querySelector(selector);

export const UI_Elements = {
    searchForm : getElem('.search-form'),
    searchInput : getElem('.search-input'),
    temperatureValue : getElem('.screen-now__temperature-digit'),
    nameCityHTMLElem : getElem('.screen-now__city'),
    buttonAddCity : getElem('.screen-now__like'),
    listCitiesHTMLElement : getElem('.list-locations'),
}

export const SCREEN  = {
    screenNow: getElem('.screen-now'),
    screenDetails: getElem('.details'),
    screenForecast: getElem('.weather-forecast'),
    listScreen: document.querySelectorAll('.first-piece-screen'),
}

export const TABS = {
    listTabs: getElem('.weather-tabs__list'),
    detailList: getElem('.details__list'),
    detailCurrentCity: getElem('.details__city')
}
