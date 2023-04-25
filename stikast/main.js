const highPriorityForm = document.querySelector(".addTask-highPriority");
const highPriorityTask = document.querySelector(".taskName-highPriority");
const highPriorityTasksList = document.querySelector(".tasks-highPriority");

const lowPriorityForm = document.querySelector(".addTask-lowPriority");
const lowPriorityTask = document.querySelector(".taskName-lowPriority");
const lowPriorityTasksList = document.querySelector(".tasks-lowPriority");

function gethighaskText() {
  return highPriorityTask.value;
}

function getLowTaskText() {
  return lowPriorityTask.value;
}

function createNewHighTask(event) {
  event.preventDefault();

	if (!highPriorityTask.value) {
		alert('Error! Enter a task!');
		return
	}

  const newHighTask = document.createElement("div");
  newHighTask.className = "task-highPriority";

  newHighTask.innerHTML = `
		<form action="">
			<label>
				<input class="real-checkbox" type="checkbox">
				<span class="custom-checkbox"></span>
				<p>${gethighaskText()}</p>
			</label>
			<button class="deleteButton"><img src="./images/delete.png" alt="delete"></button>
		</form>`;

  highPriorityTasksList.appendChild(newHighTask);
  highPriorityTask.value = "";
}

function createNewLowTask(event) {
  event.preventDefault();

	if (!lowPriorityTask.value) {
		alert('Error! Enter a task!');
		return
	}

  const newLowTask = document.createElement("div");
  newLowTask.className = "task-lowPriority";

  newLowTask.innerHTML = `
		<form action="">
			<label>
				<input class="real-checkbox" type="checkbox">
				<span class="custom-checkbox"></span>
				<p>${getLowTaskText()}</p>
			</label>
			<button class="deleteButton"><img src="./images/delete.png" alt="delete"></button>
		</form>`;

  lowPriorityTasksList.appendChild(newLowTask);
  lowPriorityTask.value = "";
}

highPriorityForm.addEventListener("submit", createNewHighTask);
lowPriorityForm.addEventListener("submit", createNewLowTask);
