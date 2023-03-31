const error = "Please enter number"
function сalc(num1, num2, operation) {
if (operation === 'add' && typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2 
} else if (operation === 'multi' && typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 * num2 
} else if (operation === 'subtract' && typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 - num2
} else {
    return error
}

}

console.log(сalc(12, 12, 'add'))
console.log(сalc('24', 12, 'multi'))
console.log(сalc(24, false, 'subtract'))

// let num1 = 'numb';
// if(typeof num1 === 'number') {
//     console.log('ok')
// } else {
//     console.log('please enter number')
// }