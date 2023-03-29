const phoneBook = {
  Rostik: 7978834345,
  Artyr_Samoilov: 797845347,
  Mather: 79788358563,
  Marina: 7978456545,
};
phoneBook["Sacha"] = 797879788;
delete phoneBook["Marina"];

phoneBook.Rostik = 22222222;
console.log(phoneBook.Artyr_Samoilov);
console.log(phoneBook["Mather"]);
console.log(phoneBook);
