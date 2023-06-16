class Storage {
  constructor(name, method) {
    this.name = name;
    this.method = method ?? localStorage;
  }
  set(value) {
    this.method.setItem(this.name, value);
  }
  get() {
    this.method.getItem(this.name);
  }
  clear() {
    // this.method.removeItem(this.name);
  }
  isEmpty() {}
}

// localStorage.setItem('test', 1);
const names = new Storage('test1231');
names.set('123');
names.get();
// names.clear();
