export const STATUS = {
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
}

export const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
}

export const toDoList = []

export function checkInputValue(inputValue) {
  if (!inputValue || inputValue.trim() === '') {
    return true;
  } 
}

export function checkTask(taskName) {
  const check = toDoList.find((task) => task.name === taskName)
  if (check) {
    return true
  }
}

export function findIndexTask(taskName) {
  const indexValue = toDoList.findIndex((task) => task.name === taskName)
  return indexValue
}

export function addTask(taskName, taskPriority) {
  if (checkInputValue(taskName)) {
    return
  }

  if (checkTask(taskName)) {
    return
  }

  toDoList.push({
    name: taskName,
    status: STATUS.IN_PROGRESS,
    priority: taskPriority,
  })
}

export function changeStatus(taskName, statusName) {
  if (checkTask(taskName)) {
    toDoList[findIndexTask(taskName)].status = statusName
    return
  }
}

export function deleteTask(taskName) {
  if (checkInputValue(taskName)) {
    return
  }

  if (checkTask(taskName)) {
    toDoList.splice(findIndexTask(taskName), 1)
    return
  }
}
