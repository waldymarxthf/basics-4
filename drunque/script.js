const form = document.querySelector(".task-creator");

function addTask() {
  const tasks = document.querySelector(".task-list .tasks")
  const taskTemplate = document.querySelector(".task-template")
  const newTask = taskTemplate.cloneNode(true);
  newTask.classList.remove("disabled")

  const taskInfo = newTask.querySelector(".task-info");
  const label = taskInfo.querySelector(".label span");
  const description = taskInfo.querySelector(".description");
  label.textContent = form.querySelector(
    ".select .current .option"
  ).textContent;
  description.textContent = form.querySelector(".description").value;

  tasks.appendChild(newTask)
  form.querySelector(".description").value = ""
}

form.addEventListener("submit", event => {
  event.preventDefault()
  addTask()
})