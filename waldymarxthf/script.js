const firstNumber = document.querySelector('#firstNumber')
const secondNumber = document.querySelector('#secondNumber')
const mathSymbol = document.querySelector('#mathSymbol')
const equals = document.querySelector('#button')
let answer = document.querySelector('#answer')


function sum(firstNumber, secondNumber) {
	if (secondNumber.trim().length === 0) {
		return isNumber(answer.textContent = firstNumber + firstNumber)
	}
	return isNumber(answer.textContent = firstNumber + secondNumber)
}

//* функция суммы 2 чисел с проверкой на пустую строку
//* если во 2 значении передана пустая строка, то 1 число складывается само с собой

function difference(firstNumber, secondNumber) {
	if (secondNumber.trim().length === 0) {
		return isNumber(answer.textContent = firstNumber - firstNumber)
	}
	return isNumber(answer.textContent = firstNumber - secondNumber)
}

//* функция разницы 2 чисел с проверкой на пустую строку
//* если во 2 значении передана пустая строка, то 1 число отнимается само от себя

function multiply(firstNumber, secondNumber) {
	if (secondNumber.trim().length === 0) {
		return isNumber(answer.textContent = firstNumber * firstNumber)
	}
	return isNumber(answer.textContent = firstNumber * secondNumber)
}

//* функция умножения 2 чисел с проверкой на пустую строку
//* если во 2 значении передана пустая строка, то 1 число умножается само с собой

function divide(firstNumber, secondNumber) {
	if (secondNumber.trim().length === 0) {
		return isNumber(answer.textContent = firstNumber / firstNumber)
	}
	if (secondNumber === 0) {
		return answer.textContent = 'На ноль делить нельзя'
	}
	return isNumber(answer.textContent = firstNumber / secondNumber)
}

//* функция деления 2 чисел c проверкой деления на ноль и также проверка на пустую строку
//* если во 2 значении передана пустая строка, то 1 число делится само на себя

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
	let second = +getInputValue(secondNumber) || ''
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