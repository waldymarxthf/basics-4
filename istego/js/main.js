const UI = {
  formFind: document.querySelector('.form-find'),
  findInp: document.querySelector('.weather__find-input'),
  findBtn: document.querySelector('.weather__find-btn'),
  preload: document.querySelector('.preload-wrapper'),
  nowDegreeNode: document.querySelector('.now__degree-text'),
  nowCityNameNode: document.querySelector('.now__city-name'),
  navBtns: document.querySelectorAll('.btn-nav')
}

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';


UI.formFind.addEventListener('submit', getWeather);

async function getWeather(event) {
  event.preventDefault();

  const cityName = UI.findInp.value;
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

  try {
    UI.preload.style.display = 'flex';
    const response = await fetch(url);
    const weatherData = await response.json();

    if (weatherData.cod === 200) {
      UI.findInp.value = '';
      const weatherCityName = weatherData.name;
      const weatherTemp = weatherData.main.temp;

      renderNow(weatherCityName, weatherTemp);
      UI.preload.style.display = 'none';
    } else {
      UI.findInp.value = 'Произошла ошибка, повторите позже';
      UI.preload.style.display = 'none';
    }
  } catch (error) {
    console.log('ошибка');
    UI.findInp.value = 'Error: ' + error.message;
    UI.preload.style.display = 'none';
  }

}

function renderNow(cityName, temp) {
  UI.nowDegreeNode.textContent = Math.round(temp - 273.15);
  UI.nowCityNameNode.textContent = cityName;
}

UI.navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(UI.navBtns.length);
    for(let i = 0; i < UI.navBtns.length; i++) {
      UI.navBtns[i].classList.remove('active-btn');
    }
    btn.classList.add('active-btn');
  })
})