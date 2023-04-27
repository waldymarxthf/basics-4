const inputHighNode = document.querySelector('.input-high')
const inputLowNode = document.querySelector('.input-low')
const highTasksNode = document.querySelector('.high-tasks')
const lowTasksNode = document.querySelector('.low-tasks')
const inputHighTaskNode = document.querySelector('.input-task-high')
const inputLowTaskNode = document.querySelector('.input-task-low')

const tasksNodes = [highTasksNode, lowTasksNode]

/* Создание HTML элемента задачи */
function createTaskNode(text, status) {
  const newTask = document.createElement('div');
  newTask.className = 'task';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const textTask = document.createElement('p');
  textTask.innerText = text;
  const closeBtn = document.createElement('img');
  closeBtn.src = './img/close-icon (1).svg';
  /* Вешаем слушатель на кнопку закрытия */
  closeBtn.addEventListener('click', () => {
    removeTask(text);
    render();
  })
  /* Вешаем слушатель на чекбокс */
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
  /* Делаем так чтобы при рендере выполненные задачи оставались выполненными */
  if (status === statuses.DONE) {
    newTask.classList.add('done-task');
    checkbox.checked = true;
  }
  newTask.appendChild(checkbox);
  newTask.appendChild(textTask);
  newTask.appendChild(closeBtn);
  return newTask;
}

/* Функция рендера задач */
function render() {
  tasksNodes.map((el) => el.innerHTML = ''); //альтернатива taskNodes[1].innerHTML...; taskNodes[0].innerHTML...
  
  for (const el of list) {
    const nodeForAddTask = el.priority == priority.HIGH ?  tasksNodes[0] : tasksNodes[1];
    const task = createTaskNode(el.name, el.status);
    nodeForAddTask.appendChild(task);
  }
}
/* Функции добавления задач при отправке форм */
function addTaskHigh() {
  addTask(inputHighTaskNode.value, statuses.TODO, priority.HIGH);
  inputHighTaskNode.value = '';
}

function addTaskLow() {
  addTask(inputLowTaskNode.value, statuses.TODO, priority.LOW)
  inputLowTaskNode.value = '';
}

/* Обработка отправки форм */
inputHighNode.addEventListener('submit', addTaskHigh)
inputLowNode.addEventListener('submit', addTaskLow)

render()

