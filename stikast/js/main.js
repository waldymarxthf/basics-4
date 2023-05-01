import { highForm, lowForm, newHighTask, newLowTask, highTasksList, lowTasksList } from "./ui-elements.js"

const toDoList = [];

function isTaskEmpty(task) {
	return !task.value.trim() ? true : false;
}

highForm.addEventListener("submit", (event) => {
  event.preventDefault();

	try {
		if (isTaskEmpty(newHighTask)) {
			throw new Error("Error! Enter a task!");
		}
		toDoList.push({ name: newHighTask.value, priority: "high", status: "to do" });
	}
	catch(error) {
		if (error.name === "Error") {
			alert(error.message)
		}
	}

  render();
  newHighTask.value = "";
});

lowForm.addEventListener("submit", (event) => {
  event.preventDefault();

		try {
			if (isTaskEmpty(newLowTask)) {
				throw new Error("Error! Enter a task!");
			}
			toDoList.push({ name: newLowTask.value, priority: "low", status: "to do" });
		}
		catch(error) {
			if (error.name === "Error") {
				alert(error.message)
			}
		}

  render();
  newLowTask.value = "";
});

function createTaskNode(name, priority) {
  const newTask = document.createElement("div");
  newTask.classList.add(priority);

  const form = document.createElement("form");
  const label = document.createElement("label");

  const realCheckbox = document.createElement("input");
  realCheckbox.type = "checkbox";
  realCheckbox.classList.add("real-checkbox");

  const customCheckbox = document.createElement("span");
  customCheckbox.classList.add("custom-checkbox");

  const taskText = document.createElement("p");
  taskText.innerText = name;

  const deleteButton = document.createElement("button");
  const deleteButtonIcon = document.createElement("img");
  deleteButtonIcon.src = " ./images/delete.png";

  deleteButton.appendChild(deleteButtonIcon);
  label.appendChild(realCheckbox);
  label.appendChild(customCheckbox);
  label.appendChild(taskText);
  form.appendChild(label);
  form.appendChild(deleteButton);
  newTask.appendChild(form);

  deleteButton.addEventListener("click", () => {
    const index = toDoList.findIndex((task) => taskText.textContent === task.name);
    toDoList.splice(index, 1);
    render();
  });

  realCheckbox.addEventListener("change", () => {
    const check = realCheckbox.checked;
    const index = toDoList.findIndex((task) => name === task.name);
    if (check) {
      newTask.classList.add("done");
      toDoList[index].status = "done";
      console.log(toDoList);
    } else {
      newTask.classList.remove("done");
      toDoList[index].status = "to do";
      console.log(toDoList);
    }
  });

  return newTask;
}

function render() {
  highTasksList.innerHTML = "";
  lowTasksList.innerHTML = "";

  for (const item of toDoList) {
    const nodeForAddTask = item.priority === "high" ? highTasksList : lowTasksList;
    const task = createTaskNode(item.name, item.priority, item.status);
    nodeForAddTask.appendChild(task);
  }
}