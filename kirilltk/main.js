let count = document.getElementById('buttonEquals');

function countNumbers(operator, first, second) {
    if (isNaN(first) || isNaN(second)) {
        return 'Что-то из введенного не число!';
    } else {
        switch(operator) {
            case '+':
                return first + second;
            case '-':
                return first - second;
            case '*':
                return first * second;
            case '/':
                if (second == 0) {
                    return 'На ноль делить нельзя';
                } else {
                    return first/second;
                }
        }
    };
};


function calc() {
    let symbol = document.getElementById('operation');
    let selectOperator =  symbol.value;
    let firstNumber = document.getElementById('first_number').value;
    let secondNumber = document.getElementById('second_number').value;
    document.getElementById('result').innerHTML = countNumbers(selectOperator, Number(firstNumber), Number(secondNumber));

};

count.addEventListener('click', calc);