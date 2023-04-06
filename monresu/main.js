/* Task 1 */
const a = [1, 2, 3, 4, 5, 6, 7];

a.forEach(number => {
    console.log(`Number is ${number}`)
})

/* Task 2 */
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];

let longerAnimal = animals.find(animal => animal.length > 7);
console.log(longerAnimal)

/* Task 3 */
const nums= [1, 11, -2, 3, -10, 4];
const negativeNums = nums.filter(num => num < 0);

console.log(negativeNums)

/* Task 4 */
const differnceNumbers = [1, 11, -2, 3, -10, 4];
const absoluteNumbers = differnceNumbers.map(num => Math.abs(num));

console.log(absoluteNumbers)

/* Task 5 */

const differnceNums = [1, 11, -2, 3, -10, 4];
const sortedNums = differnceNums.sort((b, a) => a - b)

console.log(sortedNums)

const numbers = [1, 2, 3, 4, 3, 5, 1];
const oneIndex = numbers.indexOf(7);
console.log(oneIndex); // 0