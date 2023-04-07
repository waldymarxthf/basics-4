const STATUS = {
  TO_DO: "To Do",
  IN_PROGRESS: "In Progress",
  DONE: "Done",
};

const PRIORITY = {
  HIGH: "High",
  LOW: "Low",
};

const ToDoList = [
  { name: "Create a post", status: STATUS.TO_DO, priority: PRIORITY.LOW },
  { name: "Test", status: STATUS.IN_PROGRESS, priority: PRIORITY.HIGH },
  { name: "Swimming", status: STATUS.TO_DO, priority: PRIORITY.LOW },
  { name: "Learning language", status: STATUS.TO_DO, priority: PRIORITY.HIGH },
];

const entryInToDoList = (entryTask) => {
  return ToDoList.find(
    (nameTask) => nameTask.name.toLowerCase() === entryTask.toLowerCase()
  );
};

const indexNameToDo = (indexName) => {
  return ToDoList.findIndex(
    (nameTask) => nameTask.name.toLowerCase() === indexName.toLowerCase()
  );
};

const addTaskToDo = (nameTask, status, priority) => {
  const entryTask = entryInToDoList(nameTask);
  const statusIncludes = ToDoList.includes(status);
  const priorityIncludes = ToDoList.includes(priority);
  if (entryTask !== undefined && statusIncludes && priorityIncludes) {
    console.log(`This task:\n\'${nameTask}\' already in ToDo.`);
  } else {
    ToDoList.push({
      name: nameTask,
      status: status,
      priority: priority,
    });
    console.log(
      `This task:\n\t\'${nameTask}\' \'${status}\' \'${priority}\' added.`
    );
  }
};

const editStatusToDo = (nameTask, statusNew, priorityNew) => {
  const entryTask = entryInToDoList(nameTask);
  const indexToDo = indexNameToDo(nameTask);
  if (indexToDo >= 0) {
    ToDoList[entryTask] = {
      name: nameTask,
      status: statusNew,
      priority: priorityNew,
    };
    ToDoList.splice(indexToDo, 1, ToDoList[entryTask]);
    console.log(
      `This task:\n\t\'${nameTask}\' \'${statusNew}\' \'${priorityNew}\' edited.`
    );
  } else {
    console.log(`This task \'${nameTask}\' doesn\'t exist. `);
  }
};

const showList = () => {
  for (const index of ToDoList) {
    console.log(index);
  }
};

addTaskToDo("test doing", STATUS.DONE, PRIORITY.HIGH);
showList();
editStatusToDo("Swimming", STATUS.TO_DO, PRIORITY.HIGH);
showList();
