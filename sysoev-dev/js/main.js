class Storage {
  constructor(name, method) {
    this.name = name;
    this.method = method ?? localStorage;
  }
  set(value) {
    this.method.setItem(this.name, value);
  }
  get() {
    return this.method.getItem(this.name);
  }
  clear() {
    this.method.setItem(this.name, '');
  }
  isEmpty() {
    const value = this.get();
    if (value === 'null' || value === 'undefined') {
      return true;
    }
    return false;
  }
}

const names = new Storage('test1231');
names.set('undefined');
names.get();
console.log(names.isEmpty());
