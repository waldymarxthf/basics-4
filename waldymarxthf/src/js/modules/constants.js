import Cookies from "js-cookie";

export const TOKEN = "token";
export const NICKNAME = "nickname";
export const MESSAGE = "message";
export const EMAIL = "email";

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
		CHAT_WINDOW: document.querySelector(".chat-window"),
		SETTINGS_BUTTON: document.querySelector(".chat-header__btn-setting"),
		QUIT_BUTTON: document.querySelector(".chat-header__btn-exit"),
		FORM_MESSAGE: document.querySelector(".chat-message__form"),
		INPUT_MESSAGE: document.querySelector(".chat-message__input"),
		SEND_BUTTON: document.querySelector(".chat-message__btn"),
		APP: document.querySelector(".chat"),
		ANCHOR: document.querySelector(".anchor"),
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
	SETTINGS: {
		MODAL_SETTINGS: document.querySelector(".settings"),
		FORM_SETTINGS: document.querySelector(".settings-form"),
		INPUT_SETTINGS: document.querySelector(".settings-input"),
		COMPLETE_SETTINGS: document.querySelector(".settings-complete"),
		ERROR_SETTINGS: document.querySelector(".settings-error"),
	},
};

export const PROPERTIES = {
	HIDDEN: "hidden",
	LEFT_SIDE: "left",
	RIGHT_SIDE: "right",
};

export const REQUEST_HEADER = {
	DEFAULT_HEADER: {
		"Content-Type": "application/json; charset=utf-8",
	},
	AUTHORIZATION_HEADER: {
		"Content-Type": "application/json; charset=utf-8",
		Authorization: `Bearer ${Cookies.get(TOKEN)}`,
	},
};

export const REQUEST_METOD = {
	POST: "POST",
	PATCH: "PATCH",
	GET: "GET",
};
