const btnCalc = document.body.querySelector(".buttonEquals");

const ADD = 'add';
const MULTI = 'multi';
const SUBTRACT = 'subtract';
const DIVISION = 'division';
const ERROR = 'This is operation undefined';

function getInputValue(sel) {
    return document.querySelector(sel).value;
}

btnCalc.addEventListener('click', calc);

function getOperator(operation, firstNumber, secondNumber) {

    let checkNumber = (typeof firstNumber === 'number') && (typeof secondNumber === 'number');

    if (checkNumber) {
        switch (operation) {
            case ADD:
                return firstNumber + secondNumber;
            case MULTI:
                return firstNumber * secondNumber;
            case SUBTRACT:
                return firstNumber - secondNumber;
            case DIVISION:
                return firstNumber / secondNumber;
            default:
                return ERROR;
        }
    } else {
        return 'This is not number';
    }
}

function calc(event) {
    event.preventDefault();
    console.log(event);
    const firstNumberDOM = +getInputValue(".first_number");
    console.log(firstNumberDOM);
    const secondNumberDOM = +getInputValue(".second_number");
    const operationDOM = getInputValue("#operation");
    console.log(operationDOM);

    let result = getOperator(operationDOM, firstNumberDOM, secondNumberDOM);
    console.log(result);
    document.body.querySelector(".result").textContent = result;
}


function changeColor() {

    let changeColorTime = setTimeout(function ColorTime() {

        const colors = ['red', 'blue', 'green', 'orange', 'white'];

        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        const colorBtn = document.body.querySelector(".colorBtn");
        const valueBtn = colorBtn.getAttribute('data-color');

        const colorBody = document.body;
        console.log(valueBtn);
        colorBody.style.backgroundColor = valueBtn;

        setTimeout(() => colorBody.style.backgroundColor = randomColor,2000);

        changeColorTime = setTimeout(ColorTime, 4000);
    },2000);
}


