/*
Дан массив строк ['cat', 'dog', 'elephant', 'tiger', 'lion']
найти первое слово длинной больше 7 символов и вывести в консоль
*/

const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];

const longWord = animals.find(animal => animal.length > 7);
console.log(longWord);