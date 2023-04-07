'use strict';

const colorText = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  closed: '\x1b[0m',   
}

const taskStatus = {
  done: 'Выполнено',
  todo: 'Нужно сделать', 
  inProgress: 'В процессе',
}

const taskPriority = {
  high: 'Высокий',
  medium: 'Средний',
  low: 'Низкий',
}

const errorMessage = {

};

const toDoList = [
  {name: 'Сходить в зал', status: taskStatus.done, priority: taskPriority.medium}, 
  {name: 'Strada', status: taskStatus.inProgress, priority: taskPriority.high},
];

function changeStatus(taskName, status, priority) {
  if (typeof taskName === 'string' && typeof status === 'string' && typeof priority === 'string') {
    let searchObj = toDoList.find(task => task.name === taskName);
    searchObj.status = status;
    searchObj.priority = priority;
    
    console.log(`\nЗадача ${colorText.green}"${taskName}"${colorText.closed} успешно изменена!`);
    console.log(`\tСтатус задачи: ${colorText.green}${status}${colorText.closed}\n \tПриоритет задачи: ${colorText.green}${priority}${colorText.closed} }`);
  }
}

function addTask(taskName, status = 'Не задано', priority = 'Не задано') {
  if (typeof taskName === 'string' && typeof status === 'string' && typeof priority === 'string') {
    toDoList.push({name: taskName, status: status, priority: priority,});
    
    console.log(`Задача "${taskName}" успешно добавлена в список! {`);
    console.log(`\tСтатус задачи: ${status}\n \tПриоритет задачи: ${priority} }`);
  }
}

function deleteTask(taskName) {
  if (typeof taskName === 'string') {
    let index = toDoList.findIndex(task => task.name === taskName);
    toDoList.splice(index, 1);

    console.log(`Задача "${taskName}" успешно удалена!`)
  }
}

function showList(list) {
  console.log('Список задач:');
  console.log('-------------------------');
  list.forEach((task, he) => {
    console.log(`[${he}] ${task.name} - ${task.status}, ${task.priority}`);
  });
  console.log('-------------------------');
}

showList(toDoList);


// console.log(toDoList);