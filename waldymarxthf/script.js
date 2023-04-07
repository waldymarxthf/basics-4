// const number = [1, 2, 3, 4, 5, 6]

// number.forEach(number => {
// 	console.log(`Number is ${number}`)
// })


// const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion', 'adqadadadasdad']

// const longWord = animals.filter(element => element.length > 7)
// console.log(longWord)

// const numbers = [1, 11, -2, 3, -10, 4]

// const negativeNumbers = numbers.filter(numbers => numbers < 0)
// console.log(negativeNumbers)

// const numbers = [1, 11, -2, 3, -10, 4]

// const absoluteValue = numbers.map(numbers => Math.abs(numbers))
// console.log(absoluteValue)

// const numbers = [1, 11, -2, 3, -10, 4]

// const sortedNumbers = numbers.sort((a, b) => b - a)
// console.log(sortedNumbers)

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(element => element * 2)
// console.log(doubledNumbers)

const users = ['Ivan', 'Petr', 'Anna', 'помыть посуду', 'помыть машину'];

const words = users.map(user => user.split(' ')).flat().filter(word => word.length > 5);
console.log(words); // ["помыть", "посуду", "помыть", "машину"]
