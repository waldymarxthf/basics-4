const phoneBook = {
  list: {
    Oleg: 79531111111,
    Sergey: 79532222222,
    Stasik: 79533333333,
    'My number': 79534444444,
  },
  check(firstName) {
    return firstName in this.list;
  },
  add(firstName, phoneNumber) {
    if (this.check(firstName)) {
      console.log('This name already exists. The number will be changed');
    }
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
phoneBook.add('FBI', 911911);
phoneBook.remove('My number');
phoneBook.show();
