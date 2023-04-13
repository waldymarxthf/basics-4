/*
Переписать TODO на объектах. Хранить все “задачи” в массиве и использовать 
методы массива чтобы добавлять, удалять, менять и выводить задачи. 
Или написать новую программу, но с точно такой же функциональностью как в задаче “Практика ToDo”
*/

const status = {
  inprogress: "in progress",
  todo: "to do",
  done: "done",
  };
  
  const priority = {
  low: "low",
  average: "average",
  high: "high"
  };
  
  const list = [
  { name: "create a post", status: status.inprogress, priority: priority.low },
  { name: "test", status: status.done, priority: priority.high },
  ];
  
  function changestatus(taskName, newStatus) {
  list.find((task) => {
  if (task.name === taskName) {
  task.status = newStatus;
  }
  });
  }
  
  function addtask(taskName, taskPriority) {
  if (!list.find((task) => task.name === taskName)) {
  list.push({ name: taskName, status: status.inprogress, priority: taskPriority });
  }
  }
  
  function deletetask(taskName) {
  const index = list.findIndex((task) => task.name === taskName);
  if (index >= 0) {
  list.splice(index, 1);
  }
  }
  
  function showlistwithstatus(status) {
  const filteredlist = getlistwithstatus(status);
  if (!filteredlist.length) {
  console.log("\t-");
  return;
  }
  filteredlist.forEach((list) =>
  console.log(`\t${list.name}\tpriority: ${list.priority}`)
  );
  }
  
  function showstatus(status) {
  console.log(`${status}:`);
  }
  
  function getlistwithstatus(status) {
  return list.filter((task) => task.status === status);
  }
  
  function showlist() {
  showstatus(status.done);
  showlistwithstatus(status.done);
  showstatus(status.inprogress);
  showlistwithstatus(status.inprogress);
  showstatus(status.todo);
  showlistwithstatus(status.todo);
  }
  
  changestatus(list[1].name, status.inprogress);
  deletetask(list[1].name);
  addtask("dinner", priority.low);
  changestatus(list[1].name, status.todo);
  addtask("new task", priority.low);
  showlist();