import { createTasks } from "./createTask.js";
import { setTasksLocalStorage, getTasksLocalStorage } from "./localStorage.js";

const KEY_LOCAL_STORAGE = "taskUser";

const forms = document.querySelectorAll(".todo__add-group");

let tasks = getTasksLocalStorage(KEY_LOCAL_STORAGE) || [];

function generateId() {
  const id = new Date().getTime();
  return `todoTask-${id}`;
}

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputEl = event.target.querySelector("input");

    if (inputEl.hasAttribute("data-high")) {
      addTask(inputEl.value, "high");
    } else {
      addTask(inputEl.value, "low");
    }

    inputEl.value = "";
  });
});

function addTask(value, status) {
  if (!value.trim()) return;
  const task = {
    name: value,
    status: status,
    done: false,
    id: generateId(),
  };
  tasks.push(task);
  setTasksLocalStorage(KEY_LOCAL_STORAGE, tasks);
  createTasks(tasks);
}

createTasks(tasks);
