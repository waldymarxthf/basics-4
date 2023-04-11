/*
Дан массив чисел [1, 11, -2, 3, -10, 4]
Отсортируйте массив по убыванию и выведите его в консоль.
*/

const numbers = [1, 11, -2, 3, -10, 4];

const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers);