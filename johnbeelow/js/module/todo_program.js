export const STATUS = {
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
}

export const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
}

export const toDoList = []

export const checkInputValue = (inputValue) =>
  !inputValue || inputValue.trim() === ''

export const checkTask = (taskName) =>
  toDoList.find((task) => task.name === taskName)

export const findIndexTask = (taskName) =>
  toDoList.findIndex((task) => task.name === taskName)

export const addTask = (taskName, taskPriority) => {
  if (checkInputValue(taskName) || checkTask(taskName)) return

  toDoList.push({
    name: taskName,
    status: STATUS.IN_PROGRESS,
    priority: taskPriority,
  })
}

export const changeStatus = (taskName, statusName) =>
  checkTask(taskName) && (toDoList[findIndexTask(taskName)].status = statusName)

export const deleteTask = (taskName) => {
  toDoList.splice(findIndexTask(taskName), 1)
}
