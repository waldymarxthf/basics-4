import Cookies from "js-cookie";
import { variables, apiVariables } from "./ui_variables";
import { getTime, isEmpty } from "./utiles";
import { getMessagesFetch } from "./api_requests";

export function creatMessageNode({ createdAt, text, updatedAt, userEmail, userNickname }) {
	let messageTemplate = null;
	const myEmail = Cookies.get(apiVariables.email);
	if (userEmail === myEmail) {
		messageTemplate = variables.templateMyMessage.content.cloneNode(true);
		messageTemplate.querySelector(".text").textContent = text;
		messageTemplate.querySelector(".time").textContent = getTime(createdAt);
	} else {
		messageTemplate = variables.templateOutsideMessage.content.cloneNode(true);
		messageTemplate.querySelector(".nickname").textContent = userNickname;
		messageTemplate.querySelector(".text").textContent = text;
		messageTemplate.querySelector(".time").textContent = getTime(createdAt);
	}
	return messageTemplate;
}

export function renderMessages(node) {
	variables.messagesField.append(...node);
}

export function getProcessedMessageHistory(data) {
	const { messages } = data;
	const messagesArray = [];
	messages.forEach((el) => {
		const {
			createdAt,
			text,
			updatedAt,
			user: { email, name },
		} = el;
		const processedData = {
			createdAt,
			text,
			updatedAt,
			userEmail: email,
			userNickname: name,
		};
		const messageNode = creatMessageNode(processedData);
		messagesArray.push(messageNode);
	});
	return messagesArray.reverse();
}

export async function showMessageHistory() {
	const data = await getMessagesFetch();
	const messagesArray = getProcessedMessageHistory(data);
	renderMessages(messagesArray);
	variables.messagesField.scrollTop += 1e9;
}
