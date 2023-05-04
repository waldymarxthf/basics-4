import { formElement } from "./ui-variables.js";
import { history } from "../script.js";

export function getLink() {
	const serverUrl = 'https://api.genderize.io';
	const url = `${serverUrl}?name=${getName()}`;
	return url
}

function getName() {
	const formData = new FormData(formElement);
	const name = formData.get('name');
	return name
}

export function getIndex(paul) {
	return history.findIndex(({name, gender}) => `${name} is ${gender}` === paul.textContent)
}