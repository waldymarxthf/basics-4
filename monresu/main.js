const inputHighNode = document.querySelector('.input-high')
const inputLowNode = document.querySelector('.input-low')
const highTasksNode = document.querySelector('.high-tasks')
const lowTasksNode = document.querySelector('.low-tasks')
const inputHighTaskNode = document.querySelector('.input-task-high')
const inputLowTaskNode = document.querySelector('.input-task-low')

const tasksNodes = [highTasksNode, lowTasksNode]

function removeTask(task) {
  console.log(task)
  if (!isTaskExists(task)) {
    console.log(errors.taskIsNotExists);
    return;
  }
  const indexTask = indexOfTask(task);
  list.splice(indexTask, 1);
  console.log(messages.deleteTask);
  return;
}

function changeCheckbox(event) {
  const task = event.target;
  if (event.target.value == 'checked') {
    task.classList.add('done-task');
  }
}

function createTaskNode(text) {
  const newTask = document.createElement('div');
  newTask.className = 'task';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const textTask = document.createElement('p');
  textTask.innerText = text;
  const closeBtn = document.createElement('img');
  closeBtn.src = './img/close-icon (1).svg';
  closeBtn.addEventListener('click', () => {
    removeTask(text);
    render();
  })
  checkbox.addEventListener('change', () => {
    checkbox.value == 'checked' ? changeStatus(text, statuses.DONE) : changeStatus(text, statuses.TODO);
    render();
  })
  newTask.appendChild(checkbox);
  newTask.appendChild(textTask);
  newTask.appendChild(closeBtn);
  return newTask;
}

function render() {
  lowTasksNode.innerHTML = '';
  highTasksNode.innerHTML = '';
  
  for (const el of list) { 
    const task = createTaskNode(el.name);
    el.status == statuses.DONE ? task.classList.add('done-task') : 0;
    el.status == statuses.DONE ? 0 : 0;
    el.priority == priority.HIGH ?  tasksNodes[0].appendChild(task) : tasksNodes[1].appendChild(task);
  }
}

function addTaskHigh() {
  addTask(inputHighTaskNode.value, statuses.TODO, priority.HIGH)
}

function addTaskLow() {
  addTask(inputLowTaskNode.value, statuses.TODO, priority.LOW)
}

inputHighNode.addEventListener('submit', addTaskHigh)
inputLowNode.addEventListener('submit', addTaskLow)

render()

