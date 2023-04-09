const tasks = []
const taskAtr = {
  status: {
    TODO: 'To Do',
    INPROGRESS: 'In Progress',
    DONE: 'Done',
  },
  priority: {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
  },

  checkStatus(status) {
    return Object.values(this.status).includes(status)
  },
  checkPriority(priority) {
    return Object.values(this.priority).includes(priority)
  },
}

const MESSAGES = {
  ERROR: {
    TASKEXIST: 'Такая задача уже существует',
    STATUSINCORRECT: 'Введен некорректный статус',
    PRIORITYINCORRECT: 'Введен некорректный приоритет',
    TASKNOTFOUND: 'Такой задачи не существует',
  },
  SUCCESS: {
    ADDEDTASK: 'Задача успешно добавлена',
    DELETEDTASK: 'Задача успешно удалена',
  },
}

function isTaskExist(name) {
  if (tasks.length > 0) {
    if (tasks.find((task) => task.name === name)) {
      return true
    } else {
      return false
    }
  }
}

function isCorrectTaskAtr(attribute) {
  if (
    (attribute && taskAtr.checkStatus(attribute)) ||
    taskAtr.checkPriority(attribute)
  ) {
    return true
  } else {
    return false
  }
}

function listCreation(status) {
  const oneTypeStatus = tasks.filter((task) => {
    return task.status === status
  })
  console.log(status + ':')
  oneTypeStatus.forEach((el) => {
    console.log(
      `\t Task: ${el.name[0].toUpperCase() + el.name.slice(1)} | Status: ${
        el.status
      } | Priority: ${el.priority}`
    )
  })
}

function addTask(name, status = 'To Do', priority = 'low') {
  if (isTaskExist(name)) {
    console.log(MESSAGES.ERROR.TASKEXIST)
    return
  }
  if (!isCorrectTaskAtr(status)) {
    console.log(MESSAGES.ERROR.STATUSINCORRECT)
    return
  }
  if (!isCorrectTaskAtr(priority)) {
    console.log(MESSAGES.ERROR.STATUSINCORRECT)
    return
  }
  console.log(MESSAGES.SUCCESS.ADDEDTASK)
  tasks.push({ name, status, priority })
}

function delTask(name) {
  if (!isTaskExist(name)) {
    console.log(MESSAGES.ERROR.TASKNOTFOUND)
    return
  }
  tasks.forEach((el, index) => {
    if (el.name === name) {
      console.log(MESSAGES.SUCCESS.DELETEDTASK)
      tasks.splice(index, 1)
    }
  })
}

function chageStatus(name, status) {
  if (!isTaskExist(name)) {
    console.log(MESSAGES.ERROR.TASKNOTFOUND)
    return
  }
  if (!isCorrectTaskAtr(status)) {
    console.log(MESSAGES.ERROR.STATUSINCORRECT)
    return
  }
  tasks.forEach((el) => {
    if (el.name === name) {
      el.status = status
    }
  })
}

function changePriority(name, priority) {
  if (!isTaskExist(name)) {
    console.log(MESSAGES.ERROR.TASKNOTFOUND)
    return
  }
  if (!isCorrectTaskAtr(priority)) {
    console.log(MESSAGES.ERROR.PRIORITYINCORRECT)
    return
  }
  tasks.forEach((el) => {
    if (el.name === name) {
      el.priority = priority
    }
  })
}

function showList() {
  listCreation('To Do')
  listCreation('In Progress')
  listCreation('Done')
}

addTask('сон')

addTask('дартс')
addTask('сноуборд')
// console.log(tasks)

addTask('горы', 'In Progress', 'medium')
addTask('доктор', 'In Progress', 'medium')
addTask('купить воду', 'In Progress', 'medium')
addTask('сайт для компании', 'Done', 'medium')
addTask('Херпойми', 'Done', 'high')

delTask('доктор')
delTask('купить воду')

chageStatus('сон', 'In Progress')
changePriority('сайт для компании', 'low')
showList()
