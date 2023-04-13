const STATUS = {
  TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

const PRIORITY = {
  HIGH: "High",
  LOW: "Low",
};

const invalidData = "We ask you to enter valid data";

const list = [
  {
    task: "create a new practice task",
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.LOW,
  },
  { task: "make a bed", status: STATUS.IN_PROGRESS, priority: "low" },
  { task: "write a post", status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH },
];

const validations = {
  isNameValid(task) {
    return !!task;
  },
  isStatusValid(status) {
    return Object.values(STATUS).includes(status);
  },
  isPriorityValid(prioritiy) {
    return Object.values(PRIORITY).includes(prioritiy);
  },
};

function addTask(task, status = STATUS.TO_DO, priority = PRIORITY.LOW) {
  if (!validations.isNameValid(task)) {
    console.log(invalidData + `incorrect name ${task}`);
    return;
  }
  if (!validations.isStatusValid(status)) {
    console.log(invalidData + `incorrect status ${status}`);
    return;
  }
  if (!validations.isPriorityValid(priority)) {
    console.log(invalidData + ` incorrect priority ${priority}`);
    return;
  }
  list.push({
    task,
    status,
    priority,
  });
}

function changeStatus(task, status) {
  if (!validations.isStatusValid(status)) return null;

  let newTask = list.findIndex((name) => name.task === task);
  if (newTask) {
    list[newTask].status = status;
    return true;
  } else {
    console.log(invalidData);
    return false;
  }
}

function deleteTask(task) {
  let completedTask = list.findIndex((name) => name.task === task);
  if (completedTask !== -1) {
    list.splice(completedTask, 1);
    return true;
  }
  console.log(invalidData);
  return false;
}

function showList() {
  const toDoList = list.filter((name) => name.status === STATUS.TO_DO);
  console.log("To Do:");
  if (toDoList.length !== 0) {
    toDoList
      .filter((task) => task.priority === PRIORITY.HIGH)
      .forEach((name) => console.log(name.task + ": " + name.priority));
    toDoList
      .filter((task) => task.priority === PRIORITY.LOW)
      .forEach((name) => console.log(name.task + ": " + name.priority));
  } else {
    console.log("No tasks");
  }
  console.log();

  const inProgressList = list.filter(
    (name) => name.status === STATUS.IN_PROGRESS
  );
  console.log("In progress:");
  if (inProgressList.length !== 0) {
    inProgressList
      .filter((task) => task.priority === PRIORITY.HIGH)
      .forEach((name) => console.log(name.task + ": " + name.priority));
    inProgressList
      .filter((task) => task.priority === PRIORITY.LOW)
      .forEach((name) => console.log(name.task + ": " + name.priority));
  } else {
    console.log("No tasks");
  }
  console.log();

  const doneList = list.filter((name) => name.status === STATUS.DONE);
  console.log("Done:");
  if (doneList.length !== 0) {
    doneList
      .filter((task) => task.priority === PRIORITY.HIGH)
      .forEach((name) => console.log(name.task + ": " + name.priority));
    doneList
      .filter((task) => task.priority === PRIORITY.LOW)
      .forEach((name) => console.log(name.task + ": " + name.priority));
  } else {
    console.log("No done tasks");
  }
  console.log();
}

deleteTask("some task");
showList();
