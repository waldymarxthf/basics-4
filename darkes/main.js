const STATUS = {
   TODO: 'To Do',
   DONE: 'Done',
   INPROGRESS: 'In Progress'
}

const list = {
   "create a new practice task": STATUS.INPROGRESS,
   "make a bed": STATUS.DONE,
   "write a post": STATUS.TODO,
}

function addTask(task, status = STATUS.TODO) {
   if (status === STATUS.DONE
      || status === STATUS.INPROGRESS
      || status === STATUS.TODO) {
      list[task] = status;
   }
}

function deleteTask(task) {
   if (task in list) {
      delete list[task];
   }
}

function changeStatus(task, status) {
   if (task in list
      && status === STATUS.DONE
      || status === STATUS.INPROGRESS
      || status === STATUS.TODO) {
      list[task] = status;
   }
}

function checkTask(status) {

   let checkData = '';

   for (const task in list) {
      if (list[task] === status) {
         checkData += '\t' + task + '\n';
      }
   }

   if (checkData) {
      console.log(`${status}: \n${checkData}`);
   } else {
      console.log(`${status}: \n\t -\n`);
   }
}

function showTask() {
   checkTask(STATUS.DONE);
   checkTask(STATUS.TODO);
   checkTask(STATUS.INPROGRESS);
}

addTask('have a walk');
changeStatus("write a post", "Done");
deleteTask('have a walk');
showTask();