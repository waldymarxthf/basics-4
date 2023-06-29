import { M_TEMPLATE, UI_ELEMNTS, tmpl } from "./ui_elements";
import { clearInput, getTime, validEmpty } from "./utils";

class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError";
	}
}

function render(message) {
	UI_ELEMNTS.SCREEN.append(message);
}

function createMessage(text) {
	M_TEMPLATE.SENDER.textContent = "I: ";
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
