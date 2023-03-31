let userName = 'Serh';
let userAge = 40;
console.log(userName + ' is ' + userAge + ' years old');

let userHeight; // не присвоенное знаяение 

console.log(userHeight); // undefined
userHeight = 170; // Number
console.log(userHeight); // 170


console.log(`18 + 82 = ${18+82}`) 

let user = null; // null - определенное нулевое значение, undefined - неопределенное. 

let nameFieldChecked = true; // boolean
let ageFieldChecked = false; 

let a = 65;
let b = a;
let c = b;
console.log(c);

const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001'; // ошибка, константу нельзя перезаписать!

const COLOR_ORANGE = "#FF7F00";
let color = COLOR_ORANGE; 
console.log(color); 

console.log(c + myBirthday + b + color + 45 + '6' + nameFieldChecked)