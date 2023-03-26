const OPERATIONS = {
  ADD: 'add',
  MULTI: 'multi',
  SUBSTRACT: 'substract',
};

const errorMessage = 'Error';

function checkNumber(num) {
  return typeof num === 'number' ? true : false;
}

function calc(num1, num2, operation) {
  if (!(checkNumber(num1) && checkNumber(num2))) {
    console.log(errorMessage);
    return null;
  }
  switch (operation) {
    case OPERATIONS.ADD:
      return num1 + num2;
    case OPERATIONS.MULTI:
      return num1 * num2;
    case OPERATIONS.SUBSTRACT:
      return num1 - num2;
    default:
      console.log(errorMessage);
      return null;
  }
}

console.log(calc(5, 6, OPERATIONS.ADD));
console.log(calc(5, 5, OPERATIONS.MULTI));
console.log(calc(25, 10, OPERATIONS.SUBSTRACT));
console.log(calc(5, 5, 'plus'));
