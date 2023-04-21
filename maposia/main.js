const buttonsNum = document.querySelectorAll('.numBtn')
const display = document.querySelector('.result-block')
const operands = document.querySelectorAll('.operand')
const clearBtn = document.querySelector('.clear')

let isClicked = false

buttonsNum.forEach((button) => {
  button.addEventListener('click', () => {
    const maxNum = display.textContent
    if (maxNum.length < 14) {
      if (maxNum == 0 || isClicked) {
        display.textContent = ''
        display.textContent += button.textContent
        isClicked = false
      } else {
        display.textContent = display.textContent += button.textContent
      }
    }
  })
})

let operandA
let operandB
let operator

operands.forEach((operand) => {
  const operandText = operand.textContent
  operand.addEventListener('click', () => {
    switch (operandText) {
      case '+':
        operandA = display.textContent
        operator = '+'
        isClicked = true
        return
      case '-':
        operandA = display.textContent
        operator = '-'
        display.textContent = ''
        isClicked = true
        return
      case '*':
        operandA = display.textContent
        operator = '*'
        display.textContent = ''
        isClicked = true
        return
      case '/':
        operandA = display.textContent
        operator = '/'
        display.textContent = ''
        isClicked = true
        return
      case '=':
        operandB = display.textContent
        if (operator == '+') {
          display.textContent = Number(operandA) + Number(operandB)
        }
        if (operator == '-') {
          display.textContent = Number(operandA) - Number(operandB)
        }
        if (operator == '*') {
          display.textContent = Number(operandA) * Number(operandB)
        }
        if (operator == '/') {
          display.textContent = Number(operandA) / Number(operandB)
        }

        return
    }
  })
})

clearBtn.addEventListener('click', () => {
  display.textContent = 0
})
