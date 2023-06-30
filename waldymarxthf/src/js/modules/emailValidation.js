import { DOM_ELEMENTS, PROPERTIES } from "./ui-variables";

const { ERROR_AUTH, COMPLETE_AUTH } = DOM_ELEMENTS.AUTHORIZATION;

export function validateEmail(email) {
	const re =
		/^(([^<>()[\].,;:"@\s]+(\.[^<>()[\].,;:"@\s]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!re.test(email)) {
		ERROR_AUTH.classList.remove(PROPERTIES.HIDDEN);
		return false;
	}
	ERROR_AUTH.classList.add(PROPERTIES.HIDDEN);
	COMPLETE_AUTH.classList.remove(PROPERTIES.HIDDEN);
	return true;
}
