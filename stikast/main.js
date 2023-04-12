function printNumbersWithInterval(from, to) {
	let timerId = setInterval(() => {
		if (from <= to) {
			console.log(from);
			from++
		} else {
			clearInterval(timerId)
		}
	}, 1000)
	console.log(from++)
}

printNumbersWithInterval(1, 10)

function printNumbersWithTimeout(from, to) {
  if (from <= to) {
    console.log(from);
    from++;
    setTimeout(printNumbersWithTimeout, 1000, from, to);
  }
}

printNumbersWithTimeout(1, 10)
