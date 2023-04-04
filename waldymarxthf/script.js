function showVerticalMessage(string) {
	if (string.slice(0, 1) === 's') {
		string = string[0].toUpperCase() + string.slice(1)
	}
	if(string.length > 7) {
		string = string.slice(0, 6)
	}
	for(let num of string) {
		console.log(num)
		return null
	}
}

showVerticalMessage('stradas')