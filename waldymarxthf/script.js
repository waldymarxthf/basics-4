const equals = document.querySelector('#button')
let answer = document.querySelector('#answer')


function sum(firstNumber, secondNumber) {
	return isNumber(answer.textContent = firstNumber + secondNumber)
}

//* функция суммы 2 чисел

function difference(firstNumber, secondNumber) {
	return isNumber(answer.textContent = firstNumber - secondNumber)
}

//* функция разницы 2 чисел

function multiply(firstNumber, secondNumber) {
	return isNumber(answer.textContent = firstNumber * secondNumber)
}

//* функция умножения 2 чисел

function divide(firstNumber, secondNumber) {
	if (secondNumber === 0) {
		return answer.textContent = 'На ноль делить нельзя'
	}
	return isNumber(answer.textContent = firstNumber / secondNumber)
}

//* функция деления 2 чисел

function isNumber(number) {
	if (isNaN(number)) {
		answer.textContent = 'Введите числовое значение'
	}
	return number
}

//* функция для проверки числа на число

function math() {
	const firstNumber = Number(document.querySelector('#firstNumber').value)
	const secondNumber = Number(document.querySelector('#secondNumber').value)
	const mathSymbol = document.querySelector('#mathSymbol').value

	switch(mathSymbol) {
		case '+':
			sum(firstNumber, secondNumber)
			break;
		case '-':
			difference(firstNumber, secondNumber)
			break;
		case '*':
			multiply(firstNumber, secondNumber)
			break;
		case '/':
			divide(firstNumber, secondNumber)
			break
	}
}

//* функция для подсчета всех операций

equals.addEventListener('click', math)