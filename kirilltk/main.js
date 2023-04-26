const taskInput = document.querySelector('#taskName');
import {createTask} from './ctreateTask.js';
function pressEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const taskName = taskInput.value;
        const newTask = createTask(taskName);
        const taskList = document.querySelector('#tasks');
        taskList.appendChild(newTask);
        
        taskInput.value = "";
    };
};
taskInput.addEventListener("keyup", pressEnter);

