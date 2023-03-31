const toDoList = {
  listTasks: {
    "Ознакомьтя с требованиями задачи": "done",
    "Создать файл js": "done",
    "Создать функции для выполнения задачи": "done",
    "Написать код для функций": "done",
    "Леч спать": "wait",
    "Проверить код, что-бы убедится что он работает правильно": "wait",
    "Отправить код на проверку": "wait",
  },

  check(task) {
    return task in this.listTasks ? task : "err";
  },

  changeStatus(task, status) {
    this.check(task);
    if (this.check(task) === "err") {
      return `Задачи "${task}" не существует`;
    }

    status = status.toLowerCase().trim();
    if (status === "done") {
      this.listTasks[task] = "done";
    } else if (status === "inprogress") {
      this.listTasks[task] = "inProgress";
    } else {
      return "Такого статуса не существует, используйте(inProgress или done)регистр не важен";
    }
  },

  addTask(task) {
    if (task === "") return;
    this.listTasks[task] = "wait";
  },

  deleteTask(task) {
    this.check(task);
    if (this.check(task) === "err") {
      return `Задачи "${task}" не существует`;
    }
    delete this.listTasks[task];
  },

  showListTasks() {
    const wait = [];
    const inProgress = [];
    const done = [];

    for (const key in this.listTasks) {
      if (this.listTasks[key] === "wait") {
        wait.push(key);
      } else if (this.listTasks[key] === "inProgress") {
        inProgress.push(key);
      } else if (this.listTasks[key] === "done") {
        done.push(key);
      }
    }

    return { wait, inProgress, done };
  },
};

toDoList.addTask("Отдыхать");
toDoList.addTask("Исправить код, если вернут на доработку");
toDoList.deleteTask("Леч спать");

toDoList.changeStatus(
  "Проверить код, что-бы убедится что он работает правильно",
  "done"
);
toDoList.changeStatus("Отправить код на проверку", "done");
toDoList.changeStatus("Отправить код на проверку", "done");

console.log(toDoList.changeStatus("Леч спать", "done"));
console.log(toDoList.deleteTask("Леч спать", "done"));

toDoList.changeStatus("Отдыхать", "inprogress");

console.log(toDoList.showListTasks());
