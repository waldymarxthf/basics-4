import { buttons, firstValue, operations, results, secondValue } from "./utils.js";

function calculation() {
   let number1 = Number(firstValue.value)
   let number2 = Number(secondValue.value)
   let result;
   switch (operations.value) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        result = number1 / number2;
        break;
   } 
   const newChild = document.createElement('div');
   newChild.textContent = result;
   results.insertAdjacentElement('beforeend', newChild);
   results.addEventListener('click', (event) => {
    event.target.remove();
    event.target.removeEventListener;
   });
}

buttons.addEventListener('click', calculation);
