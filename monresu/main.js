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
  displayStatus(status) {
    let tasks = '';
    for (const key in this.todos) {
      if (this.todos[key].toLowerCase() === status.toLowerCase()) {
        tasks += '\n    ' + key;
      }
    }
    console.log(status + ':', tasks ? tasks : '\n    -');
  },
  showList() {
    this.displayStatus('Todo');
    this.displayStatus('Done');
    this.displayStatus('In Progress');
  }
}

todoList.addTask('have a walk');
todoList.addTask('SLEEPY');
todoList.addTask('delete JSON from web');
todoList.deleteTask('drink tea');
todoList.changeStatus('delete JSON from web', 'Done');
todoList.showList()