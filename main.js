function sum(a,b){
    return a + b;
}
function minus(a,b){
    return a - b;
}
function mult(a,b){
    return a * b;
}
function divider(a,b){
    return a / b;
}

const OPERATION = {
    sum:'+',
    minus:'-',
    mult:'*',
    divider:'/'
};

function calculate ({a,b,operation}){
  let result = null;

  switch(operation){
    case OPERATION.sum:
        result = sum(a,b);
        break;
    case OPERATION.minus:
        result = minus(a,b); 
        break;
    case OPERATION.mult:
        result = mult(a,b);
        break;
    case OPERATION.divider:
        result = divider(a,b);
        break;
        default:
            break;
  }
  return result;
}
const numberA = document.querySelector('.js-a-number');
const numberB = document.querySelector('.js-b-number');
const selectOperation = document.querySelector('.js-select-operation');
const resultOperation = document.querySelector('.result');
const btnResultNode = document.querySelector('.js-button');

btnResultNode.addEventListener('click', function(){
    const a = Number(numberA.value);
    const b = Number(numberB.value);
    const operation = selectOperation.value;
    const result = calculate({
        a,
        b,
        operation
    });
    resultOperation.innerHTML = result;
});