const ADD = 'add';
const MULTI = 'multi';
const SUBTRACT = 'subtract';
const ERROR = 'This is operation undefined'

function getOperator(operation, a, b) {
    switch (operation) {
        case ADD:
            return a + b;
        case MULTI:
            return a * b;
        case SUBTRACT:
            return a - b;
        default:
            return ERROR;
    }
}

function calc(operator, a, b) {
    let result = getOperator(operator, a, b);
    console.log(result);
}

calc('add', 3, 3);
calc('multi', 3, 3);
calc('subtract', 3, 3);
calc('error', 3, 3);