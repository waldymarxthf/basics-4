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
  ERROR: 'Somthing wrong',
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
  try {
    const task = list.find(task => task.name === name)
    if(!!task){
      console.log(MESSAGE.TASK_IS_ADDED)
      return 
    }
    if(!!name.trim() === false) {
      return
    } 
    list.push({'name': name, 'status': status, 'priority': priority})
  } catch (error) {
    console.log(`error: ${error}`)
  }
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
const containerToDo = document.querySelector('.container_ToDo')


// Добавляем отфильтрованную и отсортированную таску в DOM
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

// сортируем массив по статусу
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

// фильтр по приоритету
function filterTasks(priority) {
  const filteredList = list.filter(task => task.priority === priority)
  return filteredList
}

// рендерим DOM
function render() {
  tasksHigh.innerHTML = ''
  tasksLow.innerHTML = ''
  addTaskToHTML(PRIORITY.HIGH, tasksHigh)
  addTaskToHTML(PRIORITY.LOW, tasksLow)
}

// сортируем приоритет по нажатию кнопки
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
// слушаем кнопку добавить задачу с перебором массива
btnAdd.forEach(btn => btn.addEventListener('click', btnAddHandler))

const clickHandler = (event) => {
  if (event.target.classList.contains('checkbox')) {
      checkboxHandler(event);
      render();
      console.log('sdg')
      return
  }  else if (event.target.classList.contains('button_close_task')) {
      btnDelHandler(event)
      render();
      return
  } 
}

// // обработчик событий для Checkbox.   
// function checkboxHandler(event) {
//   const findTask = event.target.getAttribute('checkbox');
//   const checkedTaskStatus = list.find(obj => obj.id === +findTask).status;
//   setStatusTask(findTask, checkedTaskStatus === STATUS.TO_DO ? STATUS.DONE : STATUS.TO_DO)
// }

// обработчик событий кнопки delete.  
function btnDelHandler(event) {
  const delTask = +event.target.parentElement.getAttribute('button_close_task');
  deleteTask(delTask);
}

// слушаем кнопку Checkbox and delete ToDo таски
containerToDo.addEventListener('click', clickHandler);