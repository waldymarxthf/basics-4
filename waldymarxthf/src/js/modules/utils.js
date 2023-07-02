import { PROPERTIES } from "./constants";

export function showError(element, className = PROPERTIES.HIDDEN) {
	element.classList.remove(className);
}

export function showSuccess(element, className = PROPERTIES.HIDDEN) {
	element.classList.remove(className);
}

export function showElement(element, className = PROPERTIES.HIDDEN) {
	element.classList.remove(className);
}

export function hideError(element, className = PROPERTIES.HIDDEN) {
	element.classList.add(className);
}

export function hideSucces(element, className = PROPERTIES.HIDDEN) {
	element.classList.add(className);
}

export function hideElement(element, className = PROPERTIES.HIDDEN) {
	element.classList.add(className);
}
