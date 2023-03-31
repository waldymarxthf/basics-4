const list = {
  'create a new practice task': 'In Progress',
  'make a bed': 'Done',
  'write a post': 'To Do',
  'test': 'To Do',
};

const TODO_STATUSES = {
  TODO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
  DEFAULT_STATUS: 'To Do',
};

const ERROR_STATUSES = {
  EXISTS: 'The task exists',
  NOT_FOUND: 'Task not found',
};

function checkTask(taskName) {
  return taskName in list;
}

function addTask(taskName) {
  if (checkTask(taskName)) {
    return console.log(ERROR_STATUSES.EXISTS);
  }

  list[taskName] = TODO_STATUSES.DEFAULT_STATUS;
}

function changeStatus(taskName, newStatus) {
  if (!checkTask(taskName)) {
    return console.log(ERROR_STATUSES.NOT_FOUND);
  }

  list[taskName] = newStatus;
}

function deleteTask(taskName) {
  if (!checkTask(taskName)) {
    return console.log(ERROR_STATUSES.NOT_FOUND);
  }

  delete list[taskName];
}

function showList() {
  let strToDo = '';
  let strInProgress = '';
  let strDone = '';

  for (const name in list) {
    switch (list[name]) {
      case TODO_STATUSES.TODO:
        strToDo += '\n   ' + name;
        break;
      case TODO_STATUSES.IN_PROGRESS:
        strInProgress += '\n   ' + name;
        break;
      case TODO_STATUSES.DONE:
        strDone += '\n   ' + name;
        break;
      default:
        break;
    }
  }

  strToDo = strToDo || '\n   -';
  strInProgress = strInProgress || '\n   -';
  strDone = strDone || '\n   -';

  console.log(`Todo: ${strToDo}`);
  console.log(`In Progress: ${strInProgress}`);
  console.log(`Done: ${strDone}`);
}

changeStatus('make a bed', TODO_STATUSES.TODO);
changeStatus('test', TODO_STATUSES.IN_PROGRESS);
deleteTask('make a bed');
changeStatus('write a post', TODO_STATUSES.DONE);
showList();
