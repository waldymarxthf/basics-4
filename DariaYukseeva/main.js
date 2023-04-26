const STATUSES = {
    TO_DO: 'To Do', 
    DONE: 'Done',
};

const PRIORITIES = {
    HIGH: "High",
    LOW: "Low",
};

const toDoList = [];

const taskExistenceMessage = 'Такая задача уже существует';

const mainToDo = getElement('.todo-list');
const highPriorityTasks = getElement('.tasks-high-priority');
const lowPriorityTasks = getElement('.tasks-low-priority');

const submitBtns = getElements('.btn-adding');
const inputsAddingTask = getElements('.adding-input');

// получает элементы из ДОМ
function getElement(selector) {
    return document.querySelector(selector);
}
function getElements(selector) {
    return document.querySelectorAll(selector);
}

// проверяет, что имя задачи валидное
function isTaskNameValid (taskName) {
    return !!taskName.trim();
}

// Проверяет, есть ли уже такая задача
function isTaskExist(taskName) {
    const taskExistence = toDoList.find(obj => {
        return (obj['name'] === taskName)
    });
    
   return !!taskExistence;
}

// Находит индекс задачи:
function getTaskIndex(taskName) {
    const taskIndex = toDoList.findIndex(obj => 
    obj['name'] === taskName);
    return taskIndex;   
}

// Получает статус задачи из атрибута элемента
function getTaskStatusByAttribute(task) {
    return task.getAttribute('data-status');
}

// Функция добавления новой задачи. Принимает в качестве аргументов текст задачи, приоритет. Cтатус ставится по умолчанию TO_DO. Проверяем, валидное ли имя задачи и нет ли уже такой задачи. Если проверки пройдены, добавляем задачу:
function addTask(taskName, priority) {
    if (isTaskExist(taskName)) {
        // добавить всплывающее окно об ошибке?
        console.log(taskExistenceMessage);
        return;
    }
    if (!isTaskNameValid(taskName)) {
        return;
    }
    
    const newTask = {
        'name': taskName.trim(), 
        'status': STATUSES.TO_DO, 
        'priority': priority
    };
    toDoList.push(newTask)
    
    console.log(`Добавлена новая задача ${newTask.name.substr(0, 20)}...`);
}

// Удаляет задачу. 
function deleteTask(task) {
    toDoList.splice(getTaskIndex(task), 1);
    // сделать всплывающее окно с предложением отменить удаление?
    console.log(`Задача ${task.substr(0, 10)}... удалена`);
       
}

// Меняет статус задачи:
function setStatusTask(task, newStatus) {
    toDoList[getTaskIndex(task)]['status'] = newStatus;
}

// Фильтрует задачи по приоритету
function filteringTasksByPriority(priority) {
    
    return toDoList.filter(obj => obj.priority === priority);
}

//сортирует массив по статусу
function sortTaskByStatus(arr) {
    
    const sortTasks = arr.sort((a) => {
        if (a.status === STATUSES.TO_DO) {
            return -1;
        }
        if (a.status === STATUSES.DONE) {
            return 1;
        }
    });
    return sortTasks;
}

// Добавляем отфильтрованные и отсортированные задачи в нужный блок по приоритету
function addTasksToDOM(priority, tasksBlock) {
    // фильтруем по приоритету
    const filteredTasksByPriority = filteringTasksByPriority(priority);
    // сортируем по статусу отфильтрованный ранее массив
    const sortedTasksByStatus = sortTaskByStatus(filteredTasksByPriority);
    // для каждой задачи добавляем data-status со значением статуса задачи и добавляем элемент с задачей в HTML
    if (sortedTasksByStatus.length !== 0) {
        sortedTasksByStatus.forEach(task => {
            tasksBlock.insertAdjacentHTML('beforeend', `
                <div class="task-item" data-status="${task.status}">
                    <label>
                        <input type="checkbox"  class="input-checkbox">
                        <div class="task-text" >
                            ${task.name} 
                        </div>
                    </label>
                    <button class="btn-task-delete"></button>
                </div>
            `);
            
        });
    }
    return
    
}

// рендерим ДОМ на основании данных из массива toDoList. 
function render() {
    // Удаляем все элементы с задачами
    getElements('.task-item').forEach(task => task.remove());
    // добавляем задачи каждую в свой блок по приоритету
    addTasksToDOM(PRIORITIES.HIGH, highPriorityTasks);
    addTasksToDOM(PRIORITIES.LOW, lowPriorityTasks);
    // добавляем для задач со статусом DONE класс .completed
    const tasks = getElements('.task-item')
    tasks.forEach(task => {
        
        if (getTaskStatusByAttribute(task) === STATUSES.DONE) {
            task.classList.add('completed')
        }
    });
}

// Функция обработчика события для кнопки сабмит. 
const submitBtnHandler = (event) => {
    // Добавляет задачу 
    event.preventDefault();
    if (event.target === submitBtns[0]) {
        
        addTask(inputsAddingTask[0].value, PRIORITIES.HIGH);
    }
    else if (event.target === submitBtns[1]) {
        
        addTask(inputsAddingTask[1].value, PRIORITIES.LOW);
    }
    // очищает поле ввода и рендерит ДОМ
    inputsAddingTask.forEach(input => input.value = '');
    render();
    
}

// повесили событие клик на кнопки сабмит
submitBtns.forEach(btn => btn.addEventListener('click', submitBtnHandler));

// Функция обработчика события на клик по задачам.   
const clickHandler = (event) => {
    // Если клик был сделан по элементу с классом input-checkbox, то вызывает функцию обработчика чекбоксов. Рендерит ДОМ 
    if (event.target.classList.contains('input-checkbox')) {
        checkboxHandler(event);
        render();
        return
    }
    // Если клик был на кнопку delete, то вызывает функцию обработчика для кнопки delete. Рендерит ДОМ 
    else if (event.target.classList.contains('btn-task-delete')) {
        btnDeleteHandler(event)
        render();
        return
    }
    
}

// Функция обработчика события на клик для чекбокса.   
function checkboxHandler(event) {
    // Находит текст выбранной задачи
    const checkedTaskText = event.target.nextElementSibling.textContent.trim();
    // и статус выбранной задачи
    const checkedTaskStatus = getTaskStatusByAttribute(event.target.parentElement.parentElement)
    // Если статус TO_DO, то меняем его на Done и наоборот.
    if (checkedTaskStatus === STATUSES.TO_DO) {
        setStatusTask(checkedTaskText, STATUSES.DONE);
    }
    else {
        setStatusTask(checkedTaskText, STATUSES.TO_DO);
    }
   
}

// Функция обработчика события на клик для кнопки delete.  
function btnDeleteHandler(event) {
    // Находит текст удаляемой задачи
    const deletedTaskText = event.target.previousElementSibling.lastElementChild.textContent.trim();
    // этот текст передаёт в функцию удаления задач из массива.
    deleteTask(deletedTaskText);
}

// Повесили событие клик на туду лист 
mainToDo.addEventListener('click', clickHandler);


