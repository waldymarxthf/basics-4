import { UI_ELEMNTS, tmplCmp } from "./ui_elements";

class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError";
	}
}

// function CreateMessage(text) {
// 	if (text === "") {
// 		throw new ValidationError("Please, enter some words");
// 	}
// 	this.text = text;
// }

function render(text) {
	const tmplMy = document.querySelector(".myMessage");

	UI_ELEMNTS.TEXT_FIELD.textContent = text;
	UI_ELEMNTS.TIME.textContent = "20:00";
	const message = tmplMy.content.cloneNode(true);
	UI_ELEMNTS.SCREEN.append(message);
}

UI_ELEMNTS.FORM.addEventListener("submit", (event) => {
	event.preventDefault();
	try {
		//	const message = new CreateMessage(UI_ELEMNTS.INPUT.value);
		render(UI_ELEMNTS.INPUT.value);
	} catch (err) {
		if (err instanceof ValidationError) {
			console.log(`Error: ${err.message}`);
		} else {
			throw err;
		}
	}
});
