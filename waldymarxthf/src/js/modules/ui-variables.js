export const SELECTORS = {
	CHAT: {
		WINDOW_SELECTOR: ".wrapper",
		TEMPLATE_SELECTOR: "#message-template",
		MESSAGE_SELECTOR: ".chat-window__message",
		TEXT_SELECTOR: ".chat-window__message-text",
		TIME_SELECTOR: ".chat-window__message-time",
		CONTENT_SELECTOR: ".chat-window__message-content",
		AVATAR_SELECTOR: ".chat-window__message-avatar-img",
		NICKNAME_SELECTOR: ".chat-window__message-nickname",
	},
};

export const DOM_ELEMENTS = {
	CHAT: {
		WINDOW: document.querySelector(SELECTORS.CHAT.WINDOW_SELECTOR),
		TEMPLATE: document.querySelector(SELECTORS.CHAT.TEMPLATE_SELECTOR),
	},
	AUTHORIZATION: {
		MODAL_AUTH: document.querySelector(".authorization"),
		FORM_AUTH: document.querySelector(".authorization-form"),
		ERROR_AUTH: document.querySelector(".authorization-error"),
		COMPLETE_AUTH: document.querySelector(".authorization-complete"),
		GET_BUTTON: document.querySelector(".authorization-get"),
		ENTER_BUTTON: document.querySelector(".authorization-enter"),
	},
	VERIFICATION: {
		MODAL_VERIF: document.querySelector(".verification"),
		FORM_VERIF: document.querySelector(".verification-form"),
		ERROR_VERIF: document.querySelector(".verification-error"),
		LOGIN_BUTTON: document.querySelector(".verification-login"),
		BACK_BUTTON: document.querySelector(".verification-back"),
	},
	FORM: document.querySelector(".chat-message__form"),
};

export const PROPERTIES = {
	HIDDEN: "hidden",
	LEFT_SIDE: "left",
	RIGHT_SIDE: "right",
};
