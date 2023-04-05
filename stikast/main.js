const toDoList = ["to read", "to clean up", "do some exercises"];

function addTask(task) {
  toDoList.push(task);
}

function deleteFirstTask() {
  toDoList.shift();
}

function deleteLastTask() {
  toDoList.pop();
}

addTask("meet Dasha");
addTask("to play basketball");
deleteFirstTask();
deleteLastTask();

console.log(toDoList);
