const UI_ELEMNTS = {
    FROM_HIGH: document.querySelector('.form-high'),
    FROM_LOW: document.querySelector('.form-low'),
    INPUT_HIGH: document.querySelector('.input-add-high'),
    INPUT_LOW: document.querySelector('.input-add-low'),
    CONTAINER_TASKS_HIGH: document.querySelector('.list-tasks-high'),
    CONTAINER_TASKS_LOW: document.querySelector('.list-tasks-low')
}

UI_ELEMNTS.FROM_HIGH.addEventListener('submit', (form) => {
    form.preventDefault();
    addTask(UI_ELEMNTS.FROM_HIGH, UI_ELEMNTS.INPUT_HIGH, UI_ELEMNTS.CONTAINER_TASKS_HIGH);
})

UI_ELEMNTS.FROM_LOW.addEventListener('submit', (form) => {
    form.preventDefault();
    addTask(UI_ELEMNTS.FROM_LOW, UI_ELEMNTS.INPUT_LOW, UI_ELEMNTS.CONTAINER_TASKS_LOW);
})

// Формируем данные из формы
function createData(form) {
    const formData = new FormData(form);
    const inputValue = formData.get('task-value');
    return inputValue;
}

// Проверка на пустоту
function isEmpty(inputValue) {
    if (!inputValue) {
        alert('Поле не заполнено');
        return true;
    }
}

// Создание таски
function createTask(inputValue) {
    const task = document.createElement('div');
    task.classList.add('task');
    task.insertAdjacentHTML('afterbegin', ` 
            <div class="task__check">
                <input type="checkbox" class="task__check-input" name="checkbox">
            </div>
            <div class="task__content">
                ${inputValue}
            </div>
            <button type="button" class="btn-close">
                <img src="./source/icons/delete.svg" alt="Иконка крестика">
            </button>`);
            return task;
}

// Добавление элемента на страницу
function addTask(form, input, containerTasks) {
    const inputData = createData(form);
    if( isEmpty(inputData)) {
        return
    }
    input.value = '';
    containerTasks.append(createTask(inputData));
}





