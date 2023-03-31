const toDoList = {
  listTasks: {
    "Ознакомьтя с требованиями задачи": "done",
    "Создать файл js": "done",
    "Создать функции для выполнения задачи": "done",
    "Написать код для функций": "done",
    "Леч спать": "waiting",
    "Проверить код, что-бы убедится что он работает правильно": "waiting",
    "Отправить код на проверку": "waiting",
  },

  check(task) {
    return task in this.listTasks ? task : "err";
  },

  changeStatus(task, status) {
    const checkedTask = this.check(task);
    if (checkedTask === "err") {
      return `Задачи "${task}" не существует`;
    }

    status = status.toLowerCase().trim();
    switch (status) {
      case "done":
        this.listTasks[checkedTask] = "done";
        break;
      case "inprogress":
        this.listTasks[checkedTask] = "inProgress";
        break;
      default:
        return "Такого статуса не существует, используйте (inProgress или done), регистр не важен";
    }
  },

  addTask(task) {
    if (!task) return;
    this.listTasks[task] = "waiting";
  },

  deleteTask(task) {
    const checkedTask = this.check(task);
    if (checkedTask === "err") {
      return `Задачи "${task}" не существует`;
    }
    delete this.listTasks[checkedTask];
  },

  showListTasks() {
    const waitingTasks = [];
    const inProgressTasks = [];
    const completedTasks = [];

    for (const key in this.listTasks) {
      switch (this.listTasks[key]) {
        case "waiting":
          waitingTasks.push(key);
          break;

        case "inProgress":
          inProgressTasks.push(key);
          break;

        case "done":
          completedTasks.push(key);
          break;
      }
    }

    return { waitingTasks, inProgressTasks, completedTasks };
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
