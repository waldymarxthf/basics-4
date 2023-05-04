import { formElement, genderize } from "./modules/ui-variables.js";
import { getLink, getIndex, isPaulExist } from "./modules/utils.js";
import { saveGenderizeToLocalStorage, loadPaul } from "./modules/localStorage.js";

export let history = [];

function createGenderize(paul) {
	let newGenderize = document.createElement("p");
	newGenderize.classList.add("genderize-item");
	newGenderize.textContent = `${paul.name} is ${paul.gender}`;
	newGenderize.addEventListener("click", () => {
		deleteGenderize(newGenderize);
	});
	return newGenderize;
}

export function render() {
	genderize.innerHTML = "";
	history.forEach((paul) => {
		const genderizeElem = createGenderize(paul);
		genderize.append(genderizeElem);
	});
}

function deleteGenderize(newGenderize) {
	let index = getIndex(newGenderize);
	history.splice(index, 1);
	console.log(history)
	render();
	saveGenderizeToLocalStorage();
}

async function getPaul() {

	try {
		let response = await fetch(getLink());
		let paul = await response.json();

		if (isPaulExist(paul)) {
			alert('Такое имя уже определено')
			console.error('Такое имя уже определено')
			return
		}

		if (paul.gender) {

			history.push({
				name: paul.name,
				gender: paul.gender,
			});

		} else {
			alert("Не удалось определить пол");
			console.error("Не удалось определить пол")
		}

	} catch (error) {
		alert(`Error: ${error.message}`);
		console.error(error)
	}

	console.log(history)
	render();
	saveGenderizeToLocalStorage();
}

formElement.addEventListener("submit", (event) => {
	event.preventDefault();
	getPaul();
	event.target.reset();
});

loadPaul();
