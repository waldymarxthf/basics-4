// const numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.forEach(number => {
//   console.log(`Number is ${number}`);
// });

// const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
// const longWord = animals.find(word => word.length > 7);
// console.log(longWord);

// const numbers = [1, 11, -2, 3, -10, 4];
// const negativeNumbers = numbers.filter(number => number < 0);
// console.log(negativeNumbers);

// const numbers = [1, 11, -2, 3, -10, 4];
// const absArr = numbers.map(number => Math.abs(number));
// console.log(absArr);

const numbers = [1, 11, -2, 3, -10, 4];
const sortedNumbers = numbers.sort((num1, num2) => num2 - num1);
console.log(sortedNumbers);
