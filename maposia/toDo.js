const tasks = []
const STATUSES = ['To Do', 'In Progress', 'Done']
const PRIORITIES = ['low', 'medium', 'high']

function taskExist(name) {
  if (tasks.length > 0) {
    if (tasks.find((task) => task.name === name)) {
      return true
    } else {
      return false
    }
  }
}
// тут можно улучшить, соединить проверку приорити и статус в отдельную функцию
function correctStatus(status) {
  if (status && STATUSES.includes(status)) {
    return true
  } else {
    console.log(`Статус ${status} не существует`)
    return false
  }
}

function correctPriority(priority) {
  if (priority && PRIORITIES.includes(priority)) {
    return true
  } else {
    return false
  }
}

function addTask(name, status = 'To Do', priority = 'low') {
  if (taskExist(name)) {
    console.log('Такая задача уже существует')
    return
  }
  if (!correctStatus(status)) {
    return
  }
  if (!correctPriority(priority)) {
    return
  }

  tasks.push({ name, status, priority })
}

function delTask(name) {
  if (!taskExist(name)) {
    return
  }
  tasks.forEach((el, index) => {
    if (el.name === name) {
      console.log(`Задача ${name} удалена`)
      tasks.splice(index, 1)
    }
  })
}

function chageStatus(name, status) {
  if (!taskExist(name)) {
    return
  }
  if (!correctStatus(status)) {
    return
  }
  tasks.forEach((el) => {
    if (el.name === name) {
      el.status = status
    }
  })
}

function showList(status) {
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

function taskList() {
  showList('To Do')
  showList('In Progress')
  showList('Done')
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

taskList()

chageStatus('сон', 'In Progress')

taskList()
