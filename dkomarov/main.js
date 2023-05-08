const tabs = document.querySelectorAll('.tabs_item');
const displayItem = document.querySelectorAll('.content-area_display');

const inputValue = document.querySelector('.header-input');
const formNode = document.querySelector('.header');


function clearInput() {
    inputValue.value = '';
}


tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        displayItem.forEach(el => el.classList.remove('active'))
        displayItem[index].classList.add('active')
    })
});



async function getRequest() {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = inputValue.value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    createDisplayNow(data);
    clearInput();

};

function createDisplayNow(data) {
    const tempSpan = document.querySelector('.weather-temp span');
    const temperature = data.main.temp;
    tempSpan.textContent = temperature.toFixed(0);


    const iconId = data.weather[0].icon
    const iconImg = `https://openweathermap.org/img/wn/${iconId}@4x.png`;
    const iconWeather = document.querySelector('.weather-icon img');
    iconWeather.src = iconImg;

    const cityName = document.querySelector('.location-target span');
    cityName.textContent = data.name;
}


formNode.addEventListener('submit', (e) => {
    e.preventDefault();
    getRequest()
})












