const users = [1, 3, 4, 5, 8];
const numbers1 = [1, 11, -2, 3, -10, 4];

users.forEach((user) => {
  console.log(`Number is ${user}`);
});

const animals = ["cat", "dog", "elephant", "tiger", "lion"];
const firstAnimalFind = animals.find((name) => name.length > 7);
const isNegativeNumberArray = numbers1.filter((number) => number < 0);

console.log(firstAnimalFind);
console.log(isNegativeNumberArray);
