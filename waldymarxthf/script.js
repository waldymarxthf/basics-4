const mobilePhoneRegexp = /^\+375 \((17|25|29|33|44)\) \d{3}-\d{2}-\d{2}$/;

const phoneBook = {
	list: {
		Iliya: '+375 (29) 316-09-34',
		Falikul: '+375 (25) 289-20-12',
		Galya: '+375 (33) 344-34-37',
		Egorik: '+375 (17) 129-78-02',
	},
	log() {
		console.log(this.list)
	},
	add(name, number) {
		if(mobilePhoneRegexp.test(number)) {
			if (name in this.list || Object.values(this.list).includes(number)) {
				console.log('Этот человек есть уже в записной книге\n')
			} else {
				this.list[name] = number
				console.log(`Человек с именем ${name} добавлен\n`)
			}
		} else {
      console.log('Неверный формат номера', name, number, '\n')
    }
	},
	delete(name) {
		if (!(name === this.list[name])) {
			delete this.list[name]
			console.log(`Человек с именем ${name} удален\n` ) 
		} else {
			console.log(`Человек с именем ${name} не существует\n`)
		}
	},
	showContact() {
		console.log('Contacts:')
		for(const name in this.list) {
			console.log(`\t${name} - ${this.list[name]}`)
		}
	}
}

phoneBook.add('Iliyusha', '+375 (29) 137-92-18')
phoneBook.add('galyasdaa', '+73935456481')
phoneBook.delete('Egorik')
phoneBook.showContact()