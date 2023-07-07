import { LocalStorageError, errorHandler } from "./errors";

export function saveToLocalStorage(key, value) {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {
		errorHandler(new LocalStorageError(`Failed when save to localStorage`));
	}
}

export function loadFromLocalStorage(key) {
	try {
		const result = JSON.parse(localStorage.getItem(key));
		return result;
	} catch (error) {
		errorHandler(new LocalStorageError(`Failed when load from localStorage`));
		return null;
	}
}
