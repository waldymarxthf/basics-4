import {UI_ELEMENTS} from "./module/UI_ELEMENTS.js";
import {submitFormClickHandler} from "./module/FUNCTION_CLICK_HANDLERS.js";
import {listTasks} from "./module/TASK_LIST.js";
import {PRIORITY, CLASS_LIST} from './module/defaultSettings.js';
import {createTask} from "./module/createHtmlElements.js";

UI_ELEMENTS.highPriorityForm.addEventListener('submit', submitFormClickHandler);
UI_ELEMENTS.lowPriorityForm.addEventListener('submit', submitFormClickHandler);


function createTaskList(array) {
    array.map(objTask => {

        if (objTask.priority === PRIORITY.HIGH) {

            const newHtmlElem = document.createElement('li');
            newHtmlElem.textContent = objTask.task;
            newHtmlElem.classList.add(CLASS_LIST.ITEM);

            UI_ELEMENTS.listHighTasks.appendChild(newHtmlElem);
        }

        if (objTask.priority === PRIORITY.LOW) {
            const newHtmlElem = document.createElement('li');
            newHtmlElem.textContent = objTask.task;

            UI_ELEMENTS.listLowTasks.appendChild(newHtmlElem);
        }
    });


}

function render() {
    const taskArray = listTasks.returnListArray();

    createTaskList(taskArray);
}

listTasks.addTaskInList({ task: 'test1', priority: PRIORITY.LOW, status: 'Done'});
listTasks.addTaskInList({ task: 'test2', priority: PRIORITY.HIGH, status: 'Done'});
listTasks.addTaskInList({ task: 'test3', priority: PRIORITY.HIGH, status: 'Done'});

console.log(listTasks.returnListArray());

render();

