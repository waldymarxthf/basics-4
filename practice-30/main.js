/*
Создайте функцию которая создает независимые счетчики Counter.
При вызове счетчик увеличивает внутреннее значение на 1 и возвращает счет.
*/

"use strict";

function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
};

let counterA = createCounter();
let counterB = createCounter();

console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());