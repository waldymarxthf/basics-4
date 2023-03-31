const todoList = {
	todos: {
    'learn KISS': 'In progress',
    'drink cofee': 'Done',
    'drink tea': 'Done',
    'sleep': 'ToDo',
  },
  changeStatus(task, text) {
    if (task in this.todos == false) {
      console.log('Sorry! Такой задачи нет!')
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
      console.log('Sorry! Такой задачи нет!')
    }
    else {
      delete this.todos[task];
      console.log('Complete! Task was удалена')
    }
  },
  showList() {
    const todo = Object.keys(this.todos).filter(key => this.todos[key].toLowerCase() === 'todo');
    const inprogress = Object.keys(this.todos).filter(key => this.todos[key].toLowerCase() === 'in progress');
    const done = Object.keys(this.todos).filter(key => this.todos[key].toLowerCase() === 'done');
  
    console.log('Todo:');
    console.log(todo.length > 0 ? todo.join('\n') : '-');
    console.log('In Progress:');
    console.log(inprogress.length > 0 ? inprogress.join('\n') : '-');
    console.log('Done:');
    console.log(done.length > 0 ? done.join('\n') : '-');
  }
}

todoList.changeStatus("sleep", "Done")
todoList.changeStatus("qwerty", "Done")
todoList.addTask('have a walk');
todoList.addTask('SLEEPY');
todoList.addTask('delete JSON from web');
todoList.deleteTask('drink tea');
todoList.showList