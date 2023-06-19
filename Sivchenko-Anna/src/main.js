const STORAGE_TYPE = {
	LOCAL: localStorage,
	SESSION: sessionStorage,
};

class Storage {
	constructor(key, value, storage = STORAGE_TYPE.LOCAL) {
		this.key = key;
		this.value = value;
		this.storage = storage;
	}

	set(value) {
		this.storage.setItem(this.key, value);
	}

	get() {
		return this.storage.getItem(this.key);
	}

	clear() {
		this.storage.removeItem(this.key);
	}

	isEmpty() {
		const item = this.storage.getItem(this.key);
		return item === null || item === undefined;
	}
}

const names = new Storage("names");
const professions = new Storage("professions", "architect", STORAGE_TYPE.SESSION);

names.set("Ilya");
console.log(names.get());
console.log(names.isEmpty());
names.clear();
console.log(names.isEmpty());

console.log(professions.get());
professions.set("designer");
console.log(professions.isEmpty());
