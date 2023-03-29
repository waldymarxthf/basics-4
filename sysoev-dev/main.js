const phoneBook = {
  Oleg: 79531111111,
  Sergey: 79532222222,
  Stasik: 79533333333,
  'My number': 79534444444,
};

console.log(phoneBook.Oleg);
phoneBook.jobs = 79215555555;
console.log(phoneBook);
console.log(phoneBook['My number']);
delete phoneBook.Oleg;
console.log(phoneBook);
