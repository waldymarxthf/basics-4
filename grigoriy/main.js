let toDoList = ['проснулся','позавтракал','урок Strada','собрался на работу'];
let tasksCount = toDoList.length;

console.log(toDoList);

toDoList[0] = 'умылся'
console.log(toDoList);

toDoList.push('завел тачку');
console.log(toDoList);

lastItem = toDoList.pop();
console.log(toDoList);
console.log(lastItem);

firstItem = toDoList.shift();
console.log(toDoList);

toDoList.unshift('принял душ');
console.log(toDoList);

for (const task of toDoList) {
    console.log(task);
}
