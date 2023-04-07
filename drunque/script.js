const array = []
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 100))
}
console.log(array)

array.forEach(element => {
  console.log(`Number is ${element}`)
});

console.log(['cat', 'dog', 'elephant', 'tiger', 'lion'].find(item => item.length > 7))
console.log([1, 11, -2, 3, -10, 4].filter(item => item < 0))
console.log([1, 11, -2, 3, -10, 4].map(Math.abs))
console.log([1, 11, -2, 3, -10, 4].sort((prev, next) => next - prev))
