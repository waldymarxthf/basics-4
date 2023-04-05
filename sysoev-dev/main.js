const list = ['почитать', 'помыть посуду', 'помыть машину', 'посадить цветы'];

function addTask(taskName) {
  list.push(taskName);
  console.log(`Задача ${taskName} добавлена в конец массива`);
}

function deleteTask() {
  const item = list.shift();
  console.log(`Удален элемент ${item} с начала массива`);
}

function showTasks() {
  for (const task of list) {
    console.log(task);
  }
}

addTask('test');
deleteTask();
showTasks();
