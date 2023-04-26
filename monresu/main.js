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

function createTaskNode(text, status) {
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
    const isChecked = checkbox.checked;
    if (isChecked) {
      newTask.classList.add('done-task');
      changeStatus(textTask.innerText, statuses.DONE);
    } else {
      newTask.classList.remove('done-task');
      changeStatus(textTask.innerText, statuses.TODO);
    }
  });
  
  if (status === statuses.DONE) {
    newTask.classList.add('done-task');
    checkbox.checked = true;
  }
  newTask.appendChild(checkbox);
  newTask.appendChild(textTask);
  newTask.appendChild(closeBtn);
  return newTask;
}

function render() {
  lowTasksNode.innerHTML = '';
  highTasksNode.innerHTML = '';
  
  for (const el of list) { 
    const task = createTaskNode(el.name, el.status);
    el.priority == priority.HIGH ?  tasksNodes[0].appendChild(task) : tasksNodes[1].appendChild(task);
  }
}

function addTaskHigh() {
  addTask(inputHighTaskNode.value, statuses.TODO, priority.HIGH);
  inputHighTaskNode.value = '';
}

function addTaskLow() {
  addTask(inputLowTaskNode.value, statuses.TODO, priority.LOW)
  inputLowTaskNode.value = '';
}

inputHighNode.addEventListener('submit', addTaskHigh)
inputLowNode.addEventListener('submit', addTaskLow)

render()

