/* eslint-disable no-undef */
class Storage {
	constructor(key, value = null, storage = "localStorage") {
		this.key = key;
		this.value = value;
		this.storage = storage === "session" ? sessionStorage : localStorage;
		this.storage.setItem(key, value);
	}

	get() {
		return JSON.parse(this.storage.getItem(this.key));
	}

	set(value) {
		return this.storage.setItem(this.key, JSON.stringify(value));
	}

	clear() {
		return this.storage.clear();
	}

	isEmpty() {
		return !this.get();
	}
}

const names = new Storage("strada", "iliya");
console.log(names);
