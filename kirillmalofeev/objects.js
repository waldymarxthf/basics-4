const telegramBook = {
  Лерочка: 89811977481,
  Мама: 89218894595,
  "Slava Rostovtcev": 89213221185,
  "Ромарио ипполит": 89137664368,
};
console.log(telegramBook["Ромарио ипполит"]);
console.log(telegramBook.Лерочка);
telegramBook["Aspirine Ильич"] = 89213584466;
telegramBook["Мама"] = 8211111111;
delete telegramBook["Slava Rostovtcev"];
console.log(telegramBook["Aspirine Ильич"]);
console.log(telegramBook.Мама);
