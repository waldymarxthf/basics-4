//10
let answer = prompt("Какое «официальное» название JavaScript?");
if(answer == 'ECMAScript') {
	alert("Верно!");
} else{
	alert("Не знаете? ECMAScript!")
}

let numberDay10 = prompt("Число");
if (numberDay10 > 0){
	alert("1");
} else if(numberDay10 == 0){
	alert("0");
} else{
	alert("-1");
}

resultDay10 = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет':
	(login == 'Директор') ? 'Здравствуйте':
	(login == '') ? 'Нет логина':
	'';

if (age >= 14 && age <= 90);
if (!(age >= 14 && age <= 90));
let userName = prompt("Кто там?", '');
if (userName === 'Админ') {
  let pass = prompt('Пароль?', '');
  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }
} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}
//10

//11
function checkAge(age){
	if(age < 18){
		console.log("you are not allowed");
	} else{
		console.log("you are welcome!")
	}
}
checkAge(20);

function checkAge(age) {
	if (age >= 18) { return true;} 
	else { return confirm('А родители разрешили?');} 
}
checkAge(20);


function сalc(operation, a, b){
	if(operation == 'add'){
		return a + b;
	} else if(operation == 'multi'){
		return a * b;
	} else if(operation == 'subtract'){
		return a - b;
	}
}
let resultDay11 = сalc('subtract', 3, 2);
console.log(resultDay11);
//11

//12
function сalc(operation, a, b){
	switch(operation){
		case 'add':
			return a + b;
			break;
		case 'multi':
			return a * b;
			break;
		case 'subtract':
			return a - b;
			break;
	} 
}
let resultDay12 = сalc('subtract', 3, 2);
console.log(resultDay12);

const numberDay12 = +prompt('Введите число между 0 и 3', '');
switch (numberDay12) {
  case 0:
    alert('Вы ввели число 0');
    break;

  case 1:
    alert('Вы ввели число 1');
    break;

  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3');
    break;
}
//12

//15
let i = 1;
do{
	console.log(i)
	i++
}while(i<20);

for (let i = 1; i < 20; i++) {
  console.log(i);
}

//16
const MyPhoneBook = {
	'Alla Vladimirovna': 79236333889,
	'Ulia Nikolaevna': "Gammryxa",
	'Ilia': "waldymarxhf",
}
delete MyPhoneBook['Ilia'];
MyPhoneBook['Masha'] = 79134241681;
console.log(MyPhoneBook);
console.log(MyPhoneBook.Masha);
console.log(MyPhoneBook['Ulia Nikolaevna']);


const phoneBook = {
  list: {
    "Alla Vladimirovna": 79236333889,
    "Ulia Nikolaevna": "Gammryxa",
    "Ilia": "waldymarxhf",
  },
  add(name, number){
		this.list[name] = number;
	},
	dell(name){
		delete this.list[name];
	}
};

let phoneBook2 = {};

for(let key in phoneBook){
	phoneBook2[key] = phoneBook[key];
}
phoneBook2.Ilia = "sss"

console.log(phoneBook);

phoneBook.add("Sara", 999);
phoneBook.dell("Ilia");
console.log(phoneBook.list);

for (const name in phoneBook.list) {
  console.log(name, '-', phoneBook.list[name]);
}
//16

//18
let user = { name: 'John' };
let admin = user;
admin.name = 'Pete';
console.log(user.name);


//19
const ToDoList = {
	list: {

	}, 
	changeStatus(tasc, status){
		if((tasc in this.list)){
			this.list[tasc] = status;
		} else {
			console.log("no such task yet");
		}
	},

	addTask(tasc, status = "To do"){
		if(!(tasc in this.list)){
			this.list[tasc] = status;
		} else {
			console.log("task is already there");
		}
	},

	deleteTask(tasc){
		if((tasc in this.list)){
			delete this.list[tasc];
		} else{
			console.log("no such task yet");
		}
	},


	showList(){
		console.log("To do:");
		for(tasc in this.list){
			if(this.list[tasc] === "To do"){
				console.log(`    ${tasc}`);
			}
		}
		console.log("In progress:");
		for (tasc in this.list){
			if(this.list[tasc] === 'In progress'){
					console.log(`    ${tasc}`);
			}
		}
		console.log("Done:");
		for (tasc in this.list){
			if(this.list[tasc] === 'Done'){
					console.log(`    ${tasc}`);
			}
		}
	}
}

ToDoList.addTask('have a walk');
ToDoList.addTask('loved');
ToDoList.addTask('write a post');
ToDoList.addTask('wma');
ToDoList.deleteTask('have a walk');
ToDoList.changeStatus("write a post", "Done");
ToDoList.changeStatus("wma", "In progress");
ToDoList.showList();

//22
let num = 12.34;
console.log(num.toFixed(5));

//23
function showVerticalMessage(Massege){
	if(Massege[0] == 's'){
		console.log(Massege[0].toUpperCase());
	} else {
		console.log(Massege[0]);
	}
	for (let char of Massege.slice(1, 7)) {
		console.log(char);
	}
}
showVerticalMessage('strada');


//24
const toDoList = ['почитать', 'помыть посуду', 'помыть машину'];
toDoList.pop(); //для удаления последнего элемента из массива
toDoList.push('посадить цветы');//для добавления элемента в конец массива
toDoList.shift(); // для удаления первого элемента из массива
toDoList.unshift('посадить цветы'); //для добавления элемента в начало массива


toDoList.forEach(user => {
  console.log(user);
});

//25
const numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach(number => {
  console.log('Number is', number);
});

const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const FirstSevenLetterWord = animals.find(animal => animal.length >= 7);
console.log(FirstSevenLetterWord);

const nubmbersNegative = [1, 11, -2, 3, -10, 4];
const NegativeNumbers = nubmbersNegative.filter(number => number < 0);
console.log(NegativeNumbers); 

const nubmbersAbsolute = [1, 11, -2, 3, -10, 4];
const AbsoluteNumbers = nubmbersAbsolute.map(number => Math.abs(number));
console.log(AbsoluteNumbers); 

const numbersSort = [1, 11, -2, 3, -10, 4];
const sortedNumbers = numbersSort.sort((a, b) => b - a);
console.log(sortedNumbers);