function calc(a, b, operation) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'multi':
      return a * b;
    case 'substract':
      return a - b;
    default:
      return 'Error';
  }
}

console.log(calc(5, 6, 'add'));
console.log(calc(5, 5, 'multi'));
console.log(calc(25, 10, 'substract'));
console.log(calc(5, 5, 'plus'));
