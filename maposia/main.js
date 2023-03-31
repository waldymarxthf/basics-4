const toDoList = {
  addTask(name) {
    this[name] = 'To Do'
  },
  changeStatus(name, status) {
    if (this[name] !== status) {
      switch (status) {
        case 'To Do':
          this[name] = status
          break
        case 'In Progress':
          this[name] = status
          break
        case 'Done':
          this[name] = status
          break
        default:
          console.log(
            'Не верное значение статуса. Используйте: To Do, In Progress, Done'
          )
      }
    } else {
      console.log('Данный статус уже установлен')
    }
  },
  deleteTask(name) {
    for (key in this) {
      if (key === name) {
        delete this[key]
      }
    }
  },
  showList() {
    console.log(``)
  },
}

toDoList.addTask('Тренировка в 12')

toDoList.changeStatus('Тренировка в 12', 'To Do')
toDoList.deleteTask('Тренировка в 12')
console.log(toDoList)
