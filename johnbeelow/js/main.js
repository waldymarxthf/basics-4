import { DOM, UI_ELEMENTS } from './module/ui_elements.js'
import {
  STATUS,
  PRIORITY,
  toDoList,
  addTask,
  changeStatus,
  deleteTask,
} from './module/todo_program.js'

function constructorTaskUi(textInput, priorityTask) {
  const containerTask = DOM.CREATE_TAG('div')
  const labelTask = DOM.CREATE_TAG('label')
  const statusTask = DOM.CREATE_TAG('input')
  const textTask = DOM.CREATE_TAG('span')
  const deleteTaskButton = DOM.CREATE_TAG('div')

  containerTask.setAttribute('class', 'task')
  statusTask.setAttribute('class', 'checkbox')
  statusTask.setAttribute('type', 'checkbox')
  textTask.setAttribute('class', 'task_text')
  textTask.textContent = textInput
  deleteTaskButton.setAttribute('class', 'button_close_task')
  deleteTaskButton.textContent = '×'

  priorityTask.appendChild(containerTask)
  containerTask.appendChild(labelTask)
  labelTask.appendChild(statusTask)
  labelTask.appendChild(textTask)
  containerTask.appendChild(deleteTaskButton)

  deleteTaskButton.addEventListener('click', () => {
    deleteTask(textInput)
    render()
  })

  statusTask.addEventListener('click', () => {
    const changeStatus = statusTask.checked ? STATUS.DONE : STATUS.IN_PROGRESS
    changeStatus(textInput, changeStatus)
    console.log(toDoList)
  })
}

function render() {
  UI_ELEMENTS.PRIORITY_HIGH.innerHTML = ''
  UI_ELEMENTS.PRIORITY_LOW.innerHTML = ''

  for (let taskFind of toDoList) {
    if (taskFind.priority === PRIORITY.HIGH) {
      constructorTaskUi(taskFind.name, UI_ELEMENTS.PRIORITY_HIGH)
    }

    if (taskFind.priority === PRIORITY.LOW) {
      constructorTaskUi(taskFind.name, UI_ELEMENTS.PRIORITY_LOW)
    }
  }
}

UI_ELEMENTS.INPUT_FORM_HIGHT.addEventListener('submit', (event) => {
  event.preventDefault()
  addTask(UI_ELEMENTS.INPUT_TEXT_HIGH.value, PRIORITY.HIGH)
  render()
})

UI_ELEMENTS.INPUT_FORM_LOW.addEventListener('submit', (event) => {
  event.preventDefault()
  addTask(UI_ELEMENTS.INPUT_TEXT_LOW.value, PRIORITY.LOW)
  render()
})
