import { formElement, genderize } from "./modules/ui-variables.js";
import { getLink, getIndex} from "./modules/utils.js";
import { saveGenderizeToLocalStorage, loadPaul } from "./modules/localStorage.js";

export let history = []

function createGenderize({name, gender}) {
	let newGenderize = document.createElement('p')
	newGenderize.classList.add('genderize-item')
	newGenderize.textContent = `${name} is ${gender}`
	newGenderize.addEventListener('click', () => {
		deleteGenderize(newGenderize)
	})
	return newGenderize
}

export function render() {
	genderize.innerHTML = ''
	history.forEach((paul) => {
		const genderizeElem = createGenderize(paul)
		genderize.append(genderizeElem)
	})
}

function deleteGenderize(paul) {
	let index = getIndex(paul)
	history.splice(index, 1)
	console.log(history)
	render()
	saveGenderizeToLocalStorage()
}

async function getPaul() {
	let response = await fetch(getLink());
	let paul = await response.json();
	history.push({
		name: paul.name,
		gender: paul.gender
	})
	console.log(history)
	render()
	saveGenderizeToLocalStorage()
}

formElement.addEventListener('submit', (event) => {
	event.preventDefault()
	getPaul()
	event.target.reset()
})

loadPaul()