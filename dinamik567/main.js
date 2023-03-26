'use strict';

function calc(operation, a, b) {
    switch(operation) {
        case 'add':
            return a + b;
            break;
        case 'multi':
            return a * b;
            break;
        case 'subtract':
            return a - b;
            break
        default:
            return 'Вы вели некоректное значение';
    }
}

