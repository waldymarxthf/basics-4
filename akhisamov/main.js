const elements = {
    addPlace: document.querySelector('.weather__input'),
    addForm: document.querySelector('.weather__form'),
    temperatureNow: document.querySelector('.temperature'),
    countryNow: document.querySelector('.tab-block__country'),
    iconTemp: document.querySelector('.icon_temp')
}

elements.addForm.addEventListener('submit',(event) => {
    event.preventDefault();
    getWeather(elements.addPlace.value);
    elements.addPlace.value = '';
  });

function addWeather(item) {
    const temperature = Math.ceil(item.main.temp - 273.15);
    elements.temperatureNow.textContent = temperature;
    elements.countryNow.textContent = item.name;
    const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
    elements.iconTemp.setAttribute('src', iconUrl);   
}

async function getWeather(name) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${name}&appid=${apiKey}`;
    let response = await fetch(url);
    let weather = await response.json();
    
    addWeather(weather);
}
