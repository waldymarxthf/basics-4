// eslint-disable-next-line import/no-extraneous-dependencies
import {
	M_TEMPLATE,
	UI_ELEMNTS,
	tmpl,
	POPUP_SETTINGS,
	POPUP_LOGIN,
	POPUP_CONFIRM,
} from "./ui_elements";
import { clearInput, getTime, validEmpty, ValidationError, setCookie } from "./utils";
import { getCode, getUserInfo, changeName, getHistory } from "./fetch";

UI_ELEMNTS.MAIN_SETTINGS_BTN.addEventListener("click", () => {
	POPUP_SETTINGS.SETTINGS_MENU.showModal();
});

POPUP_SETTINGS.SETTINGS_MENU.addEventListener("click", (event) => {
	if (event.target === POPUP_SETTINGS.SETTINGS_MENU) {
		POPUP_SETTINGS.SETTINGS_MENU.close();
	}
});

POPUP_LOGIN.LOGIN_BTN_SET.addEventListener("click", () => {
	POPUP_CONFIRM.POPUP_CONFIRM_MENU.showModal();
});

POPUP_CONFIRM.POPUP_CONFIRM_MENU.addEventListener("click", (event) => {
	if (event.target === POPUP_CONFIRM.POPUP_CONFIRM_MENU) {
		POPUP_CONFIRM.POPUP_CONFIRM_MENU.close();
	}
});

function render(message) {
	UI_ELEMNTS.SCREEN.append(message);
}

function createMessage(text) {
	if (!localStorage.getItem("lastName")) {
		localStorage.setItem("lastName", "I:");
	}
	M_TEMPLATE.SENDER.textContent = `${localStorage.getItem("lastName")}:`;
	M_TEMPLATE.TIME.textContent = getTime();
	if (validEmpty(text)) {
		// eslint-disable-next-line no-alert, no-undef
		alert("Please, enter some words)");
		return;
	}
	clearInput();
	M_TEMPLATE.TEXT.textContent = text;
	const message = tmpl.content.cloneNode(true);
	const targetElement = message.querySelector(".message-box");
	targetElement.classList.add("message-box-I");
	render(message);
	targetElement.scrollIntoView(false);
}

UI_ELEMNTS.FORM.addEventListener("submit", (event) => {
	event.preventDefault();
	try {
		createMessage(UI_ELEMNTS.INPUT.value);
	} catch (err) {
		if (err instanceof ValidationError) {
			console.log(`Error: ${err.message}`);
		} else {
			throw err;
		}
	}
});

POPUP_LOGIN.LOGIN_BTN_GET.addEventListener("click", (event) => {
	event.preventDefault();
	if (POPUP_LOGIN.LOGIN_INPUT.value === "") {
		// eslint-disable-next-line no-alert, no-undef
		alert("Please enter your email)");
	}
	getCode();
	POPUP_LOGIN.LOGIN_INPUT.value = "";
});

POPUP_CONFIRM.CONFIRM_FORM.addEventListener("submit", (event) => {
	event.preventDefault();
	if (POPUP_CONFIRM.CONFIRM_INPUT.value !== "") {
		UI_ELEMNTS.POPUP_MAIN_MENU.showModal();
		POPUP_CONFIRM.POPUP_CONFIRM_MENU.close();
		getUserInfo();
		setCookie();
	} else {
		// eslint-disable-next-line no-alert, no-undef
		alert("Enter your code)");
	}
});

POPUP_SETTINGS.SETTINGS_FORM.addEventListener("submit", (event) => {
	event.preventDefault();
	try {
		changeName();
		getUserInfo();
	} catch (err) {
		if (err instanceof ValidationError) {
			console.log(`Error: ${err.message}`);
		} else {
			throw err;
		}
	}
});

window.addEventListener("DOMContentLoaded", () => {
	try {
		let lastName = localStorage.getItem("lastName");
		if (!lastName) {
			lastName = "I: ";
			localStorage.setItem("lastName", lastName);
		}
	} catch (err) {
		if (err instanceof ValidationError) {
			// eslint-disable-next-line no-alert, no-undef
			alert(`Некорректные данные: ${err.message}`);
		} else if (err instanceof SyntaxError) {
			// eslint-disable-next-line no-alert, no-undef
			alert(`JSON Ошибка Синтаксиса: ${err.message}`);
		} else {
			throw err; // неизвестная ошибка, пробросить исключение (**)
		}
	}
});

window.addEventListener("DOMContentLoaded", async () => {
	const history = await getHistory();
	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < 300; i++) {
		createMessage(history.messages[i].text);
	}
});
