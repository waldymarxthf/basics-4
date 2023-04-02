const phoneBook = {
  list: {
    Alex: 89277345432,
    "Diman Kozlov": 89264537891,
    Katuxa: 89273456213,
    "Lena Golovach": 89264537891,
    "Serg Gorelov": 89271345671,
  },

  add(number, name) {
    this.list[name] = number;
  },
  delete(name, number) {
    delete this.list[name];
  },
};
phoneBook.add(89178512597, "Sanek Xrenov");
phoneBook.delete("Katuxa");

for (const name in phoneBook.list) {
  console.log(name + "-" + phoneBook.list[name]);
}


