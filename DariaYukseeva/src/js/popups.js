import {
	render,
	Element,
	ElementWithEvent,
	Div,
	Span,
	Paragraph,
	Image,
	Form,
	Button,
	Input,
	Label,
} from "./DOM_render";
import { variables } from "./ui_variables";
import { saveToLocalStorage, loadFromLocalStorage } from "./utiles";

export let theme = loadFromLocalStorage("chatAppTheme") || "light";

const popupCloseBtnHandler = () => {
	variables.popup.style.display = "none";
	// const popupCloseBtn = document.querySelector(".popup-close-btn");
	// const themeBtn = document.querySelector("#theme-btn");
	// variables.popup.removeEventListener("click", popupAreaHandler);
	// popupCloseBtn.removeEventListener("click", popupCloseBtnHandler);
	// themeBtn.removeEventListener("click", themeBtnHandler);
	variables.popup.innerHTML = "";
};

const themeBtnHandler = (e) => {
	changeTheme(e.target);
	variables.popup.style.display = "none";
	variables.popup.innerHTML = "";
};

export const popupSettings = [
	new Div({
		className: "popup-content",
		content: [
			new Div({
				className: "popup-header",
				content: [
					new Paragraph({
						className: "head",
						content: "Настройки",
					}),
					new Button({
						className: "popup-close-btn",
						event: "click",
						callback: popupCloseBtnHandler,
					}),
				],
			}),

			new Form({
				className: "popup-form",
				content: [
					new Div({
						content: "Имя в чате:",
					}),
					new Input({
						className: "nickname-input",
						attribute: "type",
						attValue: "text",
					}),
					new Button({
						className: "popup-nickname-btn",
						attribute: "type",
						attValue: "submit",
					}),
				],
			}),
			new Label({
				content: [
					new Span({
						content: "Тёмная тема",
					}),
					new Input({
						className: "theme-btn",
						id: "theme-btn",
						attribute: "type",
						attValue: "checkbox",
						event: "click",
						callback: themeBtnHandler,
					}),
				],
			}),
		],
	}),
];

export function changeTheme() {
	theme = theme === "light" ? "dark" : "light";
	document.documentElement.setAttribute("data-theme", theme);
	saveToLocalStorage("chatAppTheme", theme);
}

export function setTheme() {
	document.documentElement.setAttribute("data-theme", theme);
}

const popupAreaHandler = (e) => {
	if (e.target === variables.popup) {
		variables.popup.style.display = "none";
		// const popupCloseBtn = document.querySelector(".popup-close-btn");
		// const themeBtn = document.querySelector("#theme-btn");
		// variables.popup.removeEventListener("click", popupAreaHandler);
		// popupCloseBtn.removeEventListener("click", popupCloseBtnHandler);
		// themeBtn.removeEventListener("click", themeBtnHandler);
		variables.popup.innerHTML = "";
	}
};

variables.popup.addEventListener("click", popupAreaHandler);
