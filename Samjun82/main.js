const STATUS = {
  IN_PROGRESS: 'In Progress',
  DONE: 'Done',
  TO_DO: 'To Do'
}

const PRIORITY = {
  LOW: 'low',
  HIGH: 'high'
}

const MESSAGE = {
  TASK_IS_ADDED: 'This task is already exists',
  TASK_IS_WRONG: 'Please enter a valid value',
  TASK_IS_DELETED: 'Task is already deleted'
}

const list = []

const changeTaskStatus = (name, status) => {
  const task = list.find(task => task.name === name)
  if(task){
      task.status = status
  }else{
      console.log(MESSAGE.TASK_IS_WRONG)
  }
}
const changeTaskPriority = (name, priority) => {
  const task = list.find(task => task.name === name)
  if(task){
      task.priority = priority
  }else{
      console.log(MESSAGE.TASK_IS_WRONG)
  }
}

const addTask = (name, status = STATUS.TO_DO, priority = PRIORITY.LOW) => {
  const task = list.find(task => task.name === name)
  if(!!task){
    console.log(MESSAGE.TASK_IS_ADDED)
    return 
  }
  if(!!name.trim() === false) {
    return
  } 
  list.push({'name': name, 'status': status, 'priority': priority})
}

const deleteTask = name => {
  const task = list.findIndex(task => task.name === name) 
    if(task){
      list.splice(task,1)
      console.log(MESSAGE.TASK_IS_DELETED)
    } else {
      console.log(MESSAGE.TASK_IS_WRONG)
    }
}

const inputTaskHigh = document.querySelector('.add_task_high')
const inputTaskLow = document.querySelector('.add_task_low')
const tasksHigh = document.querySelector('.tasks_high')
const tasksLow = document.querySelector('.tasks_low')
const btnAdd = document.querySelectorAll('.button_add_task')

function addTaskToHTML(priority, tasksContainer) {
  const filteredTasks = filterTasks(priority)
  const sortedTasks = sortList(filteredTasks)
  if(sortedTasks.lenght !== 0) {
    sortedTasks.forEach(task => {
      tasksContainer.insertAdjacentHTML('beforeend', `
      <div class="task">
              <label>
                <input class="checkbox" type="checkbox" />
                <p>${task.name}</p>
              </label>
              <button class="button_close_task">&times;</button>
      </div>
      `)
    })
  }
  return
}

function sortList(arr) {
  const sortedTasks = arr.sort(task => {
    if(task.status === STATUS.TO_DO) {
      return -1
    } else if (task.status === STATUS.DONE) {
      return 1
    }
  })
  return sortedTasks
}

function filterTasks(priority) {
  const filteredList = list.filter(task => task.priority === priority)
  return filteredList
}

function render() {
  tasksHigh.innerHTML = ''
  tasksLow.innerHTML = ''
  addTaskToHTML(PRIORITY.HIGH, tasksHigh)
  addTaskToHTML(PRIORITY.LOW, tasksLow)
}

const btnAddHandler = (event) => {
  event.preventDefault()
  if(event.target === btnAdd[0]) {
    addTask(inputTaskHigh.value, STATUS.TO_DO, PRIORITY.HIGH)
    inputTaskHigh.value = ''
  } else if(event.target === btnAdd[1]) {
    addTask(inputTaskLow.value, STATUS.TO_DO, PRIORITY.LOW)
    inputTaskLow.value = ''
  }
 render()
}

btnAdd.forEach(btn => btn.addEventListener('click', btnAddHandler))