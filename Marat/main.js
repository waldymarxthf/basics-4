const form_High = document.querySelector(".form_High");
const form_Low = document.querySelector(".form_Low");
const plus = document.querySelector(".plus");
const inputHigh = document.querySelector(".inputHigh");
const todo_high = document.querySelector(".todo_high");
const todo_low = document.querySelector(".todo_low");
const list = [
    {
        name: "Task name",
        priority: "high",
        status: "done"
    }
];
function Task(name, status = "todo", priority = "high") {
    this.name = name;
    this.status = status;
    this.priority = priority;
}
function addTask(name, status = "todo", priority = "high") {
    const task = new Task(name, status, priority);
    list.push(task);
    console.log(list);
}

function findIndex(name) {
    return list.findIndex(t => t.name === name);
}
function deleteTask(name) {
    const index = findIndex(name);
    if (index === -1) {
        console.log("Нет такой задачи");
        return;
    }
    else {
        list.splice(index, 1);
        console.log(list);
        return
    }
}
function changeStatus(name, status) {
    const index = findIndex(name);
    list[index].status = status;
    return;
}
form_High.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(inputHigh.value);
    addTask(inputHigh.value, "todo", "high");
    form_High.reset();
    render();
})
form_Low.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(inputHigh.value);
    addTask(inputHigh.value, "todo", "low");
    form_Low.reset();
    render();
})

function deleteBtnHandler(button, taskName) {
    deleteTask(taskName);
    render();
    button.removeEventListener("click", deleteBtnHandler);
}



function createElement(taskName, status) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    const button = document.createElement('button');

    div.classList.add('todo_task');
    input.classList.add('todo_input_chackbox');
    button.classList.add('todo_button');

    input.type = 'checkbox';

    label.textContent = taskName;
    button.innerHTML = "&#215";


    button.addEventListener("click", () => deleteBtnHandler(button, taskName));
    input.addEventListener("change", function () {
        const isChecked = input.checked;
        changeStatus(taskName, isChecked ? "done" : "todo");
        render();
    })
    if (status == "done") {
        div.classList.add("done_task");
        input.checked = true;
    }

    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(button);
    return div;
}

function render() {
    todo_high.innerHTML = "";
    todo_low.innerHTML = "";
    for (const task of list) {
        const NodeFor = task.priority == "high" ? todo_high : todo_low;
        const taskNode = createElement(task.name, task.status);
        NodeFor.appendChild(taskNode);
    }
}

render();


















// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }
// let user = new User("Jack");
// let user2 = new User("Ann");

// console.log(user.name);
// console.log(user2.name);

// function User2(){
//     console.log(new.target);
// }

// User2();
// new User2();

// function User3(name) {
//     if (!new.target) {
//         return new User3(name);
//     }
//     this.name = name;

// }
// let john = User3("John");
// console.log(john.name);

// function BigUser(){
//     this.name = "John";
// }
// console.log(new BigUser().name);

// let user4 = new User;
// console.log(user4);
//  function User5(name){
//     this.name = name;
//     this.sayHi = function(){
//         console.log("Меня зовут: " + this.name);
//     };
//  }
// let john = new User5("Jane");
// john.sayHi();

// let obj = {}
// function A(){
//     return 1
// }
// function B(){
//     return 1
// }

// let a = new A();
// let b = new B();

// console.log(a);
// console.log(b);
// console.log(a == b);

// function Calculator() {
//     this.read = function () {
//         this.firstNumber = +prompt("Введите число 1");
//         this.SecondNumber = +prompt("Введите число 2");
//     }

//     this.sum = function () {
//         return this.firstNumber + this.SecondNumber;
//     }
//     this.mul = function () {
//         return   this.firstNumber * this.SecondNumber;
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum = " + calculator.sum());
// alert("Mul = " + calculator.mul());

// function Accumulator(startingValue){
//     this.value = startingValue;
//     this.read = function(){
//         this.value = +prompt("Число", 0);
//     }
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);