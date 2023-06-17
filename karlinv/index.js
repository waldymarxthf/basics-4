class Storage {
  constructor(name, type = "local", defaultValue = null) {
    this.name = name;
    this.storage = type === "session" ? sessionStorage : localStorage;
    this.defaultValue = defaultValue;
  }

  get() {
    const value = this.storage.getItem(this.name);
    return value !== null ? JSON.parse(value) : this.defaultValue;
  }

  set(value) {
    this.storage.setItem(this.name, JSON.stringify(value));
  }

  clear() {
    this.storage.removeItem(this.name);
  }

  isEmpty() {
    const value = this.get();
    return value === null || value === undefined;
  }
}

const name = new Storage("letters", "session", ["a", "b", "c"]);
