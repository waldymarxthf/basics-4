import {highForm, highTaskList, highFormButton, lowForm, lowTaskList, lowFormButton} from "./modules/variables.js"

function createTaskElement(taskText) {
	const taskElement = document.createElement('div');
	taskElement.innerHTML = `
		<input type="checkbox" class=" priority-container__checkbox">
		<p class=" priority-container__task-text">${taskText}</p>
		<img src="./assets/close-icon.svg" alt="delete" class=" priority-container__delete">
	`;
	taskElement.classList.add(`priority-container__task`);
	return taskElement;
}

//* функция создает образец блока с таской

function resetTaskInput(taskInput, taskPriority) {
	const input = taskInput.querySelector(`#${taskPriority}-task-input`);
	input.value = '';
}

//* функция которая очищает значение инпута

function addTask(event, taskList, taskInput, taskPriority) {
	event.preventDefault();
	const formData = new FormData(taskInput);
	let taskText = formData.get(`${taskPriority}-priority-task`);
	const newTask = createTaskElement(taskText);
	taskList.insertAdjacentElement('beforeend', newTask);
	resetTaskInput(taskInput, taskPriority);
}

//* функция доставания значение с формы и добавление блока с таской

highForm.addEventListener('submit', (event) => addTask(event, highTaskList, highForm, 'high'));
highFormButton.addEventListener('click', (event) => addTask(event, highTaskList, highForm, 'high'));
lowForm.addEventListener('submit', (event) => addTask(event, lowTaskList, lowForm, 'low'));
lowFormButton.addEventListener('click', (event) => addTask(event, lowTaskList, lowForm, 'low'));