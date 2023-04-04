function showVerticalMessage(string) {
	const firstLetter = 's'
	if (string.charAt(0) === firstLetter) {
		string = string.charAt(0).toUpperCase() + string.slice(1);
	}
	const maxLength = Math.min(string.length, 7)
	string = string.slice(0, maxLength);
	for (let num of string) {
		console.log(num);
	}
}

showVerticalMessage('stradastr');