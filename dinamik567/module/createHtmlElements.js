import {STATUS} from "./defaultSettings.js";

export function createTask(task, priority, status = STATUS.TO_DO) {
    return {task, priority, status}
}

