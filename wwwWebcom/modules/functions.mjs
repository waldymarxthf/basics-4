import {input,city,temperature,icon, favoriteList, listOfCities} from './constants.mjs'
import { setItem,getItem, removeItem } from './localstorage.mjs'

let countId = 0



export function renderInfo(data,name) {
	if (data) {
		city.textContent = name.slice(0,1).toUpperCase() + name.slice(1)
		temperature.textContent = `${Math.round(data.main.temp)}°`
		icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
	}
	input.value = ''
}

export function resetDom() {
	favoriteList.innerHTML = "";
  }


export function addCity() {
	if(listOfCities.includes(city.textContent)) return
	listOfCities.push(city.textContent)
	console.log(listOfCities)
	setItem(listOfCities)
}

export function deleteCity(event){
	const idBtn = event.target.getAttribute('id')
	listOfCities.splice(idBtn,1)
	// renderFavorite()
	const nameBtn = event.target.getAttribute('name')
	removeItem(nameBtn)
	renderStorage()
}

// export function renderFavorite() {
// 	countId = 0
	
// 	// listOfCities.forEach((el) => createEl(el))

// }
export function renderStorage() {
	countId = 0
	resetDom();
	const localStorageSize = localStorage.length
    for (let i = 0; i < localStorageSize; i++) {
		createEl(getItem(i))
	}
}

export function createEl(city) {
	const newCity = document.createElement('li')
	const closeBtn = document.createElement('button')
	closeBtn.className = 'closeBtn'
	newCity.className = 'item'
	closeBtn.id = `${countId++}`
	closeBtn.name = city

	newCity.textContent = city
	favoriteList.appendChild(newCity)
	newCity.appendChild(closeBtn)

	closeBtn.addEventListener('click', deleteCity)
}









