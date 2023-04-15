// Task 1

function buildFun(n) {
  var res = [];

  function helpFunc(i) {
    return function () {
      return i;
    };
  }

  for (var i = 0; i < n; i++) {
    res.push(helpFunc(i));
  }

  return res;
}

console.log(...buildFun(5).map((func) => func()));

function buildFun2(n) {
  const res = [];

  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }

  return res;
}

console.log(...buildFun2(5).map((func) => func()));

// Task 2

const numbers = [12, 23, 3, 3, 5, 77, 21, -12];

console.log(Math.floor(numbers.reduce((start, next) => start + next, 0) / numbers.length));
