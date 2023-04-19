const resultOut = document.querySelector('.result');
const firstOperand = document.querySelector('.first-operand');
const secondOperand = document.querySelector('.second-operand');
const operation = document.querySelector('select');
const btnEquels = document.querySelector('.equals-btn');
const btnReset = document.querySelector('.reset');
const inputs = document.querySelectorAll('input');

let valueFirstOperand = 0;
let valueSecondOperand = 0;


btnEquels.addEventListener('click', calc);
btnReset.addEventListener('click', resetValue);

// Вешаем события на инпуты
inputs.forEach(inp => {
    inp.addEventListener('input', () => {
        valueFirstOperand = Number(firstOperand.value);
        valueSecondOperand = Number(secondOperand.value);
    })
})

// Выполняем математические операции и выводим
function calc() {
    let result = null;
    switch (operation.value) {
        case '+':
            result = valueFirstOperand + valueSecondOperand;
            break;
        case '-':
            result = valueFirstOperand - valueSecondOperand;
            break;
        case '*':
            result = valueFirstOperand * valueSecondOperand;
            break;
        case '/':
            result = valueFirstOperand / valueSecondOperand;
            break;
    }
    resultOut.textContent = result;
}

// Сброс всех значение reset
function resetValue() {
    valueFirstOperand = 0;
    valueSecondOperand = 0;

    firstOperand.value = '';
    secondOperand.value = '';
    resultOut.textContent = 0;
}
