let list = JSON.parse(localStorage.getItem('tasks')) || []

function saveToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(list));
}

const findTaskIndex = (name) => {
  return list.findIndex(t => t.name === name);
}

const isEmpty = taskName => taskName.trim();

function addTask(name, status = 'todo', priority='high') {
  try {
    if (!isEmpty(name)) {
      throw new Error('Задача пустая');
    }
    list.push({
      name, 
      status, 
      priority
    });
    saveToLocalStorage();
  }
  catch(err) {
    console.error(err.message);
  }
}

function removeTask(name) {
  const index = findTaskIndex(name)
  if (index == -1) {
    console.error('задачи нет')
    return;
  }
  list.splice(index, 1);
  saveToLocalStorage();
  return;
}

function changeStatus(name, status) {
  const index = findTaskIndex(name);
  list[index].status = status;
  saveToLocalStorage();
  return;
}

const formHighNode = document.querySelector('.form-high');
const formLowNode = document.querySelector('.form-low');
const inputHighTaskNode = document.querySelector('.input-task-high');
const inputLowTaskNode = document.querySelector('.input-task-low');

const highTasksNode = document.querySelector('.high-tasks')
const lowTasksNode = document.querySelector('.low-tasks')

formHighNode.addEventListener('submit', e => {
  e.preventDefault();
  addTask(inputHighTaskNode.value, 'todo', 'high');
  formHighNode.reset();
  render();
})

formLowNode.addEventListener('submit', e => {
  e.preventDefault();
  addTask(inputLowTaskNode.value, 'todo', 'low');
  formLowNode.reset();
  render();
})

const deleteBtnHandler = (closeBtn, taskName) => {
  removeTask(taskName);
  render();
  closeBtn.removeEventListener('click', deleteBtnHandler);
  console.log(list);
}

function createTaskElement(taskName, status) {
  const divTask = document.createElement('div');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  const taskText = document.createElement('span');
  const closeBtn = document.createElement('button');
  divTask.classList.add('task');
  checkbox.type = 'checkbox';
  taskText.textContent = taskName;

  closeBtn.textContent = 'x';

  closeBtn.addEventListener('click', () => deleteBtnHandler(closeBtn, taskName))

  checkbox.addEventListener('change', () => {
    const isChecked = checkbox.checked;
    changeStatus(taskName, isChecked ? 'done' : 'todo');
    render();
  })
  

  if (status == 'done') {
    divTask.classList.add('done-task');
    checkbox.checked = true;
  }

  label.appendChild(checkbox);
  label.appendChild(taskText);
  divTask.appendChild(label);
  divTask.appendChild(closeBtn);
  return divTask;
}

function render() {
  highTasksNode.innerHTML = '';
  lowTasksNode.innerHTML = '';
  for (const task of list) {
    const nodeForTasks = task.priority == 'high' ? highTasksNode : lowTasksNode;
    const taskNode = createTaskElement(task.name, task.status);
    nodeForTasks.appendChild(taskNode);
  }
}

render();