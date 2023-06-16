class Storage {
	constructor(key, storage, defaultValue) {
		this.key = key;
		this.storage = storage;
		this.defaultValue = defaultValue;
	}

	get() {
		return JSON.parse(this.storage.getItem(this.key));
	}

	set(value = this.defaultValue) {
		this.storage.setItem(this.key, JSON.stringify(value));
	}

	clear() {
		this.storage.removeItem(this.key);
	}

	isEmpty() {
		return !this.get();
	}
}

const cities = new Storage("city", localStorage, "Moscow");
cities.set("Ekaterinburg");
const favCity = cities.get();
cities.clear();
const isEmptyCityStorage = cities.isEmpty();
const user = new Storage("user", sessionStorage);
user.set("Daria");
user.clear();
console.log(isEmptyCityStorage);
console.log(user.isEmpty());
