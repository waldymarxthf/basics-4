// 1
const users = [1, 2, 3];

users.forEach(user => {
  console.log(`Number is ${user}`);
});

// 2
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const animal7 = animals.find(animal7=> animal7.length >= 7)
console.log(animal7); 
// 3
const num = [1, 11, -2, 3, -10, 4];
const negativeNum = num.filter(neg=> neg <0)
console.log(negativeNum);

// 4
const num = [1, 11, -2, 3, -10, 4];
const numAbsolute = num.map(numA=> Math.abs(numA));
console.log(numAbsolute);

// 5
const num = [1, 11, -2, 3, -10, 4];
const sortedNum = num.sort((num1, num2) => num2-num1);
console.log(sortedNum);





