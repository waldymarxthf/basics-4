import { DOM_ELEMENTS, PROPERTIES, SELECTORS } from "./constants";
import { isEmpty } from "./validation";

const { INPUT_MESSAGE, SEND_BUTTON, TEMPLATE, WINDOW } = DOM_ELEMENTS.CHAT;
const {
	MESSAGE_SELECTOR,
	TEXT_SELECTOR,
	TIME_SELECTOR,
	CONTENT_SELECTOR,
	AVATAR_SELECTOR,
	NICKNAME_SELECTOR,
} = SELECTORS.CHAT;

export function hideSendButton() {
	if (!isEmpty(INPUT_MESSAGE.value)) {
		SEND_BUTTON.classList.remove(PROPERTIES.HIDDEN);
	} else {
		SEND_BUTTON.classList.add(PROPERTIES.HIDDEN);
	}
}

export function renderMessage(nickname, text, avatar, time = "00:00") {
	const type = nickname === "waldymarxthf" ? PROPERTIES.RIGHT_SIDE : PROPERTIES.LEFT_SIDE;

	const item = TEMPLATE.content.cloneNode(true);
	const message = item.querySelector(MESSAGE_SELECTOR);

	message.classList.add(`message-${type}`);

	if (!isEmpty(text)) {
		message.querySelector(TEXT_SELECTOR).textContent = text;
		message.querySelector(TIME_SELECTOR).textContent = time;
		message.querySelector(CONTENT_SELECTOR).classList.add(`content-${type}`);

		if (type === PROPERTIES.LEFT_SIDE) {
			const avatarElem = message.querySelector(AVATAR_SELECTOR);
			const nicknameElem = message.querySelector(NICKNAME_SELECTOR);

			avatarElem.src = avatar;
			avatarElem.parentElement.classList.remove(PROPERTIES.HIDDEN);

			nicknameElem.textContent = nickname;
			nicknameElem.classList.remove(PROPERTIES.HIDDEN);
		}

		WINDOW.append(message);
	}

	WINDOW.scrollIntoView(false);
}
