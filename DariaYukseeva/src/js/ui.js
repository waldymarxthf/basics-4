import { variables } from "./ui_variables";
import { saveToLockalStorage, loadFromLocalStorage } from "./utiles";

let theme = loadFromLocalStorage("chatAppTheme") || "light";

export function changeTheme() {
	let lightTheme = "/index.a0c69cb6.css";
	let darkTheme = "/index.30d57794.css";
	let currentTheme = variables.styleLink.getAttribute("href");
	if (theme === "light") {
		theme = "dark";
		currentTheme = darkTheme;
	} else {
		theme = "light";
		currentTheme = lightTheme;
	}
	variables.styleLink.setAttribute("href", currentTheme);
	variables.popup.style.display = "none";
	saveToLockalStorage("chatAppTheme", theme);
}

export function setTheme() {
	if (theme === "light") {
		variables.styleLink.setAttribute("href", "/index.a0c69cb6.css");
	} else {
		variables.styleLink.setAttribute("href", "/index.30d57794.css");
	}
}

const popupAreaHandler = (e) => {
	if (e.target === variables.popup) {
		variables.popup.style.display = "none";
	}
};

const settingsBtnHandler = () => {
	variables.popup.style.display = "flex";
	variables.popup.addEventListener("click", popupAreaHandler);
};

variables.settingsBtn.addEventListener("click", settingsBtnHandler);

const popupCloseBtnHandler = () => {
	variables.popup.style.display = "none";
};

variables.popupCloseBtn.addEventListener("click", popupCloseBtnHandler);

const themeBtnHandler = (e) => {
	changeTheme(e.target);
};

variables.themeBtn.addEventListener("click", themeBtnHandler);
