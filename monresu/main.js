const todoList = [];

const error = 'Something went wrong!';

function isValid(task) {
  const validation = !(task == '\0') || !(task == '\n') || !(task == '\r') || !(task == '');
  return validation;
}

function inTodo(task) {
  return todoList.includes(task);
}

function add(task) {
  if (!isValid(task) || inTodo(task)) {
    console.log(error);
    return;
  }
  todoList.push(task);
}

function del(task) {
  if (!isValid(task) || !inTodo(task)) {
    console.log(error)
    return;
  }
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i] == task) {
      todoList.splice(i, 1);
      break;
    }
  };
}

function showList() {
  for (const task of todoList) {
    console.log(task);
  }
}

add('Поспать!');
del('Пока кать!');
add('Попить чаю!');
del('Попить чаю!');

showList();
