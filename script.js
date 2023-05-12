import {tabs,weatherBlock,UI_ELEMNTS} from './ui_elements.js';

tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		tabs.forEach(t => t.classList.remove('active'))
		weatherBlock.forEach(w => w.classList.remove('active'))

		tab.classList.add('active')
		weatherBlock[index].classList.add('active')
	})
})

UI_ELEMNTS.FORM.addEventListener('submit',(e)=>{
  e.preventDefault()
  addCity(UI_ELEMNTS.INPUT_CITY.value)
  clearInput(UI_ELEMNTS.INPUT_CITY)
  })
  
  function addCity(input){
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = input;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; 
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  
  fetch(url)
  .then(response => {
    if(response.ok){
        return response.json()
    }
    return Promise.reject(new Error(response.status))
})
  .then(obj=>show_Name_and_temp(obj.name, obj.main.temp, obj.weather[0].icon))
  .catch(error => alert(error))
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

  
  UI_ELEMNTS.WEATHER_BLOCK_HEART.addEventListener('click', () => { 
addCity_To_list(UI_ELEMNTS.WEATHER_BLOCK_CITY_NOW.textContent) 
  })
 
  function addCity_To_list(cityName){
    
    let city = document.createElement('button');
  city.className = "city-list__items";
  city.innerHTML = `${cityName}
  <button type="button" class="closeButton">&#10006</button>`;
  delButon(city)

  UI_ELEMNTS.RIGHT_BLOCk_LIST.append(city);

  let cityList=document.querySelector('.city-list')
cityList.addEventListener('click',(event) => {
  addCity(event.target.childNodes[0].textContent)
  console.log(event.target.childNodes[0])})
}

function delButon(city){
  const delBtn = city.querySelector('.closeButton')
  delBtn.addEventListener('click',()=>{
    city.remove(city)
  })
}