const progressTask = "In Progress";
const statusTask = "Done";
const toDoTask = "To Do";
const nothingTask = "Nothing is done";
let stringEmpty = ""; // ,базовая строка для сравнения наличия задач

const ToDoList = {
  list: {
    "create a new practice task": progressTask,
    "make a bed": toDoTask,
    "write a post": toDoTask,
    "learning day task": progressTask,
  },
  addTask(name, status) {
    if (name !== stringEmpty && name !== null && name !== undefined) {
      if (name in this.list && Object.values(this.list).includes(status)) {
        console.log(`This task:\n${name} ${status} already done.`);
      } else {
        console.log(`This task:\n${name} ${status} added.`);
        this.list[name] = status;
      }
    } else {
      console.log(`Incorrect name format:\n ${name} \n`);
    }
  },
  deleteTask(name) {
    if (name in this.list) {
      delete this.list[name];
      console.log(`This task:\n${name} deleted.`);
    } else {
      console.log(`${name} doesn't exist in the database.`);
    }
  },
  editTask(name, status) {
    if (name in this.list || Object.values(this.list).includes(status)) {
      console.log(`This task:\n${name} ${status} edited.`);
    }
    this.list[name] = status;
  },
  ShowListTodo() {
    console.log(this.list);
  },
};

ToDoList.ShowListTodo();
