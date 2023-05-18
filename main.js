import {formHighTodo, formLowTodo, formHighTaskTodo, formLowTaskTodo, textTask} from "./formVariableToDo";

function addTask(event) {
    event.preventDefault();
    const newTask = createTask();
    formHighTaskTodo.insertAdjacentHTML('afterbegin', newTask);
    textTask.textContent = '';
}

function createTask() {
    const valueTask = textTask.textContent;
    const elementTask = `
          <div class="task">
              <div class="task__info">
                <input type="checkbox"/>
                <p class="task__text">${valueTask}</p>
              </div>
              <img src="images/close-icon.svg" class="todo__del-img" />
        </div>`;
    return elementTask;
}

formHighTodo.addEventListener('submit', addTask);
formLowTodo.addEventListener('submit', addTask);
