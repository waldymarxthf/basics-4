import { list } from "../script.js"

export function isEmpty(taskText) {
	if (taskText.trim() === ''){
		return false
	}
	return taskText
}

//* функция проверки на пустую строку

export function getTaskIndex(taskElement) {
	return list.findIndex(task => task.name === taskElement.querySelector('.priority-container__task-text').textContent);
}