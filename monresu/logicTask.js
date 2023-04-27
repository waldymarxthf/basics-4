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

/* Добавление задачи в массив */
function addTask(task, stat = statuses.TODO, prior = priority.LOW) {
  event.preventDefault();
  try {
    if (isTaskExists(task)) {
      throw new Error('Такая задача уже есть!');
    }
    if (isEmpty(task)) {
      throw new Error('Вы пытаетесь добавить пустую задачу!');
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

/* Удаление задачи из массива */
function removeTask(task) {
  if (!isTaskExists(task)) {
    console.log(errors.taskIsNotExists); // ошибка для разработчика (у пользователя ее возникнуть не может)
    return;
  }
  const indexTask = indexOfTask(task);
  list.splice(indexTask, 1);
  return;
}

/* Изменение статуса задачи */
function changeStatus(task, stat) {
  if (!isTaskExists(task)) {
    console.log(errors.taskIsNotExists); // ошибка для разработчика
    return;
  }
  if (!isStatusExists(stat)) {
    console.log(errors.statusIsNotExists); // ошибка для разработчика 
    return;
  }
  const indexTask = indexOfTask(task);
  list[indexTask].status = stat;
  render();
  return;
}

