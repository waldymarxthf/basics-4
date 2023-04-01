const phoneBook = {
  list: {
    Rostik: 7978834345,
    Artyr_Samoilov: 797845347,
    Mather: 79788358563,
    Marina: 7978456545,
  },
  add(name, number) {
    this.list[name] = number;
  },
  delete(name) {
    delete this.list[name];
  },
  allData() {
    for (const name in this.list) {
      console.log(`${name} - ${this.list[name]}`);
    }
  },
};
const all = phoneBook.allData();
console.log(all);
