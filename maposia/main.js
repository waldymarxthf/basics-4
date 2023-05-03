import {
  formHighPriority,
  inputHighTask,
  tasksHighPriority,
  formLowPriority,
  inputLowTask,
  tasksLowPriority,
  checkboxes,
} from './modules/variables.js'

const TASKS = JSON.parse(localStorage.getItem('tasks')) || []

function toggleClick(evt) {
  if (!evt.target.matches('input')) return
  const element = evt.target.dataset.index
  TASKS[element].checked = !TASKS[element].checked

}


function deteleTask(evt) {
  if(!evt.target.matches('img')) return;
  const element = evt.target.dataset.index
  const array = JSON.parse(localStorage.getItem('tasks'))
  TASKS.splice(element, 1)
  localStorage.setItem('tasks', JSON.stringify(TASKS) )
  render()
}

function generageHTML(priority) {
TASKS.map((task, index) => {
  if (task.priority === 'High') {
    return  tasksHighPriority.innerHTML += `<div class="task">
    <label>
      <input class="checkbox" type="checkbox" data-id=task'${
        task.id
      }' data-index='${index}' ${task.done ? 'checked' : ''}></input>
      <div class="content">${task.text}</div>
    </label>
    <img src="/img/close-icon.png" class="del_btn" data-index='${index}'></img>
  </div>`
  } else {
    return  tasksLowPriority.innerHTML += `<div class="task">
    <label>
      <input class="checkbox" type="checkbox" data-id=task'${
        task.id
      }' data-index='${index}' ${task.done ? 'checked' : ''}></input>
      <div class="content">${task.text}</div>
    </label>
    <img src="/img/close-icon.png" class="del_btn" data-index='${index}'></img>
  </div>`
  }

  }).join('')


}

function render() {
  tasksHighPriority.innerHTML = ''
  tasksLowPriority.innerHTML = ''
      generageHTML()
  }


function addTodo(text, priority) {
  const todo = {
    text,
    checked: false,
    priority,
  }
  
  TASKS.push(todo)
  console.log(todo)
  localStorage.setItem('tasks', JSON.stringify(TASKS) )
  render()
  
}

formHighPriority.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const text = inputHighTask.value
  addTodo(text, 'High')
  formHighPriority.reset()
})

tasksHighPriority.addEventListener('click', toggleClick)

tasksHighPriority.addEventListener('click', deteleTask)

formLowPriority.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const text = inputLowTask.value
  addTodo(text, 'Low')
  inputHighTask.value = ''
    formLowPriority.reset()
})  

render()