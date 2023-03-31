const errorNotTask = 'Sorry! Такой задачи нет!'

const todoList = {
	todos: {
    'sleep': 'ToDo',
  },
  changeStatus(task, text) {
    if (task in this.todos == false) {
      console.log(errorNotTask)
    }
    else {
      this.todos[task] = text;
      console.log('Task was изменена')
    }
  },
  addTask(task, status = 'todo') {
    if (task in this.todos == true) {
      console.log('Sorry! Такая задача уже в наличии')
    }
    else {
      this.todos[task] = status;
      console.log('Task was добавлена')
    }
  },
  deleteTask(task) {
    if (task in this.todos == false) {
      console.log(errorNotTask)
    }
    else {
      delete this.todos[task];
      console.log('Complete! Task was удалена')
    }
  },
  showList() {
    let todo = '';
    let done = '';
    let inprogress = '';
    for (const key in this.todos) {
      switch (this.todos[key].toLowerCase()) {
        case 'done':
          done += '\n    ' + key;
          break;
        case 'todo':
          todo += '\n    ' + key;
          break;
        case 'inprogress':
          inprogress += '\n    ' + key;
          break;
        default:
          break;
      }
    }
    console.log('Todo:', todo ? todo: '\n   -')
    console.log('Done:', done ? done: '\n   -')
    console.log('In progress:', inprogress ? inprogress: '\n   -')
  }
}

todoList.addTask('have a walk');
todoList.addTask('SLEEPY');
todoList.addTask('delete JSON from web');
todoList.deleteTask('drink tea');
todoList.changeStatus('delete JSON from web', 'Done');
todoList.showList()