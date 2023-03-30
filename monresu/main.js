const pattern = /^\+\d+$/;
const phoneBook = {
	list: {
		Iliya: '+649738218',
		Falikul: '+364825197',
		Egorik: '+845136498',
	},
	log() {
		console.log(this.list)
	},
	add(name, number) {
    if (pattern.test(number)) {
      if (name in this.list || Object.values(phoneBook.list).includes(number)) {
        console.log('Этот человек есть уже в записной книге \n')
      } else {
        this.list[name] = number
        console.log(`Человека с именем ${name} добавлен \n`)
      }
    }
    else {
      console.log('Неверный формат номера', name, number)
    }
	},
	delete(name) {
		if (!(name === this.list[name])) {
			delete this.list[name]
			console.log(`Человек с именем ${name} удален \n` ) 
		} else {
			console.log(`Человек с именем ${name} не существует \n`)
		}
	},
	showContact() {
		console.log('Contacts:')
		for(const name in phoneBook.list) {
			console.log(`\t ${name} - ${phoneBook.list[name]}`)
		}
	}
}


phoneBook.add('Iliyusha', '+649738218') //тут ошибка что уже есть такой
phoneBook.add('galyasdaa', '+73935456481')
phoneBook.add('фв', '73935456481') // тут ошибка что неверный формат телефона
phoneBook.delete('Egorik')
phoneBook.showContact()