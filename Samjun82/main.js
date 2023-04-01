const phoneBook = {
    list: {
      "Анастасия Резникова": 74155434543,
      "Петр Голованин": 74876543213,
      "Сергей Усс": 7487894363,
      "Илья Прокофьев": 74876576217,
    },
    add(name, number) {
          this.list[name] = number;          
    },
    delete(name) {
      delete this.list[name]
    },
    log() {
      console.log(this.list)
    },
    getContact() {
      for(const name in this.list) {
        console.log(name + ' - ' + this.list[name])
       
      }
    }
  };
  
  phoneBook.getContact()
 
  phoneBook.add("Joana Frost", 89994456633)
  console.log(phoneBook.list['Joana Frost'])
  phoneBook.delete("Сергей Усс")
  console.log("Сергей Усс" in phoneBook.list);


phoneBook.add("Анастасия Резникова", 84435556436)
phoneBook.getContact()
