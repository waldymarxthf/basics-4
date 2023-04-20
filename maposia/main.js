const operandA = document.querySelector('#first_field')
const operandB = document.querySelector('#second_operand')
const operators = document.querySelector('.operators')
const resultBtn = document.querySelector('button')
const results = document.querySelector('.result')

console.log()
function result() {
  const firstNumber = Number(operandA.value)
  const secondNumber = Number(operandB.value)
  console.log(operators.value)
  switch (operators.value) {
    case '+':
      console.log('тут')
      results.textContent = firstNumber + secondNumber
  }
}
resultBtn.addEventListener('click', result)
