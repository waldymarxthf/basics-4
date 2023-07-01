import Cookies from "js-cookie";
import { getMailRequest, getUserDataRequest, changeNameRequest } from "./api";
import { DOM_ELEMENTS, PROPERTIES, EMAIL, TOKEN, NICKNAME, MESSAGE } from "./constants";
import { hideSendButton, renderMessage } from "./ui";
import { validateEmail, validateName } from "./validation";

const { FORM_AUTH } = DOM_ELEMENTS.AUTHORIZATION;
const { FORM_VERIF, MODAL_VERIF, ERROR_VERIF } = DOM_ELEMENTS.VERIFICATION;
const { FORM_SETTINGS, COMPLETE_SETTINGS, ERROR_SETTINGS } = DOM_ELEMENTS.SETTINGS;
const { APP, FORM_MESSAGE } = DOM_ELEMENTS.CHAT;

export function handleFormMessage(event) {
	event.preventDefault();
	const inputValue = new FormData(FORM_MESSAGE).get(MESSAGE);
	renderMessage("waldymarxthf", inputValue, "12:00");
	FORM_MESSAGE.reset();
	hideSendButton();
}

export async function handleFormAuth(event) {
	event.preventDefault();
	const inputValue = new FormData(FORM_AUTH).get(EMAIL);
	if (validateEmail(inputValue)) {
		await getMailRequest(inputValue);
	}
}

export async function handleFormVerif(event) {
	event.preventDefault();
	const inputValue = new FormData(FORM_VERIF).get(TOKEN);
	const isSuccess = await getUserDataRequest(inputValue);

	if (isSuccess) {
		Cookies.set(TOKEN, inputValue, { expires: 7 });
		Cookies.set(NICKNAME, isSuccess.name);
		APP.classList.remove(PROPERTIES.HIDDEN);
		MODAL_VERIF.close();
	} else {
		ERROR_VERIF.classList.remove(PROPERTIES.HIDDEN);
	}
}

export async function handleFormSettings(event) {
	event.preventDefault();
	const inputValue = new FormData(FORM_SETTINGS).get(NICKNAME);
	if (!validateName(inputValue)) {
		COMPLETE_SETTINGS.classList.add(PROPERTIES.HIDDEN);
		ERROR_SETTINGS.classList.remove(PROPERTIES.HIDDEN);
	}
	Cookies.set(NICKNAME, inputValue);
	const isSuccess = await changeNameRequest(inputValue);
	if (isSuccess) {
		ERROR_SETTINGS.classList.add(PROPERTIES.HIDDEN);
		COMPLETE_SETTINGS.classList.remove(PROPERTIES.HIDDEN);
	}
}
