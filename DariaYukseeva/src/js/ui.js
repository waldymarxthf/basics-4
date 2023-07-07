import Cookies from "js-cookie";
import { apiVariables, variables } from "./ui_variables";
import { getTime, isEmpty } from "./utiles";
import { popupSettings, popupAuthorization, theme } from "./popups";
import { render } from "./DOM_render";
import { sendMessageByWs } from "./websocket";

// export function creatMessageNode({ createdAt, text, updatedAt, userEmail, userNickname }) {
// 	let messageTemplate = null;
// 	const myEmail = Cookies.get(apiVariables.email);
// 	if (userEmail === myEmail) {
// 		messageTemplate = variables.templateMyMessage.content.cloneNode(true);
// 		messageTemplate.querySelector(".text").textContent = text;
// 		messageTemplate.querySelector(".time").textContent = getTime(createdAt);
// 	} else {
// 		messageTemplate = variables.templateOutsideMessage.content.cloneNode(true);
// 		messageTemplate.querySelector(".nickname").textContent = userNickname;
// 		messageTemplate.querySelector(".text").textContent = text;
// 		messageTemplate.querySelector(".time").textContent = getTime(createdAt);
// 	}
// 	return messageTemplate;
// }

// export function renderMessages(node) {
// 	variables.messagesField.append(...node);
// }

// function getProcessedMessageHistory(data) {
// 	const { messages } = data;
// 	const messagesArray = [];
// 	messages.forEach((el) => {
// 		const {
// 			createdAt,
// 			text,
// 			updatedAt,
// 			user: { email, name },
// 		} = el;
// 		const processedData = {
// 			createdAt,
// 			text,
// 			updatedAt,
// 			userEmail: email,
// 			userNickname: name,
// 		};
// 		const messageNode = creatMessageNode(processedData);
// 		messagesArray.push(messageNode);
// 	});
// 	return messagesArray.reverse();
// }

// export async function showMessageHistory() {
// 	const data = await getMessagesFetch();
// 	const messagesArray = getProcessedMessageHistory(data);
// 	renderMessages(messagesArray);
// 	variables.messagesField.scrollTop += 1e9;
// }

const settingsBtnHandler = () => {
	render(popupSettings, variables.popupWindow);
	const themeBtn = document.querySelector("#theme-btn");
	const inputNickname = document.querySelector(".nickname-input");
	if (theme === "dark") {
		themeBtn.checked = true;
	}
	const nickname = Cookies.get(apiVariables.nickname);
	if (nickname) {
		const nicknameInput = document.querySelector(".nickname-input");
		nicknameInput.value = nickname;
	}
	variables.popup.style.display = "flex";
	inputNickname.focus();
};

const btnSendingMessageHandler = (e) => {
	e.preventDefault();
	const messageText = variables.inputForMessage.value;
	variables.formForMessage.reset();
	if (isEmpty(messageText)) return;
	sendMessageByWs(messageText);
	variables.messagesField.scrollTop += 1e9;
};

const logoutBtnHandler = () => {
	render(popupAuthorization, variables.popupWindow);
	const authorizationMessageNode = document.querySelector(".authorization-message");
	const token = Cookies.get(apiVariables.tokenCookieName);
	if (!token) {
		authorizationMessageNode.textContent = `Необходимо авторизоваться`;
		authorizationMessageNode.classList.add("authorization-message-visible-wrong");
	}
	const inputEmail = document.querySelector(".email-input");
	variables.popup.style.display = "flex";
	inputEmail.focus();
};

variables.settingsBtn.addEventListener("click", settingsBtnHandler);

variables.btnSendMessage.addEventListener("click", btnSendingMessageHandler);

variables.exitEnterBtn.addEventListener("click", logoutBtnHandler);
