const TO_DO = "To Do";
const DONE = "Done";
const IN_PROGRESS = "In Progress";
const ERROR = "Error! There is no such task";
const STATUS = "Status changed!";

const tasks = {
  list: {},

  changeStatus(task, status) {
    if (task in this.list === false) {
      console.log(ERROR);
    } else {
      this.list[task] = status;
    }
  },

  addTask(task, status) {
    this.list[task] = status;
  },

  deleteTask(task) {
    if (task in this.list === false) {
      console.log(ERROR);
    } else {
      delete this.list[task];
    }
  },

  showList() {
    let list = "";
    let toDo = "";
    let inProgress = "";
    let done = "";

    for (let status in this.list) {
      if (this.list[status] === TO_DO) {
        toDo += `\t \t"${status}" \n`;
      } else if (this.list[status] === IN_PROGRESS) {
        inProgress += `\t \t"${status}" \n`;
      } else if (this.list[status] === DONE) {
        done += `\t \t"${status}" \n`;
      }
    }

    if (toDo === "") {
      toDo = "\t -\n";
    }
    if (inProgress === "") {
      inProgress = "\t -\n";
    }
    if (done === "") {
      done = "\t -\n";
    }

    list = ` Todo: \n${toDo} In Progress: \n${inProgress} Done: \n${done}`;
    console.log(list);
  },
};

tasks.addTask("Write a post", TO_DO);
tasks.addTask("Clean up", TO_DO);
tasks.changeStatus("Write a post", DONE);
tasks.addTask("Create a new practice task", TO_DO);
tasks.changeStatus("Create a new practice task", IN_PROGRESS)
tasks.deleteTask("Write a post")

tasks.showList();
