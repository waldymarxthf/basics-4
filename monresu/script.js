import {tabsContainerNode, tabNodes, tabContentNodes, form, inputCityNode, MODAL_NODES} from './modules/variables.mjs'
import {serverURL, apiKey} from './modules/variables.mjs'
import {NOW_SCREEN_NODES, DETAILS_SCREEN_NODES, FORECAST_SCREEN_NODES} from './modules/variables.mjs'
import {getData, timeConverter, getNormalCityName, cityExistsInCache, findIndexCityInCache, saveToLocalStorage} from './modules/functions.mjs'
import {cache} from './modules/variables.mjs'

function modalErrorButtonHandler() {
  MODAL_NODES.modalError.style.display = 'none';
}

MODAL_NODES.modalErrorButton.addEventListener('click', modalErrorButtonHandler);

function showError(error) {
  MODAL_NODES.modalErrorMessage.textContent = error;
  MODAL_NODES.modalError.style.display = 'flex';
}

function DOMchange(data, cityName) {
  const weather = data.weather[0].main;
  const timeSunrise = timeConverter(data.sys.sunrise);
  const timeSunset = timeConverter(data.sys.sunset);
  const iconID = data.weather[0].icon;
  const srcIcon = `https://openweathermap.org/img/wn/${iconID}@4x.png`;

  NOW_SCREEN_NODES.NOW_TEMP.textContent = data.main.temp;
  NOW_SCREEN_NODES.NOW_ICON_WEATHER.src = srcIcon;
  NOW_SCREEN_NODES.NOW_CITY.textContent = getNormalCityName(cityName);
  DETAILS_SCREEN_NODES.DETAILS_CITY_NAME.textContent = getNormalCityName(cityName);;
  DETAILS_SCREEN_NODES.DETAILS_TEMP.textContent = data.main.temp
  DETAILS_SCREEN_NODES.DETAILS_TEMP_FEELSLIKE.textContent = data.main.feels_like;
  DETAILS_SCREEN_NODES.DETAILS_WEATHER.textContent = weather;
  DETAILS_SCREEN_NODES.DETAILS_SUNRISE.textContent = timeSunrise;
  DETAILS_SCREEN_NODES.DETAILS_SUNSET.textContent = timeSunset;
  FORECAST_SCREEN_NODES.FORECAST_CITY_NAME.textContent = getNormalCityName(cityName);
}

tabsContainerNode.addEventListener('click', event => tabsContainerNodeHandler(event));

function tabsContainerNodeHandler(event) {
  if (!event.target.classList.contains('tabs__item')) return;
  const index = Array.from(tabNodes).indexOf(event.target);

  tabNodes.forEach(tab => tab.classList.remove('active'));
  tabContentNodes.forEach(content => content.classList.remove('active'));
  tabNodes[index].classList.add('active');
  tabContentNodes[index].classList.add('active');
}

async function formHandler(event) {
  event.preventDefault();

  const cityName = inputCityNode.value;
  const URL = `${serverURL}?q=${cityName}&appid=${apiKey}&units=metric`;
  form.reset();
  const isCityInCache = cityExistsInCache(cityName.toLowerCase());
  console.log(cache)
  if (isCityInCache[0] && isCityInCache[1]) {
    console.log('нашел')
    DOMchange(cache[findIndexCityInCache(cityName)].data, cityName);
    return;
  } 
  else if(isCityInCache[0] && !isCityInCache[1]) {
    console.log('Обновил')
    const data = await getData(URL);
    cache[findIndexCityInCache(cityName)].data = data;
    cache[findIndexCityInCache(cityName)].time = new Date().getHours();
    DOMchange(data, cityName);
    saveToLocalStorage();
    return;
  }
  else {
    console.log('не нашел')
  }
  try {
    console.log('Отправил на сервер')
    const data = await getData(URL);
    if ('message' in data) {
      throw new Error(`Error: ${data.message}`);a
    }
    cache.push({
      city: cityName.toLowerCase(),
      data: data,
      time: new Date().getHours(),
    })
    DOMchange(data, cityName);
    saveToLocalStorage();
  } catch (error) {
    showError(error.message);
  }
}

form.addEventListener('submit',  event => formHandler(event));