const toDoList = ["read book", "write letter", "learning language", "running"];
const errorStatus = "\nThis task doesn't exist.\n";
const errorAdd = "\nThis task already exists\n";

function isValidTask(task) {
  if (task === undefined || task === null || task === "\n" || task === "") {
    return false;
  }
  return true;
}

function includesToDoTask(task) {
  return toDoList.includes(task);
}

function deleteTask(task) {
  if (!isValidTask(task) || !includesToDoTask(task)) {
    return console.log(errorStatus);
  }
  for (let i = 0; i < toDoList.length; i++) {
    if (toDoList[i] == task) {
      toDoList.splice(i, 1);
      console.log(`\nTask \'${task}\' deleted.\n`);
      break;
    }
  }
}

function addTask(task) {
  if (isValidTask && includesToDoTask(task)) {
    return console.log(errorAdd);
  }
  toDoList.push(task);
  console.log(`\nTask \'${task}\' added.\n`);
}

function showTodoList() {
  for (const task of toDoList) {
    console.log(task);
  }
}

showTodoList();
deleteTask("running");
showTodoList();
addTask("swimming");
showTodoList();
