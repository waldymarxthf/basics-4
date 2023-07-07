import Cookies from "js-cookie";
import { setTheme, popupAuthorization } from "./popups";
import { variables, apiVariables } from "./ui_variables";
import { showMessageHistory } from "./ui";
import { render } from "./DOM_render";
import { connectWs } from "./websocket";

function init() {
	setTheme();
	const token = Cookies.get(apiVariables.tokenCookieName);
	if (!token) {
		render(popupAuthorization, variables.popupWindow);
		const authorizationMessageNode = document.querySelector(".authorization-message");
		authorizationMessageNode.textContent = `Необходимо авторизоваться`;
		authorizationMessageNode.classList.add("authorization-message-visible-wrong");
		variables.popup.style.display = "flex";
	}
	if (token) {
		connectWs(token);
		showMessageHistory();
		variables.messagesField.scrollTop += 1e9;
	}
}

init();
