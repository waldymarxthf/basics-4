import {
  formHighPriority,
  inputHighTask,
  tasksHighPriority,
  formLowPriority,
  inputLowTask,
  tasksLowPriority,
  checkboxes,
} from './modules/variables.js'

const TASKS = []
let ids = 0

function generageHTML(priorityBlock, task) {
  const taskContainer = document.createElement('div')
  taskContainer.classList.add('task')
  const labelTask = document.createElement('label')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.classList.add('checkbox')
  checkbox.setAttribute('data-id', task.id)
  checkbox.checked = task.done
  checkbox.addEventListener('change', () => {
    task.done = checkbox.checked
    taskContainer.classList.toggle('completed')
  })

  const content = document.createElement('div')
  content.classList.add('content')
  content.textContent = task.text

  const delBtn = document.createElement('img')
  delBtn.src = '/img/close-icon.png'
  delBtn.classList.add('del_btn')
  delBtn.setAttribute('data-id', task.id)
  delBtn.addEventListener('click', () => {
    delTodo(task.id)
  })

  priorityBlock.appendChild(taskContainer)
  taskContainer.appendChild(labelTask)
  labelTask.appendChild(checkbox)
  labelTask.appendChild(content)
  taskContainer.appendChild(delBtn)
}

function render() {
  tasksHighPriority.innerHTML = ''
  tasksLowPriority.innerHTML = ''
  TASKS.forEach((task) => {
    if (task.priority === 'High') {
      generageHTML(tasksHighPriority, task)
    } else {
      generageHTML(tasksLowPriority, task)
    }
  })
}

function addTodo(text, priority) {
  const setId = ids

  const todo = {
    text,
    done: false,
    priority,
    id: `${setId + 1}`,
  }
  ids = setId + 1
  TASKS.push(todo)
  console.log()
}

function delTodo(id) {
  TASKS.forEach((task, index) => {
    if (task.id === id) {
      TASKS.splice(index, 1)
    }
  })
  render()
}

function changeStatus(id) {
  TASKS.forEach((task) => {
    if (task.id === id) {
      task.done = true
    }
  })
  render()
}

formHighPriority.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const text = inputHighTask.value
  addTodo(text, 'High')
  inputHighTask.value = ''
  render()
})

formLowPriority.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const text = inputLowTask.value
  addTodo(text, 'Low')
  inputLowTask.value = ''
  render()
})
