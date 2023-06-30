export function getElement(selector) {
	return document.querySelector(selector);
}

export function appendElement(parent, child) {
	parent.append(child);
}

export function setElementValue(element, value) {
	element.value = value;
}

export function setScrollTop(element, scrollTop) {
	element.scrollTop = scrollTop;
}
