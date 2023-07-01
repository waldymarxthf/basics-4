import { DOM_ELEMENTS, PROPERTIES } from "./constants";

const { ANCHOR, WINDOW } = DOM_ELEMENTS.CHAT;

let lastScrollTop = 0;

export function handleScrollVisibility() {
	if (
		this.scrollTop < lastScrollTop &&
		this.scrollHeight - this.scrollTop - this.clientHeight >= 200
	) {
		ANCHOR.classList.remove(PROPERTIES.HIDDEN);
	} else {
		ANCHOR.classList.add(PROPERTIES.HIDDEN);
	}

	lastScrollTop = this.scrollTop;
}

export function scrollToEnd() {
	WINDOW.scrollIntoView({ behavior: "smooth", block: "end" });
}
