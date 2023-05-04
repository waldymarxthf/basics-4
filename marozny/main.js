const qS = (element) => document.querySelector(element);
const highInput = qS(".input_text_high");
const lowInput = qS(".input_text_low");
const formHigh = qS(".task_form_high");
const formLow = qS(".task_form_low");
const highTask = qS(".task_priority_high");
const lowTask = qS(".task_priority_low");

const list = [];

const PRIORITY = {
    LOW: "low",
    HIGH: "high"
  };

const STATUS = {
    TODO: "ToDo",
    DONE: "Done"
  };  

function addTask(name, priority, status) {
    list.push({name,priority,status})
}

// const updateStatus = (name, status) => {
// const indexTask = list.findIndex(task => task.name === name);
// list[indexTask].status = status;
// render();
// }

// const deleteTask = (name) => {
// const indexTask = list.findIndex(task => task.name === name);
// list.splice(indexTask, 1);
// render()
// }

function render() {
    highTask.innerHTML = "";
    lowTask.innerHTML = "";
    for (const task of list) {
        if (task.priority === PRIORITY.HIGH) {
            createUI(task.name, task.status, PRIORITY.HIGH);
        }
        if (task.priority === PRIORITY.LOW) {
            createUI(task.name, task.status, PRIORITY.LOW);
        }
    }
}

function createUI(name, status, priority) {
    const containerTask = document.createElement('div');
    const labelTask = document.createElement('label');
    const statusTask = document.createElement('input');
    const textTask = document.createElement('span');
    const deleteTaskButton = document.createElement('button');
  
    containerTask.classList.add('task');
    statusTask.classList.add('checkbox');
    statusTask.type = 'checkbox';
    textTask.classList.add('task_text');
    textTask.textContent = name;
    deleteTaskButton.classList.add('button_close_task');
    deleteTaskButton.textContent = '×';
  
    priority.appendChild(containerTask);
    containerTask.appendChild(labelTask);
    labelTask.appendChild(statusTask);
    labelTask.appendChild(textTask);
    containerTask.appendChild(deleteTaskButton);

    if (status === STATUS.DONE) {
        statusTask.setAttribute('checked', true)
      };
     deleteTaskButton.addEventListener('click', () => {
        deleteTask(name)
        render()
      })
      statusTask.addEventListener('change', () => {
        changeStatus(name, statusTask.checked ? STATUS.DONE : STATUS.TODO)
        render()
      })
}
            

formHigh.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask(highInput.value, PRIORITY.HIGH, STATUS.TODO);
    render();
});

formLow.addEventListener("submit", (event) => {
    event.preventDefault();
    addTask(lowInput.value, PRIORITY.LOW, STATUS.TODO);
    render();
});