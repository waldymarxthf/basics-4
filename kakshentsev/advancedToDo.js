const progress = "In Progress";
const done = "Done";
const toDo = "To Do";
const statuses = [progress, done, toDo];

const list = [
  {
    task: "create a new practice task",
    status: progress,
    priority: "Low",
  },
  { task: "make a bed", status: progress, priority: "Low" },
  { task: "write a post", status: progress, priority: "Low" },
];

function addTask(task, status, priority) {
  list.push({ task, status, priority });
}

function changeStatus(task, status) {
  let newTask = list.findIndex((name) => name.task === task);
  if (newTask && statuses.includes(status)) {
    list[newTask].status = status;
  } else {
    console.log("We ask you to enter valid data");
  }
}

function deleteTask(task) {
  let completedTask = list.findIndex((name) => name.task === task);
  list.splice(completedTask, 1);
}

function showList() {
  list.forEach((name) => {
    console.log(name.task + " : " + name);
  });
}

showList();
