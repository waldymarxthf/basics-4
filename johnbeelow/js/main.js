const UI_ELEMENTS = {
  NUMBER_ONE: document.querySelector('.input_number_one'),
  NUMBER_TWO: document.querySelector('.input_number_two'),
  OPERATOR: document.querySelector('.operators'),
  BUTTON_RESULT: document.querySelector('.button_result'),
  RESULT: document.querySelector('.result'),
}

function sumCalculator(operation, numberOne, numberTwo) {
  switch (operation) {
    case 'add':
      return +numberOne + +numberTwo
    case 'subtract':
      return numberOne - numberTwo
    case 'multi':
      return numberOne * numberTwo
    case 'div':
      return numberOne / numberTwo
  }
}

UI_ELEMENTS.BUTTON_RESULT.addEventListener('click', () => {
  UI_ELEMENTS.RESULT.textContent = sumCalculator(
    UI_ELEMENTS.OPERATOR.value,
    UI_ELEMENTS.NUMBER_ONE.value,
    UI_ELEMENTS.NUMBER_TWO.value
  )
})
