const tabs = document.querySelectorAll('.tabs_item');
const displayItem = document.querySelectorAll('.content-area_display');

const inputValue = document.querySelector('.header-input');
const locationName = document.querySelector('.location-target');


tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        displayItem.forEach(el => el.classList.remove('active'))

        displayItem[index].classList.add('active')
    })
});

async function getRequest() {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = 'moscow';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const temperature = data.main.temp;
    console.log(`temp - ${temperature}`);

    const locationCity = data.name;
    console.log(`location - ${locationCity}`);

    const iconId = data.weather[0].icon 
    console.log(`icon id - ${iconId}`);
    
}

getRequest()






