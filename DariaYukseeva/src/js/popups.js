class Element {
	constructor({ className, id, attribute, attValue, content }) {
		this.className = className;
		this.id = id;
		this.attribute = attribute;
		this.attValue = attValue;
		this.content = content;
	}

	create() {
		const block = document.createElement(this.tag);
		if (this.className) {
			block.classList.add(this.className);
		}
		if (this.id) {
			block.setAttribute("id", this.id);
		}
		if (this.attribute) {
			block.setAttribute(this.attribute, this.attValue);
		}
		return block;
	}
}

class Div extends Element {
	constructor({ className, id, attribute, attValue, content }) {
		super({ className, id, attribute, attValue, content });
		this.tag = "div";
	}
}

class Span extends Element {
	constructor({ className, id, attribute, attValue, content }) {
		super({ className, id, attribute, attValue, content });
		this.tag = "span";
	}

	create() {
		const span = super.create();
		span.append(this.content);
		return span;
	}
}

class Paragraph extends Element {
	constructor({ className, id, attribute, attValue, content }) {
		super({ className, id, attribute, attValue, content });
		this.tag = "p";
	}
}

class Image extends Element {
	constructor({ className, id, attribute, attValue, content }) {
		super({ className, id, attribute, attValue, content });
		this.tag = "img";
	}
}

class Form extends Element {
	constructor({ className, id, attribute, attValue, content }) {
		super({ className, id, attribute, attValue, content });
		this.tag = "form";
	}
}

class Button extends Element {
	constructor({ className, id, attribute, attValue, content }) {
		super({ className, id, attribute, attValue, content });
		this.tag = "button";
	}
}

class Input extends Element {
	constructor({ className, id, attribute, attValue, content }) {
		super({ className, id, attribute, attValue, content });
		this.tag = "input";
	}
}

class Label extends Element {
	constructor({ className, id, attribute, attValue, content }) {
		super({ className, id, attribute, attValue, content });
		this.tag = "label";
	}
}

export const popupSettings = [
	new Div({
		className: "popup-content",
		content: [
			new Div({
				className: "popup-header",
				content: [
					new Paragraph({
						className: "head",
						content: "Настройки",
					}),
					new Button({
						className: "popup-close-btn",
					}),
				],
			}),

			new Form({
				className: "popup-form",
				content: [
					new Div({
						content: "Имя в чате:",
					}),
					new Input({
						className: "nickname-input",
						attribute: "type",
						attValue: "text",
					}),
					new Button({
						className: "popup-nickname-btn",
						attribute: "type",
						attValue: "submit",
					}),
				],
			}),
			new Label({
				content: [
					new Span({
						content: "Тёмная тема",
					}),
					new Input({
						className: "theme-btn",
						id: "theme-btn",
						attribute: "type",
						attValue: "checkbox",
					}),
				],
			}),
		],
	}),
];

export function render(domTree, root) {
	for (let i = 0; i < domTree.length; i += 1) {
		if (!domTree[i].content) {
			root.append(domTree[i].create());
			continue;
		}
		const node = root.appendChild(domTree[i].create());
		if (!Array.isArray(domTree[i].content)) {
			node.textContent = domTree[i].content;
			continue;
		}
		render(domTree[i].content, node);
	}
}
