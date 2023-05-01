export function taskManager() {
  const taskList = []

  function setTaskID() {
    while (true) {
      let id = Math.floor(Math.random() * 10 ** 6).toString(16)
      if (taskList.find((task) => task.id === id)) continue;
      return id;
    }
  }

  return {
    addTask(taskName, priority) {
      const task = {
        id: setTaskID(),
        name: taskName,
        priority: priority,
        status: "TO DO",
      }
      taskList.push(task);
    },
    changeStatus(id, status) {
      const task = taskList.find(task => task.id === id)
      task.status = status
    },
    deleteTask(id) {
      const taskIndex = taskList.findIndex(task => task.id === id)

      if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1)
      }
    },
    getTaskList() {
      return taskList;
    }
  }
}

