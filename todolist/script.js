import { taskManager } from "./taskmanager.js";

const user = taskManager()

const taskTemplate = document.querySelector("#task-template").cloneNode(true)

const forms = document.querySelectorAll(".form-field")

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const input = form.querySelector(".input")
    if (input.value.length > 0) {
      const taskName = input.value
      const priority = form.getAttribute("data-priority")
      user.addTask(taskName, priority)
      input.value = "";
    }
    render()
  })
})

function render() {
  const taskList = user.getTaskList()
  
  const highTasks = taskList.filter(task => task.priority === "high")
  const lowTasks = taskList.filter(task => task.priority === "low")

  renderPriorityTasks("high", highTasks)
  renderPriorityTasks("low", lowTasks)
}

function renderPriorityTasks(priority, tasks) {
  const tasksContainer = document.querySelector(`.tasks[data-priority="${priority}"]`)
  tasksContainer.textContent = "";

  tasks.forEach(task => {
    const taskNode = taskTemplate.cloneNode(true);
    
    taskNode.setAttribute("id", task.id)
    
    
    const label = taskNode.querySelector("label")
    label.setAttribute("for", `checkbox-id${task.id}`)
    
    const checkbox = taskNode.querySelector("input")
    checkbox.setAttribute("id", `checkbox-id${task.id}`)
    
    if (task.status === "DONE") {
      taskNode.classList.add("task-completed")
      checkbox.checked = true
    }

    const taskName = taskNode.querySelector(".name")
    taskName.textContent = task.name

    tasksContainer.appendChild(taskNode)

    const removeButton = taskNode.querySelector(".delete-button")
    removeButton.addEventListener("click", () => {
      user.deleteTask(task.id);
      render()
    })

    checkbox.addEventListener("change", (event) => {
      if (event.target.checked) {
        user.changeStatus(task.id, "DONE")
      } else {
        user.changeStatus(task.id, "TO DO")
      }
      render()
    })
  })
}