import Cookies from "js-cookie";
import { setTheme, popupAuthorization, popupSettings } from "./popups";
import { variables, apiVariables } from "./ui_variables";
import { showMessageHistory } from "./ui";
import { render } from "./DOM_render";
import { connectWs } from "./websocket";

function init() {
	setTheme();
	const token = Cookies.get(apiVariables.tokenCookieName);
	const nickname = Cookies.get(apiVariables.nickname);
	if (!token) {
		render(popupAuthorization, variables.popupWindow);
		const authorizationMessageNode = document.querySelector(".authorization-message");
		authorizationMessageNode.textContent = `Необходимо авторизоваться`;
		authorizationMessageNode.classList.add("authorization-message-visible-wrong");
		variables.popup.style.display = "flex";
	}
	// if (!nickname) {
	// 	render(popupSettings, variables.popupWindow);
	// 	const inputNickname = document.querySelector(".nickname-input");
	// 	const messageNode = document.querySelector(".authorization-message");
	// 	messageNode.textContent = `Необходимо ввести имя`;
	// 	messageNode.classList.add("authorization-message-visible-wrong");
	// 	variables.popup.style.display = "flex";
	// 	inputNickname.focus();
	// }
	if (token) {
		connectWs(token);
		showMessageHistory();
		variables.messagesField.scrollTop += 1e9;
	}
}

init();
