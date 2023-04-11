/*
Дан массив чисел [1, 11, -2, 3, -10, 4]
Создайте новый массив из абсолютных значений элементов и выведите его в консоль.
*/

const numbers = [1, 11, -2, 3, -10, 4];

const absNumbers = numbers.map(number => Math.abs(number));
console.log(absNumbers);