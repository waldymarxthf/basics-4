const phoneBook = {
    list: {
      "Анастасия Резникова": 74155434543,
      "Петр Голованин": 74876543213,
      "Сергей Усс": 7487894363,
      "Илья Прокофьев": 74876576217,
      "Denis Smirnov": 74876343213
    },
    log() {
          console.log(this.list)
    }
  };
  
  phoneBook.log();

phoneBook.list = {"Илья Прокофьев": 74876576217, "Denis Smirnov": 74876343213}
delete phoneBook.list;
phoneBook["new List"] = {"Анастасия Резникова": 74155434543, "Петр Голованин": 74876543213, "Сергей Усс": 7487894363};
phoneBook.log = function log() {
console.log(this["new List"])  
}

console.log(phoneBook)
phoneBook.log();
