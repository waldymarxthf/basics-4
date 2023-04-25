const saveResult = document.getElementById('saveResult')
const results = document.getElementById('results')
let result

function calculated(num1, num2, operation) {
    switch (operation) {
    case 'add':
        return num1 + num2
    case 'multi':
        return num1 * num2
    case 'subtract':
        return num1 - num2
    case 'division':
        return num1 / num2
    } 
}
export function getResult () {
    const num1 = document.getElementById('num1').value,
    num2 = document.getElementById('num2').value,
    select = document.getElementById('tog').value
    result = results.textContent = calculated(+num1, +num2, select)
    addResultToDOM(result)
}

function addResultToDOM(result) {
    const newResult = document.createElement('div')
    newResult.textContent = result
    newResult.style.margin = '0 0 0 430px'
    saveResult.appendChild(newResult)
    newResult.addEventListener("click", () => {
    saveResult.removeChild(newResult)
    })
}