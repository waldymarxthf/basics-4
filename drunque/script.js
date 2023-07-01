class Storage {
  constructor(key, { storage, defaultValue }) {
    this.key = key
    this.storage = storage
    
    if (defaultValue) this.set(defaultValue)
  }

  get() {
    return JSON.parse(this.storage.getItem(this.key))
  }

  set(value) {
    this.storage.setItem(this.key, JSON.stringify(value))
  }

  clear() {
    this.storage.removeItem(this.key)
  }

  isEmpty() {
    return this.storage.getItem(this.key) === null ||
      this.storage.getItem(this.key) === undefined
  }
}

const names = new Storage("names", { storage: sessionStorage, defaultValue: ["Cate", "Arya", "Tombry"]})

console.log(names.get(), names.isEmpty())