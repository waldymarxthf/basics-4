const STATUS = {
  IN_PROGRESS: "In Progress",
  DONE: "Done",
  TO_DO: "To Do",
};

const ERORR = {
  NO_TASK: "There is no such task in the list",
  IS_TASK: "Such a task is already on the list",
};

const PRIORITY = {
  LOW: "low",
  HIGHT: "high",
};

const list = [
  {
    name: "create a post",
    status: STATUS.IN_PROGRESS,
    priority: PRIORITY.LOW,
  },
  {
    name: "test",
    status: STATUS.DONE,
    priority: PRIORITY.HIGHT,
  },
];

function checkTask(taskName) {
  let check = list.filter((task) => task.name === taskName);
  if (check.length > 0) {
    return true;
  }
}

function indexTask(taskName) {
  let indexValue = list.findIndex((task) => task.name === taskName);
  return indexValue;
}

function addTask(taskName) {
  if (checkTask(taskName)) {
    console.log(ERORR.IS_TASK);
  } else {
    list.push({
      name: taskName,
      status: STATUS.IN_PROGRESS,
      priority: PRIORITY.LOW,
    });
  }
}

function changeStatus(taskName, statusName) {
  if (checkTask(taskName)) {
    list[indexTask(taskName)].status = statusName;
  } else {
    console.log(ERORR.NO_TASK);
  }
}

function deleteTask(taskName) {
  if (checkTask(taskName)) {
    list.splice(indexTask(taskName), 1);
  } else {
    console.log(ERORR.NO_TASK);
  }
}

function showList() {
  let todo = "";
  let in_progress = "";
  let done = "";

  for (let taskName of list) {
    if (taskName.status === STATUS.TO_DO) {
      todo += "\n" + taskName.name;
    } else if (taskName.status === STATUS.IN_PROGRESS) {
      in_progress += "\n" + taskName.name;
    } else if (taskName.status === STATUS.DONE) {
      done += "\n" + taskName.name;
    }
  }

  if (!todo) {
    todo = `\n -`;
  } else if (!in_progress) {
    in_progress = `\n -`;
  } else if (!done) {
    done = `\n -`;
  }

  console.log(`${STATUS.TO_DO}:${todo}`);
  console.log(`${STATUS.IN_PROGRESS}:${in_progress}`);
  console.log(`${STATUS.DONE}:${done}`);
}

addTask("run run run");
changeStatus("test", STATUS.TO_DO);
deleteTask("run run run");

showList();
