const statuses = {
  TODO: 'ToDo',
  DONE: 'Done',
  IN_PROGRESS: 'In progress',
}

const priority = {
  HIGH: 'high',
  LOW: 'low',
  TEST: 'test',
}

const errors = {
  taskIsNotExists: 'Задачи не существует',
  taskIsExists: 'Задача уже существует',
  priorityIsNotExists: 'Такого приоритета не существует',
  statusIsNotExists: 'Такого статуса не существует',
}

const messages = {
  changeStatus: 'Статус задачи изменён',
  changePriority: 'Приоритет задачи изменён',
  addTask: 'Задача добавлена',
  deleteTask: 'Задача удалена',
}

const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'} 
];

function isEmpty(task) {
  return (task == '') || (task == '\n') || (task == '\r') || (task == '\0');
}

function taskIsExists(task) {
  return list.map(goal => goal.name).includes(task);
}

function indexOfTask(task) {
  return list.findIndex(goal => goal.name === task);
}

function priorityIsExists(prior) {
  return Object.values(priority).includes(prior);
}

function statusIsExists(stat) {
  return Object.values(statuses).includes(stat);
}

function addTask(task, stat = statuses.TODO, prior = priority.LOW) {
  if (taskIsExists(task)) {
    console.log(errors.isExists);
    return;
  }
  if (!priorityIsExists(prior)) {
    console.log(errors.priorityIsNotExists);
    return;
  }
  if (!statusIsExists(stat)) {
    console.log(errors.statusIsNotExists);
    return;
  }
  const goal = {
    name: task,
    status: stat,
    priority: prior
  };
  list.push(goal);
  console.log(messages.addTask)
}

function changeStatus(task, stat) {
  if (!taskIsExists(task)) {
    console.log(errors.taskIsNotExists);
    return;
  }
  if (!statusIsExists(stat)) {
    console.log(errors.statusIsNotExists);
    return;
  }
  const indexTask = indexOfTask(task);
  list[indexTask].status = stat;
  console.log(messages.changeStatus);
  return;
}

function changePriority(task, prior) {
  if (!taskIsExists(task)) {
    console.log(errors.taskIsNotExists);
    return;
  }
  if (!priorityIsExists(prior)) {
    console.log(errors.priorityIsNotExists);
    return;
  }
  const indexTask = indexOfTask(task);
  list[indexTask].priority = prior;
  console.log(messages.changePriority);
  return;
}

function deleteTask(task) {
  if (!taskIsExists(task)) {
    console.log(errors.taskIsNotExists);
    return;
  }
  const indexTask = indexOfTask(task);
  list.splice(indexTask, 1);
  console.log(messages.deleteTask);
  return;
}

function showList() {
  const priorities = Object.keys(priority); 

  const priorityLists = {}; 

  for (const p of priorities) {
    priorityLists[p] = list.filter(task => task.priority === priority[p]);
  }

  for (const stat in statuses) { 
    console.log(`------${stat}------`);
    for (const p of priorities) { 
      const taskList = priorityLists[p].filter(task => task.status === statuses[stat]); 
      for (const task of taskList) { 
        console.log(`\t${task.name}: ${task.priority} priority`);
      }
    }
  }
}



addTask('walk', 'Done', 'low')
addTask('okay', 'Done', 'high')
addTask('huy')
addTask('ok')
addTask('asad')
changePriority('asad', 'high')
changePriority('huy', 'test')
showList();
