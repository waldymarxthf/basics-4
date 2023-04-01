const tab = " ".repeat(4);

const taskManager = {
  list: {},

  availableStatuses: {
    "To do": true,
    "In Progress": true,
    Done: true,
  },

  validation: {
    isValidString(str) {
      if (!(typeof str === "string" && str.length > 0)) {
        console.log("Invalid input. Try again.");
        return false;
      }
      return true;
    },

    isTaskExist(list, task, should = true) {
      if (should && !list[task]) {
        console.log("No such task in the list.");
        return false;
      }
      if (!should && list[task]) {
        console.log("The task is already in the list.");
        return false;
      }
      return true;
    },

    isStatusAvailable(availableStatuses, status) {
      if (!availableStatuses[status]) {
        console.log("This status is not available.");
        return false;
      }
      return true;
    },

    isSameStatuses(list, task, status) {
      if (list[task] === status) {
        console.log("The status is the same.");
        return false;
      }
      return true;
    },
  },

  changeStatus(task, status) {
    const isValid =
      this.validation.isValidString(task) &&
      this.validation.isValidString(status) &&
      this.validation.isTaskExist(this.list, task) &&
      this.validation.isStatusAvailable(this.availableStatuses, status) &&
      this.validation.isSameStatuses(this.list, task, status);

    if (isValid) this.list[task] = status;
  },

  addTask(task, status = "To do") {
    const isValid =
      this.validation.isValidString(task) &&
      this.validation.isValidString(status) &&
      this.validation.isTaskExist(this.list, task, false) &&
      this.validation.isStatusAvailable(this.availableStatuses, status);

    if (isValid) taskManager.list[task] = status;
  },

  deleteTask(task) {
    const isValid = this.validation.isTaskExist(this.list, task);

    if (isValid) delete this.list[task];
  },

  showStatus(status) {
    const isValid =
      this.validation.isValidString(status) &&
      this.validation.isStatusAvailable(this.availableStatuses, status);
    
      if (!isValid) return;

    console.log(`${status}:`);
    let isEmpty = true;
    for (let task in this.list) {
      if (this.list[task] === status) {
        console.log(`${tab}"${task}"`);
        isEmpty = false;
      }
    }
    if (isEmpty) console.log(`${tab}-`);
  },

  showList() {
    for (const status in this.availableStatuses) {
      this.showStatus(status)
    }
  },
};

taskManager.addTask("Listen to Techno");
taskManager.addTask("Listen to House");
taskManager.changeStatus("Listen to Techno", "In Progress");
taskManager.deleteTask("Listen to House");
taskManager.addTask("Drink a cup of coffee");
taskManager.changeStatus("Drink a cup of coffee", "Done");
taskManager.deleteTask("Drink a cup of coffee");
