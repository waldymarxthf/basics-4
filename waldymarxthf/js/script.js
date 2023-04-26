import { highForm, highTaskList, lowForm, lowTaskList } from "./modules/variables.js"
import { isEmpty } from "./modules/validation.js";

const list = []

function addTask(event, taskList, taskInput, taskPriority) {
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

	const newTask = render();
	taskList.insertAdjacentElement('beforeend', newTask);
	event.target.reset()
	deleteTask(newTask)
}

//* функция добавления задачи в массив

function deleteTask(taskElement) {
	const deleteTaskButton = taskElement.querySelector('.priority-container__delete');
	deleteTaskButton.addEventListener('click', () => {
			const index = list.findIndex(task => task.name === taskElement.querySelector('.priority-container__task-text').textContent);
			list.splice(index, 1);
			taskElement.remove();
			console.log(list)
	});
}

//* функция удаление таски

function render() {
	const taskElement = document.createElement('div');

	const lastItem = list[list.length - 1];

	taskElement.innerHTML = `
		<input type="checkbox" class=" priority-container__checkbox">
		<p class=" priority-container__task-text">${lastItem.name}</p>
		<img src="./assets/close-icon.svg" alt="delete" class=" priority-container__delete">
	`;
	taskElement.classList.add(`priority-container__task`);
	return taskElement;
}

//* функция рендерит блок с задачей

highForm.addEventListener('submit', (event) => addTask(event, highTaskList, highForm, 'high'));
lowForm.addEventListener('submit', (event) => addTask(event, lowTaskList, lowForm, 'low'));