const a = document.querySelector('.operand_a');
const b = document.querySelector('.operand_b');
const operation = document.querySelector('.operation')
const buttonResult = document.querySelector('.button');
const resultOutput = document.querySelector('.result')

buttonResult.addEventListener('click', rendering)

function getValueA() {
	return a.value
}

function getValueB() {
	return b.value
}

function getOperationValue() {
	return operation.value
}

function calculation() {
	let operationValue = getOperationValue();
	let result;
	
	switch(operationValue) {
		case '+':
			result = +getValueA() + +getValueB();
			break;
		case '-':
			result = +getValueA() - +getValueB();
			break;
		case '*':
			result = +getValueA() * +getValueB();
			break;
		case '/':
			result = +getValueA() / +getValueB();
			break;
		default:
		 	result = 'Error';
	}

	return result;
}

function rendering() {
	resultOutput.textContent = calculation()
}