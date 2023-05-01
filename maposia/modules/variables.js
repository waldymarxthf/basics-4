const getElement = (tag) => document.querySelector(tag)

const formHighPriority = getElement('.high_priority')
const inputHighTask = getElement('.input_high_task')
const tasksHighPriority = getElement('.tasks_highPriority')

const formLowPriority = getElement('.low_priority')
const inputLowTask = getElement('.input_low_task')
const tasksLowPriority = getElement('.tasks_lowPriority')

const checkboxes = getElement('.checkbox')

export {
  formHighPriority,
  inputHighTask,
  tasksHighPriority,
  formLowPriority,
  inputLowTask,
  tasksLowPriority,
  checkboxes,
}
