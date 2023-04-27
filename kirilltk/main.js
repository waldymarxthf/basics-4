const form = document.querySelector('#addTask');
const input = document.querySelector('#taskName');

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const highPriorityTask = document.querySelector('#high-priority #tasks')
        const taskName = input.value;
        input.value = '';

        const newTask = document.createElement('div');
        newTask.setAttribute('id', 'task');
        newTask.innerHTML = `
        <form action="">
			<label>
				<input type="checkbox">
                <span class="checkmark"></span>
				<p>
					${taskName}
				</p>
			</label>
			<button id="deleteButton">x</button>
		</form>
        `;

        highPriorityTask.appendChild(newTask);
    }
});