const tabs = document.querySelectorAll('.tabs__item')
const weatherBlock = document.querySelectorAll('.weather__block')
const UI_ELEMNTS={
INPUT_CITY: document.querySelector('.weather__search-form-input'),
FORM: document.querySelector('.weather__search-form'),
ADD__CITY_BTN : document.querySelector('.weather__search-form-btn'),
WEATHER_BLOCK_TEMP_NOW:document.querySelector('.weather__block-temp'),
WEATHER_BLOCK_ICON_NOW:document.querySelector('.weather__block-cloud'),
WEATHER_BLOCK_CITY_NOW:document.querySelector('.weather__block-content-city'),
WEATHER_BLOCK_HEART:document.querySelector('.weather__block-content-heart'),
RIGHT_BLOCk_LIST:document.querySelector('.city-list'),
RIGHT_BLOCk_LIST_ITEM_NAME:document.querySelector('.city-list__items__name'),
RIGHT_BLOCk_LIST_ITEM:document.querySelector('.city-list__items')

}
export {tabs,weatherBlock,UI_ELEMNTS}