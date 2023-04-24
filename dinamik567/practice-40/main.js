'use strict';

const numberOne = document.querySelector('.numberOne');
const numberTwo = document.querySelector('.numberTwo');
const listMathActions = document.querySelector('.calculator-actions');
const buttonResult = document.querySelector('.result-btn');
const calculatorResult = document.querySelector('.calculator__result');


function calculator(operation, a, b) {
    switch (operation) {
        case '+':
            return (a * 10 + b * 10) / 10;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return (a  / b);
        default:
            console.log('Вы вели некоректное значение');
            return false;
    }
}

buttonResult.addEventListener('click', () => {
   const num1 = +numberOne.value;
   const num2 = +numberTwo.value;
   const index = listMathActions.options.selectedIndex;
   const action = listMathActions.options[index].value;

   console.log(action)
   if (!typeof num1 === 'number') {
       console.log(`Некоректное значение ${num1}`)
       return false
   }

    if (!typeof num2 === 'number') {
        console.log(`Некоректное значение ${num2}`)
        return false
    }


   const result = calculator(action, num1, num2);

    calculatorResult.textContent = result;

    const div = document.createElement('div');

    div.textContent = result;
    div.style.padding = '5px';
    div.style.border = '1px solid black';

    document.body.appendChild(div);

    div.addEventListener('click', () => div.remove());
});