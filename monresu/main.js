const answerNode = document.querySelector('.answer');
const historyNode = document.querySelector('.history');

const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')  

const operations = document.querySelector('#operations')

const equal = document.querySelector('.eq')

equal.addEventListener('click', equalFunc);

function sum() {
  return +num1.value + +num2.value;
}
function sub() {
  return +num1.value - +num2.value;
}
function multi() {
  return +num1.value * +num2.value;
}
function div() {
  return +num1.value / +num2.value;
}
function mod() {
  return +num1.value % +num2.value;
}

function saveAnswer(oper, res) {
  const ansHistory = document.createElement('div');
  ansHistory.innerHTML = `${num1.value} ${oper} ${num2.value} = ${res}`;
  historyNode.insertAdjacentElement('beforeend',ansHistory);
  ansHistory.addEventListener('click', () => ansHistory.remove())
}

function equalFunc() {
  const oper = operations.value;
  let res = 0;
  switch (oper) {
    case '+':
      res = sum();
      answerNode.textContent = res;
      break 
    case '-':
      res = sub();
      answerNode.textContent = res;
      break 
    case '*':
      res = multi();
      answerNode.textContent = res;
      break 
    case '/':
      res = div();
      answerNode.textContent = res;
      break 
    case '%':
      res = mod();
      answerNode.textContent = res;
      break 
  }
  saveAnswer(oper, res)
}