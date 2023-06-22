class Storage {
  static types = {
    'localStorage': localStorage,
    'sessionStorage': sessionStorage
  };
  constructor(key, storage = Storage.types.localStorage, val = null) {
    this.key = key;
    this.storage = storage;
    this.val = val;
    this.storage.setItem(this.key, this.val);
  };
  get() {
    return JSON.parse(this.storage.getItem(this.key));
  };
  set(val) {
    this.storage.setItem(this.key, val);
  };
  clear() {
    this.storage.removeItem(this.key);
  };
  isEmpty() {
    return !this.storage.getItem(this.key);
  };
};

const names = new Storage('names', Storage.types.localStorage, '11111');
console.log(names.get());
names.set('228') // устанавливает значение для ключа names в localStorage;
console.log(names.get() )// возвращает значение для ключа names в localStorage;
names.clear() // очищает значение для ключа names в localStorage;
console.log(names.get() ) // возвращает значение для ключа names в localStorage;
console.log(names.isEmpty()) // вернет true если ключ names в localStorage имеет пустое значение (null || undefind);