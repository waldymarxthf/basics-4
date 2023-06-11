import {listTasks} from './TASK_LIST.js'
import {CLASS_FORM, STATUS, PRIORITY} from "./defaultSettings.js";
import {createTask} from "./createHtmlElements.js";

export function submitFormClickHandler(e) {
    e.preventDefault();

    const form = e.target;
    const inputTask = form.querySelector('input')

    if (form.classList.contains(CLASS_FORM.HIGH)) {
        listTasks.addTaskInList(
            createTask(
                inputTask.value,
                PRIORITY.HIGH,
                STATUS.TO_DO
            )
        );
        inputTask.value = '';
    }

    if (form.classList.contains(CLASS_FORM.LOW)) {
        listTasks.addTaskInList(
            createTask(
                inputTask.value,
                PRIORITY.HIGH,
                STATUS.TO_DO
            )
        );
        inputTask.value = '';
    }

    return;
}