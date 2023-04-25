function addTask() {
  const form = document.querySelector(".task-creator");
  const tasks = document.querySelector(".task-list .tasks")
  const taskTemplate = document.querySelector(".task-template")
  const newTask = taskTemplate.cloneNode(true);
  newTask.classList.remove("disabled")

  const taskInfo = newTask.querySelector(".task-info");
  const label = taskInfo.querySelector(".label");
  const description = taskInfo.querySelector(".description");
  label.textContent = form.querySelector(
    ".select .current .option"
  ).textContent;
  description.textContent = form.querySelector(".description").textContent;

  tasks.appendChild(newTask)
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

const submitButton = form.querySelector(".button")
submitButton.addEventListener("click", addTask)