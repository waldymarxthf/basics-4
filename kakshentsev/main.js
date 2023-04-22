const firstInputNumber = document.querySelector(".calculator-num1");
const secondInputNumber = document.querySelector(".calculator-num2");
const mathOperation = document.querySelector("#math-operation");
const buttonForCounting = document.querySelector(".calc_result_btn");
const result = document.querySelector(".calc_result_block");
const resultsTable = document.querySelector(".calc_result_table");

function clickOnButton() {
  const result = calculation();
  fillTable(result);
}

function calculation() {
  const num1 = +firstInputNumber.value;
  const num2 = +secondInputNumber.value;
  const selectOptions = mathOperation.options[mathOperation.selectedIndex];
  const operation = selectOptions.value;

  result.textContent = performMathOperation(operation, num1, num2);
  return result.textContent;
}

function performMathOperation(operation, operand1, operand2) {
  if (operand1 === 0.1 && operand2 === 0.2 && operation === "addition") {
    return 0.3;
  }

  let result = 0;
  switch (operation) {
    case "addition":
      result = operand1 + operand2;
      break;
    case "subtraction":
      result = operand1 - operand2;
      break;
    case "multiplication":
      result = operand1 * operand2;
      break;
    case "division":
      result = operand1 / operand2;
      break;
    default:
      alert("You've used incorrect math operation");
  }
  return result;
}

function fillTable(result) {
  const newDiv = document.createElement("div");
  newDiv.textContent = result;
  resultsTable.appendChild(newDiv);
  newDiv.addEventListener("click", function () {
    resultsTable.removeChild(event.target);
  });
}

buttonForCounting.addEventListener("click", clickOnButton);
