const OPERATION = {
    sum:'+',
    minus:'-',
    mult:'*',
    divider:'/'
};

function calculate ({a,b,operation}){
  switch(operation){
    case OPERATION.sum:
       return  a + b;
       
    case OPERATION.minus:
       return a -b; 
     
    case OPERATION.mult:
        return a * b;
    
    case OPERATION.divider:
       return a / b;
       
        default:
            break;
  }
}
const numberA = document.querySelector('.js-a-number');
const numberB = document.querySelector('.js-b-number');
const selectOperation = document.querySelector('.js-select-operation');
const resultOperation = document.querySelector('.result');
const btnResultNode = document.querySelector('.js-button');

btnResultNode.addEventListener('click', function(){
    const a = +numberA.value;
    const b = +numberB.value;
    const operation = selectOperation.value;
    
    if (b === 0){
        resultOperation.textContent = "На ноль делить нельзя";
    }else{
        const result = calculate({
            a,
            b,
            operation
        });
        resultOperation.textContent = result;
    }
    
});