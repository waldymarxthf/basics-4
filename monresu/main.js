const inputHighNode = document.querySelector('.input-high')
const inputLowNode = document.querySelector('.input-low')
const highTasksNode = document.querySelector('.high-tasks')
const inputHighTaskNode = document.querySelector('.input-task-high')
const inputLowTaskNode = document.querySelector('.input-task-low')

function createTaskNode(text) {
  const newTask = document.createElement('div');
  newTask.className = 'task';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const textTask = document.createElement('p');
  textTask.innerText = text;
  const closeBtn = document.createElement('img');
  closeBtn.src = './img/close-icon (1).svg';
  newTask.appendChild(checkbox);
  newTask.appendChild(textTask);
  newTask.appendChild(closeBtn);
  return newTask;
}

function addTask(event) {
  event.preventDefault();
  const text = inputHighTaskNode.value;
  const task = createTaskNode(text);
  highTasksNode.appendChild(task);
  inputHighTaskNode.value = '';
  return false;
}


inputHighNode.addEventListener('submit', addTask) 