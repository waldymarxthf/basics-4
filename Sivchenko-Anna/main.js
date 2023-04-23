const numbers1 = [1, 3, 5, 7, 8, 9, 24];

numbers1.forEach(number => {
  console.log(`Number is ${number}`)
})


const animals = ["cat", "dog", "elephant", "tiger", "lion"];
const wordLongerThan7Characters = animals.find( animal => animal.length > 7);
console.log(wordLongerThan7Characters);

const numbers2 = [1, 11, -2, 3, -10, 4];

const negativeNumbers = numbers2.filter(num => num < 0);
console.log(negativeNumbers);

const absoluteValues = numbers2.map(num => num < 0 ? num * -1 : num);
console.log(absoluteValues);

const sortedNumbers = numbers2.sort((a, b) => b - a);
console.log(sortedNumbers);