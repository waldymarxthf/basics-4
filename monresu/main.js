const todoList = {
	todos: {
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
    console.log('Todo:');
    let c = 0;
    for (key in this.todos) {
      if (this.todos[key].toLowerCase() == 'todo') {
        console.log('    ', key);
        c++;
      }
    }
    if (c == 0) console.log('    -')
    c = 0;
    console.log('In Progress:');
    for (key in this.todos) {
      if (this.todos[key].toLowerCase() == 'in progress') {
        console.log('    ', key);
        c++;
      }
    }
    if (c == 0) console.log('    -')
    c = 0
    console.log('Done:');
    for (key in this.todos) {
      if (this.todos[key].toLowerCase() == 'done') {
        console.log('    ', key);
        c++;
      }
    }
    if (c == 0) console.log('    -')
  }
}

todoList.addTask('have a walk');
todoList.addTask('SLEEPY');
todoList.addTask('delete JSON from web');
todoList.deleteTask('drink tea');
todoList.showList()