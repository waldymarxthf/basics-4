// Task #1

function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

const a = createCounter("a")
const b = createCounter("b")

console.log(a())
console.log(a())
console.log(b())
console.log(a())
console.log(b())
