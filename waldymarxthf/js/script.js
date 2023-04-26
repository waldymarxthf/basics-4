import { highForm, highTaskList, lowForm, lowTaskList } from "./modules/variables.js"
import { isEmpty, getTaskIndex } from "./modules/validation.js";

export const list = []

function deleteTask(taskElement) {
	const index = getTaskIndex(taskElement)
	list.splice(index, 1);
	console.log(list)
	render()
}

function render() {
	highTaskList.innerHTML = '';
	lowTaskList.innerHTML = '';

	for(let i = 0; i < list.length; i++) {
		const task = list[i];
		const taskList = task.priority === 'high' ? highTaskList : lowTaskList;
		
		const taskElement = document.createElement('div');
		taskElement.innerHTML = `
			<input type="checkbox" class="priority-container__checkbox">
			<p class="priority-container__task-text">${task.name}</p>
			<img src="./assets/close-icon.svg" alt="delete" class="priority-container__delete">
		`;
		taskElement.classList.add('priority-container__task');
		taskList.insertAdjacentElement('beforeend', taskElement)
		
		const deleteTaskButton = taskElement.querySelector('.priority-container__delete');
		deleteTaskButton.addEventListener('click', () => {
			deleteTask(taskElement);
		});
	}
}

function addTask(event, taskInput, taskPriority) {
	event.preventDefault();
	const formData = new FormData(taskInput);
	let taskText = formData.get(`${taskPriority}-priority-task`);

	if(!isEmpty(taskText)) {
		alert('Нельзя добавить пустую строку')
		return
	}

	list.push({
		name: taskText,
		status: 'TODO',
		priority: taskPriority,
	})

	console.log(list)

	render();
	event.target.reset()
}


highForm.addEventListener('submit', (event) => addTask(event, highForm, 'high'));
lowForm.addEventListener('submit', (event) => addTask(event, lowForm, 'low'));