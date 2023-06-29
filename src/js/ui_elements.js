const tmpl = document.querySelector("#myMessage");
const UI_ELEMNTS = {
	SCREEN: document.querySelector(".mainScreen"),
	INPUT: document.querySelector(".chat-form-input"),
	FORM: document.querySelector(".chat-form"),
};
const M_TEMPLATE = {
	CONTAINER: tmpl.content.querySelector(".scroll"),
	SENDER: tmpl.content.querySelector(".message-sender"),
	TEXT: tmpl.content.querySelector(".message-text"),
	TIME: tmpl.content.querySelector(".message-time"),
};
export { UI_ELEMNTS, tmpl, M_TEMPLATE };
