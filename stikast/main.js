const toDo = [];

const highPriorityForm = document.querySelector(".addTask-highPriority");
const highPriorityTask = document.querySelector(".taskName-highPriority");
const highPriorityTasksList = document.querySelector(".tasks-highPriority");

const lowPriorityForm = document.querySelector(".addTask-lowPriority");
const lowPriorityTask = document.querySelector(".taskName-lowPriority");
const lowPriorityTasksList = document.querySelector(".tasks-lowPriority");

const deleteButton = document.querySelector(".deleteButton");

function gethighaskText() {
  return highPriorityTask.value;
}

function getLowTaskText() {
  return lowPriorityTask.value;
}

function createNewHighTask(event) {
  event.preventDefault();

  if (!highPriorityTask.value) {
    alert("Error! Enter a task!");
    return;
  }

  const newHighTask = document.createElement("div");
  newHighTask.className = "task-highPriority";

  newHighTask.innerHTML = `
		<form action="">
			<label>
				<input class="real-checkbox" type="checkbox">
				<span class="custom-checkbox"></span>
				<p class="newTaskName">${gethighaskText()}</p>
			</label>
			<button class="deleteButton"><img src="./images/delete.png" alt="delete"></button>
		</form>`;

  highPriorityTasksList.appendChild(newHighTask);
  toDo.push({ name: highPriorityTask.value, priority: "high", status: "To Do" });
  highPriorityTask.value = "";

  const checkbox = newHighTask.querySelector(".real-checkbox");
	checkbox.addEventListener('change', () => {
		const check = checkbox.checked
		if(check) {
			newHighTask.style.backgroundColor = "#E5E5E5";
			const text = newHighTask.querySelector('.newTaskName').textContent;
			const index = toDo.findIndex(task => text == task.name);
			toDo[index].status = "Done";
		} else {
			newHighTask.style.backgroundColor = "white";
			const text = newHighTask.querySelector('.newTaskName').textContent;
			const index = toDo.findIndex(task => text == task.name);
			toDo[index].status = "To Do";
		}
	})

  const deleteButton = newHighTask.querySelector(".deleteButton");

  deleteButton.addEventListener("click", () => {
    const index = toDo.findIndex((task) => newHighTask.textContent === task.name);
    toDo.splice(index, 1);
    highPriorityTasksList.removeChild(newHighTask);
  });
}

function createNewLowTask(event) {
  event.preventDefault();

  if (!lowPriorityTask.value) {
    alert("Error! Enter a task!");
    return;
  }

  const newLowTask = document.createElement("div");
  newLowTask.className = "task-lowPriority";

  newLowTask.innerHTML = `
		<form action="">
			<label>
				<input class="real-checkbox" type="checkbox">
				<span class="custom-checkbox"></span>
				<p class="newTaskName">${getLowTaskText()}</p>
			</label>
			<button class="deleteButton"><img src="./images/delete.png" alt="delete"></button>
		</form>`;

  lowPriorityTasksList.appendChild(newLowTask);
  toDo.push({ name: lowPriorityTask.value, priority: "low", status: "To Do" });
  lowPriorityTask.value = "";
  console.log(toDo);

  const checkbox = newLowTask.querySelector(".real-checkbox");
	checkbox.addEventListener('change', () => {
		const check = checkbox.checked
		if(check) {
			newLowTask.style.backgroundColor = "#E5E5E5";
			const text = newLowTask.querySelector('.newTaskName').textContent;
			const index = toDo.findIndex(task => text == task.name);
			toDo[index].status = "Done";
		} else {
			newLowTask.style.backgroundColor = "white";
			const text = newLowTask.querySelector('.newTaskName').textContent;
			const index = toDo.findIndex(task => text == task.name);
			toDo[index].status = "To Do";
		}
	})

  const deleteButton = newLowTask.querySelector(".deleteButton");

  deleteButton.addEventListener("click", () => {
    const index = toDo.findIndex((task) => newLowTask.textContent === task.name);
    toDo.splice(index, 1);
    lowPriorityTasksList.removeChild(newLowTask);
  });
}

highPriorityForm.addEventListener("submit", createNewHighTask);
lowPriorityForm.addEventListener("submit", createNewLowTask);
