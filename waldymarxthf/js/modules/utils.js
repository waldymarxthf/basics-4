import { formElement } from "./ui-variables.js";
import { history } from "../script.js";

export function getLink() {
	const serverUrl = 'https://api.genderize.io';
	const name = new FormData(formElement).get('name');
	return `${serverUrl}?name=${name}`;
}

export function getIndex(paul) {
	return history.findIndex(({name, gender}) => `${name} is ${gender}` === paul.textContent)
}