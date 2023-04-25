const highForm = document.querySelector('.high-priority-container__form')
const highTaskList = document.querySelector('.high-priority-container')
const highFormButton = document.querySelector('.high-priority-container__form-button')
const lowForm = document.querySelector('.low-priority-container__form')
const lowTaskList = document.querySelector('.low-priority-container')
const lowFormButton = document.querySelector('.low-priority-container__form-button')

function getHighFormValue(event) {
	event.preventDefault();
	const formData = new FormData(highForm)
	const newTask = document.createElement('div');
	newTask.innerHTML = `
		<div class="high priority-container__task">
			<input type="checkbox" class="high priority-container__checkbox">
			<p class="high priority-container__task-text">${formData.get('high-priority-task')}</p>
			<img src="./assets/close-icon.svg" alt="delete" class="high priority-container__delete">
		</div>
	`;
	newTask.classList.add('high-priority-container__list');
	highTaskList.insertAdjacentElement('beforeend', newTask);
}

function getLowFormValue(event) {
	event.preventDefault();
	const formData = new FormData(lowForm)
	const newTask = document.createElement('div');
	newTask.innerHTML = `
		<div class="low priority-container__task">
			<input type="checkbox" class="low priority-container__checkbox">
			<p class="low priority-container__task-text">${formData.get('low-priority-task')}</p>
			<img src="./assets/close-icon.svg" alt="delete" class="low priority-container__delete">
		</div>
	`;
	newTask.classList.add('low-priority-container__list');
	lowTaskList.insertAdjacentElement('beforeend', newTask);
}

highForm.addEventListener('submit', getHighFormValue)
highFormButton.addEventListener('click', getHighFormValue)
lowForm.addEventListener('submit', getLowFormValue)
lowFormButton.addEventListener('click', getLowFormValue)