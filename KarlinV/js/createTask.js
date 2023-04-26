import { setTasksLocalStorage } from "./localStorage.js";
const KEY_LOCAL_STORAGE = "taskUser";

export function createTasks(tasks) {
  const highList = document.querySelector("#high-list");
  const lowList = document.querySelector("#low-list");
  highList.innerHTML = "";
  lowList.innerHTML = "";

  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    const taskCheckBoxContainer = document.createElement("div");
    const taskInputCheckbox = document.createElement("input");
    const taskLabelCheckBox = document.createElement("label");
    const taskButtonDelete = document.createElement("button");
    const taskItemScreen = document.createElement("div");

    taskItem.classList.add("todo__item");
    taskCheckBoxContainer.classList.add("todo__check");
    taskButtonDelete.classList.add("todo__btn-delete-item");
    taskItemScreen.classList.add("todo__item-screen");

    taskInputCheckbox.type = "checkbox";
    taskInputCheckbox.name = task.id;
    taskInputCheckbox.id = task.id;

    taskLabelCheckBox.for = task.id;
    taskLabelCheckBox.textContent = task.name;

    taskItem.addEventListener("click", () => {
      const task = tasks.find((task) => task.id === taskInputCheckbox.id);

      if (taskItem.classList.contains("checked")) {
        taskItem.classList.remove("checked");
        taskInputCheckbox.removeAttribute("checked");

        if (task && task.done !== undefined) {
          task.done = false;
          setTasksLocalStorage(KEY_LOCAL_STORAGE, tasks);
        }
      } else {
        taskItem.classList.add("checked");
        taskInputCheckbox.setAttribute("checked", "");

        if (task && task.done !== undefined) {
          task.done = true;
          setTasksLocalStorage(KEY_LOCAL_STORAGE, tasks);
        }
      }
    });

    taskButtonDelete.addEventListener("click", () => {
      const index = tasks.findIndex((task) => task.id === taskInputCheckbox.id);

      taskItem.remove();
      tasks.splice(index, 1);
      setTasksLocalStorage(KEY_LOCAL_STORAGE, tasks);
    });

    taskCheckBoxContainer.append(taskInputCheckbox);
    taskItem.append(taskCheckBoxContainer);
    taskItem.append(taskLabelCheckBox);
    taskItem.append(taskButtonDelete);
    taskItem.append(taskItemScreen);

    if (task.status === "high") {
      highList.append(taskItem);
    } else {
      lowList.append(taskItem);
    }

    if (task.done) {
      taskItem.classList.add("checked");
      taskInputCheckbox.setAttribute("checked", "");
    }
  });
}
