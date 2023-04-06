const numbersOne = [1, 2, 3, 4];

numbersOne.forEach(number => {
  console.log(`Number is ${number}`);
});

// function numberOutput(number) {
// 	console.log(`Number is ${number}`)
// }

// numbers.forEach(numberOutput)


const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const firstWordWithSevenLetters = animals.find(word => word.length > 7)
console.log(firstWordWithSevenLetters)


const numbersTwo = [1, 11, -2, 3, -10, 4];
const negativeNumbers = numbersTwo.filter(number => number < 0)
console.log(negativeNumbers)


const numbersThree = [1, 11, -2, 3, -10, 4];
const absoluteNumbers = numbersThree.map(number => Math.abs(number))
console.log(absoluteNumbers)


const numbersFour = [1, 11, -2, 3, -10, 4];
const descendingNumbers = numbersFour.sort((a, b) => b - a)
console.log(descendingNumbers)