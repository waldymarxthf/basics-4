const phoneBook = {
	list: {
		Iliya: +649738218,
		Falikul: +364825197,
		Egorik: +845136498,
	},
	log() {
		console.log(this.list)
	},
	add(name, number) {
		this.list[name] = number
	},
	delete(name) {
		delete this.list[name]
	}
	
}


phoneBook.add('galya', 7392756481)
phoneBook.add('galyasdaa', 73935456481)
phoneBook.delete('Egorik')
phoneBook.log()
console.log('Iliya' in phoneBook.list)

for(const name in phoneBook.list) {
	console.log(`${name} - ${phoneBook.list[name]}`)
}