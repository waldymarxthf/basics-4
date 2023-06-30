import { UI_ELEMNTS } from "./ui_elements";

export function getTime() {
	const now = new Date().toLocaleTimeString().slice(0, -3);
	return now;
}

export function validEmpty(text) {
	if (text === "") {
		return true;
	}
	return false;
}

export function clearInput() {
	UI_ELEMNTS.INPUT.value = "";
}

export class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError";
	}
}
