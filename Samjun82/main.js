const number = [0,1,2,3,4,5,6,7,8,9]
number.forEach(element => {
  console.log(`Number is ${element}`)
});


const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion']
const findAnimal = animals.find(str => str.length > 7)
console.log(findAnimal)


const num = [1, 11, -2, 3, -10, 4]
const negativeNum = num.filter(number => number < 0)
console.log(negativeNum)

const absoluteNum = num.map(number => Math.abs(number))
console.log(absoluteNum)

const sortNum = num.sort(number => number)
console.log(sortNum)