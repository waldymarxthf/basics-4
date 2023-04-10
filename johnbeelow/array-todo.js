const STATUS = {
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
  TO_DO: 'To Do',
}

const ERROR = {
  NO_TASK: 'There is no such task in the list',
  IS_TASK: 'Such a task is already on the list',
  INCORRECT_INPUT: 'Incorrect input text',
}

const PRIORITY = {
  LOW: 'low',
  HIGH: 'high',
}

const list = [
  {
    name: 'create a post',
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.LOW,
  },
  {
    name: 'test',
    status: STATUS.DONE,
    priority: PRIORITY.HIGH,
  },
]

function checkInputName(inputValue) {
  return typeof inputValue === 'string'
}

function checkTask(taskName) {
  const check = list.filter((task) => task.name === taskName)

  if (check.length > 0) {
    return true
  }
}

function findIndexTask(taskName) {
  const indexValue = list.findIndex((task) => task.name === taskName)
  return indexValue
}

function addTask(taskName) {
  if (!checkInputName(taskName)) {
    console.log(ERROR.INCORRECT_INPUT)
    return
  }

  if (checkTask(taskName)) {
    console.log(ERROR.IS_TASK)
    return
  }

  list.push({
    name: taskName,
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.LOW,
  })
}

function changeStatus(taskName, statusName) {
  if (!checkInputName(taskName && statusName)) {
    console.log(ERROR.INCORRECT_INPUT)
    return
  }

  if (checkTask(taskName)) {
    list[findIndexTask(taskName)].status = statusName
    return
  }

  console.log(ERROR.NO_TASK)
}

function deleteTask(taskName) {
  if (!checkInputName(taskName)) {
    console.log(ERROR.INCORRECT_INPUT)
    return
  }

  if (checkTask(taskName)) {
    list.splice(findIndexTask(taskName), 1)
    return
  }

  console.log(ERROR.NO_TASK)
}

function showList() {
  let todo = ''
  let in_progress = ''
  let done = ''

  for (let taskName of list) {
    if (taskName.status === STATUS.TO_DO) {
      todo += '\n' + taskName.name
    } else if (taskName.status === STATUS.IN_PROGRESS) {
      in_progress += '\n' + taskName.name
    } else if (taskName.status === STATUS.DONE) {
      done += '\n' + taskName.name
    }
  }

  if (!todo) {
    todo = `\n -`
  } else if (!in_progress) {
    in_progress = `\n -`
  } else if (!done) {
    done = `\n -`
  }

  console.log(`${STATUS.TO_DO}:${todo}`)
  console.log(`${STATUS.IN_PROGRESS}:${in_progress}`)
  console.log(`${STATUS.DONE}:${done}`)
}

addTask('run run run')
changeStatus('test', STATUS.TO_DO)
deleteTask('run run run')

showList()
