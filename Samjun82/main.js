function Calc(a, b, operation) {
switch (operation) {
    case 'add':
        return a + b;
    case 'multi':
        return a * b;
    case 'subtract':
        return a - b;
    }

}

console.log(Calc(24, 12, 'add'))
console.log(Calc(24, 12, 'multi'))
console.log(Calc(24, 12, 'subtract'))