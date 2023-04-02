const phoneBook = {
  Alex: 89277345432,
  "Diman Kozlov": 89264537891,
  Katuxa: 89173215671,
  "Lena Golovach": 89264537891,
  "Serg Gorelov": 89271345671,
  "Ilusha Makarov": 89874563289,
};

console.log(phoneBook);
console.log(phoneBook.Katuxa);
console.log(phoneBook["Ilusha Makarov"]);

phoneBook.Katuxa = 89273456213;
phoneBook["Ilusha Makarov"] = 89874563289;
delete phoneBook["Ilusha Makarov"];
console.log(phoneBook);
