import { timeConverter, tempConverter, changeActiveLocation, getData } from "./script.js";
import { form, input, WEATHER_ELEMS, tabs, tabsBlocks } from "./ui.js";
import {
  saveToLocalStorage,
  renderFavourites,
  favourites,
  saveActiveCityToLocalstorage,
} from "./localStorage.js";

function loadLocations() {
  if (localStorage.getItem('locations')) {
    const city = JSON.parse(localStorage.getItem('locations'));
    const activeCity = JSON.parse(localStorage.getItem('activeLocation'));

    favourites.push(...city);
    renderFavourites(city);
    renderActiveLocation(activeCity);
  };
};

function tabsBtnsHandler(e) {
  if (e.target.classList.contains('tab')) {
    const tabIdx = tabs.indexOf(e.target);

    tabs.forEach(tab => tab.classList.remove('on-tab'));
    tabs[tabIdx].classList.add('on-tab');

    tabsBlocks.forEach(item => item.classList.add('hide'));
    tabsBlocks[tabIdx].classList.remove('hide');
  };
};

async function renderActiveLocation(location) {
  const data = await getData(location[0].name);
  renderData(data);
};

async function renderDataFromFavourites(e) {
  if (e.target.classList.contains('locationsName')) {
    const data = await getData(e.target.textContent);
    renderData(data);
    changeActiveLocation(e.target.textContent);
    saveActiveCityToLocalstorage();
  };
};

function addToFavourite(e) {
  if (e.target.classList.contains('nowLike')) {
    const name = WEATHER_ELEMS.now.name.textContent;
    const node = `
        <div class="weather__locations-list-box" id="locationsContainer">
            <p class="weather__locations-list-text" id="locationsName">${name}</p>
            <span class="weather__locations-list-del nowDel" id="locationsDelete">╳</span>
        </div>
            `;

    if (favourites.some((el) => el.name === name)) {
      throw new Error('Такой город уже добавлен');
    };

    WEATHER_ELEMS.locations.list.insertAdjacentHTML('afterbegin', node);
    favourites.push({ name: name });
    changeActiveLocation(name);
    saveActiveCityToLocalstorage();
    saveToLocalStorage();
  };
};

function deleteFromFavourite(e) {
  if (e.target.classList.contains('nowDel')) {
    const parentNode = e.target.closest('#locationsContainer');
    parentNode.remove();

    const name = parentNode.querySelector('#locationsName').textContent;
    const nameIdx = favourites.findIndex(c => c.name === name);

    favourites.splice(nameIdx, 1)
    saveToLocalStorage();
  };
};

async function renderData(data) {
  const weatherName = data.weather[0].main;
  const temp = tempConverter(data.main.temp);
  const name = data.name;
  const feelsLike = tempConverter(data.main.feels_like);
  const sunrise = timeConverter(data.sys.sunrise);
  const sunset = timeConverter(data.sys.sunset);
  const idIcon = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/wn/${idIcon}@2x.png`;

  WEATHER_ELEMS.now.temp.textContent = temp;
  WEATHER_ELEMS.now.name.textContent = name;
  WEATHER_ELEMS.now.icon.src = iconSrc;

  WEATHER_ELEMS.details.name.textContent = name;
  WEATHER_ELEMS.details.temp.textContent = temp;
  WEATHER_ELEMS.details.feelsLike.textContent = feelsLike;
  WEATHER_ELEMS.details.weatherName.textContent = weatherName;
  WEATHER_ELEMS.details.sunrise.textContent = sunrise;
  WEATHER_ELEMS.details.sunset.textContent = sunset;
};

window.addEventListener('click', async (e) => {
  tabsBtnsHandler(e);
  addToFavourite(e);
  deleteFromFavourite(e);
  renderDataFromFavourites(e);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = await getData(input.value);
  renderData(data);
  changeActiveLocation(WEATHER_ELEMS.now.name.textContent);
  saveActiveCityToLocalstorage();
  input.value = '';
  input.focus();
});

loadLocations();