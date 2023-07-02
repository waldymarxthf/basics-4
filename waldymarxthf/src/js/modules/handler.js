import Cookies from "js-cookie";
import { getMailRequest, getUserDataRequest, changeNameRequest } from "./api";
import { DOM_ELEMENTS, EMAIL, TOKEN, NICKNAME, MESSAGE } from "./constants";
import { renderMessage, hideSendButton } from "./ui";
import { showError, hideError, showSuccess, hideSuccess, showElement, getFormData } from "./utils";
import { validateEmail, validateName, validateToken } from "./validation";

const { FORM_AUTH, ERROR_AUTH, COMPLETE_AUTH } = DOM_ELEMENTS.AUTHORIZATION;
const { FORM_VERIF, MODAL_VERIF, ERROR_VERIF } = DOM_ELEMENTS.VERIFICATION;
const { FORM_SETTINGS, COMPLETE_SETTINGS, ERROR_SETTINGS } = DOM_ELEMENTS.SETTINGS;
const { APP, FORM_MESSAGE } = DOM_ELEMENTS.CHAT;

export function handleFormMessage(event) {
	event.preventDefault();
	const inputValue = getFormData(FORM_MESSAGE, MESSAGE);
	renderMessage("waldymarxthf", inputValue, "12:00");
	FORM_MESSAGE.reset();
	hideSendButton();
}

export async function handleFormAuth(event) {
	try {
		event.preventDefault();
		const inputValue = getFormData(FORM_AUTH, EMAIL);

		if (validateEmail(inputValue)) {
			hideError(ERROR_AUTH);
			await getMailRequest(inputValue);
			showSuccess(COMPLETE_AUTH);
			FORM_AUTH.reset();
		} else {
			showError(ERROR_AUTH);
			hideSuccess(COMPLETE_AUTH);
		}
	} catch (error) {
		console.error(error.message);
		showError(ERROR_AUTH);
	}
}

export async function handleFormVerif(event) {
	try {
		event.preventDefault();
		const inputValue = getFormData(FORM_VERIF, TOKEN);

		if (validateToken(inputValue)) {
			showError(ERROR_VERIF);
			FORM_VERIF.reset();
			return;
		}
		const isSuccess = await getUserDataRequest(inputValue);

		if (isSuccess) {
			Cookies.set(TOKEN, inputValue, { expires: 7 });
			Cookies.set(NICKNAME, isSuccess.name);
			showElement(APP);
			hideError(ERROR_VERIF);
			MODAL_VERIF.close();
		} else {
			showError(ERROR_VERIF);
		}
		FORM_VERIF.reset();
	} catch (error) {
		console.error(error.message);
		showError(ERROR_VERIF);
	}
}

export async function handleFormSettings(event) {
	try {
		event.preventDefault();
		const inputValue = getFormData(FORM_SETTINGS, NICKNAME);

		if (!validateName(inputValue)) {
			hideSuccess(COMPLETE_SETTINGS);
			showError(ERROR_SETTINGS);
			return;
		}
		const isSuccess = await changeNameRequest(inputValue);

		if (isSuccess) {
			Cookies.set(NICKNAME, inputValue);
			hideError(ERROR_SETTINGS);
			showSuccess(COMPLETE_SETTINGS);
		}
	} catch (error) {
		console.error(error.message);
		showError(ERROR_SETTINGS);
	}
}
