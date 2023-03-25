function calc(operation, a, b) {
	switch (operation) {
		case 'add':
			return a + b
		case 'multi':
			return a * b
		case 'subtract':
			return a - b
		default:
			console.log('omg where is your eyes')
			break
	}
}

console.log(calc('add', 1, 2))