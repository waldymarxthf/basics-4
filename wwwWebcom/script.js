//-----------------------------------Получить существующие элементы из HTML------------------------------------------------------
const btn = document.querySelector(".choose-btn");
const operators = document.querySelectorAll(".menu_operator");
const result = document.querySelector(".result");
const menu = document.querySelector(".menu");
const equals = document.querySelector(".equals");

//-----------------------------------Создание родителя в котором будут выводиться результаты вычеслений--------------------------
const parentOfResults = document.createElement("div");
document.body.appendChild(parentOfResults);
parentOfResults.classList.add('parent')
//-------------------------------------------------------------------------------------------------------------------------------

let resultNum = 0;
let operator;

//-----------------------------------Выбор оператора-----------------------------------------------------------------------------
function chooseOperator(event) {
  menu.classList.remove("show-menu");
  operator = event.target.textContent;
  btn.textContent = operator;
  return operator;
}
//-------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------Получение результата------------------------------------------------------------------------
function getResult() {
  const firstNumber = +document.querySelector(".operand-one > input").value;
  const secondNumber = +document.querySelector(".operand-two > input").value;
  if (operator === "/" && secondNumber === 0) resultNum = "Error";
  switch (operator) {
    case "+":
      resultNum = firstNumber + secondNumber;
      break;
    case "-":
      resultNum = firstNumber - secondNumber;
      break;
    case "*":
      resultNum = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) resultNum = "Error";
      else resultNum = firstNumber / secondNumber;
      break;
  }
  return (result.textContent = `${resultNum}`);
}
//-------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------Показать меню выбора операторов-------------------------------------------------------------
function showMenu() {
  menu.classList.toggle("show-menu");
}
//-------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------Ппоказать все реузльтаты--------------------------------------------------------------------
function showResults() {
    const childofResults = document.createElement('p')
    childofResults.classList.add('child')
    parentOfResults.appendChild(childofResults)
    childofResults.textContent = `${getResult()}`;
}
//-----------------------------------Удалить результат---------------------------------------------------------------------------
function deleteResult(event) {
    if(event.target.classList.contains('child')) {
        parentOfResults.removeChild(event.target)
    }
}
//-------------------------------------------------------------------------------------------------------------------------------


parentOfResults.addEventListener('click', deleteResult)
equals.addEventListener("click", getResult);
equals.addEventListener("click", showResults);
menu.addEventListener("click", chooseOperator);
btn.addEventListener("click", showMenu);

