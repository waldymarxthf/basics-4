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
    let inToDo = ''
    let inProgress = ''
    let isDone = ''
    for (task in this) {
      if (typeof this[task] === 'string') {
        if (this[task] === 'To Do') {
          inToDo += task + '\n'
        }
        if (this[task] === 'In Progress') {
          inProgress += task + '\n'
        }
        if (this[task] === 'Done') {
          isDone += task + '\n'
        }
      }
    }

    if (inToDo === '') {
      console.log('в To Do ниего нет')
    } else {
      console.log('Todo:\n' + inToDo)
    }
    if (inProgress == '') {
      console.log('in Progress ничего нет\n')
    } else {
      console.log('in Progress:\n' + inProgress)
    }
    if (isDone === '') {
      console.log('в Done ничего нет')
    } else {
      console.log('Done:\n' + isDone)
    }
  },
}

toDoList.addTask('Тренировка в 12')
toDoList.addTask('Изучить React')
toDoList.addTask('Съездить в горы')
toDoList.addTask('Заменить десктоп')
toDoList.addTask('Купить витамины')

toDoList.changeStatus('Тренировка в 12', 'In Progress')
toDoList.changeStatus('Тренировка в 12', 'Done')
toDoList.changeStatus('Съездить в горы', 'Done')

toDoList.deleteTask('Заменить десктоп')

toDoList.showList()
