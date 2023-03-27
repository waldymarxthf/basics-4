const OPERATIONS = {
  ADD: 'add',
  MULTI: 'multi',
  SUBSTRACT: 'substract',
};

const ERROR_NUMBER_MESSAGE = 'Number Error';
const ERROR_OPERATION_MESSAGE = 'Unknow operation';

function isNumber(num) {
  return !isNaN(num);
}

function calc(num1, num2, operation) {
  const isValid = isNumber(num1) && isNumber(num2);

  if (!isValid) {
    return ERROR_NUMBER_MESSAGE;
  }

  switch (operation) {
    case OPERATIONS.ADD:
      return Number(num1) + Number(num2);
    case OPERATIONS.MULTI:
      return Number(num1) * Number(num2);
    case OPERATIONS.SUBSTRACT:
      return Number(num1) - Number(num2);
    default:
      return ERROR_OPERATION_MESSAGE;
  }
}

console.log(calc(3, '4', OPERATIONS.ADD));
console.log(calc(5, 5, OPERATIONS.MULTI));
console.log(calc(25, 10, OPERATIONS.SUBSTRACT));
console.log(calc(5, 5, 'plus'));
console.log(calc('5five', 5, 'plus'));
