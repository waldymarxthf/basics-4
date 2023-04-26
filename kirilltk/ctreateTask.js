
export function createTask(taskName) {
    const task = document.createElement('div');
    task.setAttribute("id", "task");

    const form = document.createElement('form');
    form.setAttribute("action", "");

    const label = document.createElement('label');

    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");

    const checkmark = document.createElement('span');
    checkmark.setAttribute("class", "checkmark");

    const text = document.createElement('p');
    text.textContent = taskName;

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute("id", "deleteButton");
    deleteButton.textContent = "x";

    label.appendChild(checkbox);
    label.appendChild(checkmark);
    label.appendChild(text);
    form.appendChild(label);
    form.appendChild(deleteButton);
    task.appendChild(form);

    return task;
}