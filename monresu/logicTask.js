const statuses = {
  TODO: 'ToDo',
  DONE: 'Done',
}

const priority = {
  HIGH: 'high',
  LOW: 'low',
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

const list = [];

const isEmpty = (task) => { return !task.trim(); };

function isTaskExists(task) {
  return list.map(goal => goal.name).includes(task);
}

function indexOfTask(task) {
  return list.findIndex(goal => goal.name === task);
}

function isPriorityExists(prior) {
  return Object.values(priority).includes(prior);
}

function isStatusExists(stat) {
  return Object.values(statuses).includes(stat);
}

function addTask(task, stat = statuses.TODO, prior = priority.LOW) {
  event.preventDefault();
  try {
    if (isTaskExists(task)) {
      throw new Error('Такая задача уже есть!');
    }
    const goal = {
      name: task,
      status: stat,
      priority: prior
    };
    list.push(goal);
    console.log(messages.addTask)
    render()
  } catch(err) {
    if (err.name == 'Error') {
      alert(err.message);
    }
  }
}

function changeStatus(task, stat) {
  if (!isTaskExists(task)) {
    alert(errors.taskIsNotExists);
    return;
  }
  if (!isStatusExists(stat)) {
    console.log(errors.statusIsNotExists);
    return;
  }
  const indexTask = indexOfTask(task);
  list[indexTask].status = stat;
  console.log(messages.changeStatus);
  render();
  return;
}

function changePriority(task, prior) {
  if (!isTaskExists(task)) {
    console.log(errors.taskIsNotExists);
    return;
  }
  if (!isPriorityExists(prior)) {
    console.log(errors.priorityIsNotExists);
    return;
  }
  const indexTask = indexOfTask(task);
  list[indexTask].priority = prior;
  console.log(messages.changePriority);
  return;
}

function deleteTask(task) {
  if (!isTaskExists(task)) {
    console.log(errors.taskIsNotExists);
    return;
  }
  const indexTask = indexOfTask(task);
  list.splice(indexTask, 1);
  console.log(messages.deleteTask);
  return;
}

