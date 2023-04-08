const STATUSES = {
  TO_DO: "To do",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

const PRIORITIES = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
};

const ALERTS = {
  ADD_TASK: "Added the task :",
  DELETE_TASK: "Deleted the task :",
};

const ERRORS = {
	ADD_ERROR: "ERROR! Add a task name!"
}

const toDo = [
  { name: "Clean up", status: STATUSES.TO_DO, priority: PRIORITIES.HIGH },
  { name: "Read", status: STATUSES.TO_DO, priority: PRIORITIES.HIGH },
  { name: "Watch a movie", status: STATUSES.IN_PROGRESS, priority: PRIORITIES.LOW },
  { name: "Sleep", status: STATUSES.DONE, priority: PRIORITIES.HIGH },
];

function addTask(task, priority) {
	if (task === false || typeof task === "number") {
		console.log(ERRORS.ADD_ERROR)
		return null
	} else {
		toDo.push({ name: task, status: "To do", priority });
		console.log(ALERTS.ADD_TASK + ` "${task}"`);
	}
}

function deleteTask(task) {
  const taskIndex = toDo.findIndex((item) => item.name === task);
  toDo.splice(taskIndex, 1);
  console.log(ALERTS.DELETE_TASK + ` "${task}"`);
}

function showToDo() {
  console.log(`\n----- All To Do List -----\n`);

  let toDolist = "";
  let toDoStatus = "";
  let inProgressStatus = "";
  let doneStatus = "";

  for (const task of toDo) {
    if (task.status === "To do") {
      toDoStatus += `\t\t${task.name} - ${task.priority} priority\n`;
    }
    if (task.status === "In progress") {
      inProgressStatus += `\t\t${task.name} - ${task.priority} priority\n`;
    }
    if (task.status === "Done") {
      doneStatus += `\t\t${task.name} - ${task.priority} priority\n`;
    }
  }

  toDolist = `To do:\n${toDoStatus}\nIn progress:\n${inProgressStatus}\nDone:\n${doneStatus}`;
  console.log(toDolist);
}

addTask(3, "High");
deleteTask("Read");

showToDo();