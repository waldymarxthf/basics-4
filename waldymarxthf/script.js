const firstNumber = document.querySelector('#firstNumber')
const secondNumber = document.querySelector('#secondNumber')
const mathSymbol = document.querySelector('#mathSymbol')
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

//* функция деления 2 чисел c проверкой деления на ноль

function isNumber(number) {

	if (isNaN(number)) {
		answer.textContent = 'Введите числовое значение'
	}

	return number
}

//* функция для проверки числа на число

function getInputValue(input) {
	return input.value
}

//* функция которая получает value от элемента

function math() {

	let first = +getInputValue(firstNumber)
	let second = +getInputValue(secondNumber)
	let symbol = getInputValue(mathSymbol)

	switch(symbol) {
		case '+':
			sum(first, second)
			break;
		case '-':
			difference(first, second)
			break;
		case '*':
			multiply(first, second)
			break;
		case '/':
			divide(first, second)
			break
	}
	
}

//* функция для подсчета всех операций

equals.addEventListener('click', math)