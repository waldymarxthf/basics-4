const phoneBook = {
  list: {
    Oleg: 79531111111,
    Sergey: 79532222222,
    Stasik: 79533333333,
    'My number': 79534444444,
  },
  add(firstName, phoneNumber) {
    this.list[firstName] = phoneNumber;
  },
  remove(firstName) {
    delete this.list[firstName];
  },
  show() {
    for (const item in this.list) {
      console.log(`${item} - ${this.list[item]}`);
    }
  },
};

phoneBook.add('FBI', 911);
phoneBook.remove('My number');
phoneBook.show();
