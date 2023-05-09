const tabs = document.querySelectorAll('.tabs__item')
const weatherBlock = document.querySelectorAll('.weather__block')

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		tabs.forEach(t => t.classList.remove('active'))
		weatherBlock.forEach(w => w.classList.remove('active'))

		tab.classList.add('active')
		weatherBlock[index].classList.add('active')
	})
})

const UI_ELEMNTS={
INPUT_CITY: document.querySelector('.weather__search-form-input'),
FORM: document.querySelector('.weather__search-form'),
ADD__CITY_BTN : document.querySelector('.weather__search-form-btn'),
WEATHER_BLOCK_TEMP_NOW:document.querySelector('.weather__block-temp'),
WEATHER_BLOCK_ICON_NOW:document.querySelector('.weather__block-cloud'),
WEATHER_BLOCK_CITY_NOW:document.querySelector('.weather__block-content-city')
}


UI_ELEMNTS.FORM.addEventListener('submit',(e)=>{
  e.preventDefault()
  addCity(UI_ELEMNTS.INPUT_CITY)
  clearInput(UI_ELEMNTS.INPUT_CITY)
  })
  
  function addCity(input){
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = input.value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  
  fetch(url)
  .then(response => response.json())
  .then(obj=>show_Name_and_temp(obj.name, obj.main.temp, obj.weather[0].icon))
  }
  
  function show_Name_and_temp(name,temp,icon){
UI_ELEMNTS.WEATHER_BLOCK_TEMP_NOW.textContent=temp;
UI_ELEMNTS.WEATHER_BLOCK_CITY_NOW.textContent=name;
const iconUrl=`https://openweathermap.org/img/wn/${icon}@2x.png`
UI_ELEMNTS.WEATHER_BLOCK_ICON_NOW.src=iconUrl
  }

  function clearInput(input){
    input.value=""
  }