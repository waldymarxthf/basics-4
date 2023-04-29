const btnHighTask = document.querySelector(".btn-adding-high");
const highTaskValue = document.querySelector(".highTaskValue");
const lowTaskValue = document.querySelector(".lowTaskValue");
const taskHighList = document.querySelector(".tasks-high-priority");
const btnDelete = document.querySelector(".btn-task-delete");

const list = [];

const PRIORITY = {
    LOW: "low",
    HIGH: "high"
  };

const STATUS = {
    TODO: "ToDo",
    DONE: "Done"
  };  

const updateStatus = (name, status) => {
const indexTask = list.findIndex(task => task.name === name);
list[indexTask].status = status;
render();
}

const deleteTask = (name) => {
const indexTask = list.findIndex(task => task.name === name);
list.splice(indexTask, 1);
render()
}

function render() {
    taskHighList.innerHTML = "";
    taskLowList.innerHTML = "";
    for (const task of list) {
        if (task.PRIORITY === HIGH) {
            let taskValue = highTaskValue.value;
    taskHighList.insertAdjacentHTML('beforeend', `<div class="task-item task-high-priority">
    <label>
        <input type="checkbox" class="input-checkbox">
        <div class="task-text">
            ${taskValue}
        </div>
    </label>
    <button class="btn-task-delete"></button>
</div>`);
        }
        let taskValue = lowTaskValue.value;
        taskHighList.insertAdjacentHTML('beforeend', `<div class="task-item task-low-priority">
        <label>
            <input type="checkbox" class="input-checkbox">
            <div class="task-text">
                ${taskValue}
            </div>
        </label>
        <button class="btn-task-delete"></button>
    </div>`); 
    }
}

function addTask (event, priority, status) {
    list.push({
        name: event,
        status: status,
        priority: priority
    });
    render();
    }


btnHighTask.addEventListener("submit", (event) => addTask(event, PRIORITY.HIGH, STATUS.TODO));
btnLowTask.addEventListener("submit", (event) => addTask(event, PRIORITY.LOW, STATUS.TODO));


