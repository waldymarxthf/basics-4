const STATUSES = {
    TO_DO: 'To Do', 
    IN_PRIGRESS: 'In progress', 
    DONE: 'Done',
};

const PRIORITIES = {
    HIGH: "High",
    LOW: "Low",
};

const toDoList = [
    {name: 'create a post', status: STATUSES.IN_PRIGRESS, priority: PRIORITIES.LOW}, 
    {name: 'test', status: STATUSES.DONE, priority: PRIORITIES.HIGH}, 
];

// Создаём объект с методами проверки валидности
const validators = {
    isTaskNameValid (taskName) {
        return !!taskName;
    },
    isStatusValid (status) {
        return Object.values(STATUSES).includes(status);
    },
    isPriorityValid (priority) {
        return Object.values(PRIORITIES).includes(priority);
    },
    isTaskExist(taskName) {
        const taskExistence = toDoList.find(obj => {
            return (obj['name'] === taskName)
        });
       return !!taskExistence;
    }
}

const taskExistenceMessage = 'Такая задача уже существует';
const taskNonExistenceMessage = 'Такой задачи не существует';

// Находим индекс задачи:
function taskIndex(taskName) {
    const taskIndex = toDoList.findIndex(obj => 
    obj['name'] === taskName);
    return taskIndex;   
}

// Функция добавления новой задачи. Принимает в качестве аргументов текст задачи, статус, приоритет. Если статус и приоритет не выбраны, ставятся по умолчанию:
function addTask(task, status = STATUSES.TO_DO, priority = PRIORITIES.LOW) {
    if (validators.isTaskExist(task)) {
        console.log(taskExistenceMessage);
        return;
    }
    if (!validators.isTaskNameValid(task)) {
        console.error('Ошибка добавления задачи. Введите корректный текст задачи');
        return;
    }
    if (!validators.isStatusValid(status)) {
        console.error(`Ошибка добавления задачи. Недопустимый статус. Введите статус из списка: ${Object.values(STATUSES).join(', ')}`);
        return;
    }
    if (!validators.isPriorityValid(priority)) {
         console.error(`Ошибка добавления задачи. Недопустимый приоритет. Введите приоритет из списка: ${Object.values(PRIORITIES).join(', ')}`);
         return;
    }
    const newTask = {
        'name': task, 
        'status': status, 
        'priority': priority
    };
    toDoList.push(newTask)
    console.log(`Добавлена новая задача ${newTask.name.substr(0, 20)}`);
}

// Удаляем задачу. Сначала проверяем, что задача существует:
function deleteTask(task) {
    if (validators.isTaskExist(task)) {
        toDoList.splice(taskIndex(task), 1)
    }
    else {
        console.log(taskNonExistenceMessage);
    }
}

// Меняем статус задачи:
function setStatusTask(task, newStatus) {
    if (validators.isTaskExist(task)) {
        toDoList[taskIndex(task)]['status'] = newStatus;
    }
   
    else {
        console.log(taskNonExistenceMessage);
    }
}

// Меняем приоритет задачи:
function setPriorityTask(task, newPriority) {
    if (validators.isTaskExist(task)) {
        toDoList[taskIndex(task)]['priority'] = newPriority;
    }
    else {
        console.log(taskNonExistenceMessage);
    }
}


// Отображаем вывод части туду листа с заданным статусом
function showPart(targetStatus) {
    console.log(`\n${targetStatus}:`);
    // Фильтруем туду лист по статусу. Если задач с таким статусом нет в листе, выводим "-"
    const filteredList = toDoList.filter(obj => obj.status === targetStatus);
    if (filteredList.length === 0) {
        console.log(`\t-`);
    }
    // Cортируем возвращаемый массив по проиритету (сначала high)
    const sortList = filteredList.sort((a) => {
        if (a.priority === PRIORITIES.HIGH) {
            return -1;
        }
        if (a.priority === PRIORITIES.LOW) {
            return 1;
        }
    });
    // Выводим тест задачи и приоритет в консоль
    sortList.forEach(task => console.log(`\t${task.name}\t${task.priority}`));
}

// Фильтруем и сортируем по каждому статусу
function showList() {
    showPart(STATUSES.TO_DO);
    showPart(STATUSES.IN_PRIGRESS);
    showPart(STATUSES.DONE);

}



addTask('complete the task in strada', STATUSES.IN_PRIGRESS);

addTask('sleep', STATUSES.TO_DO);
addTask('teach a yoga class', STATUSES.DONE, 'fkjgojd');
addTask('english lessons', STATUSES.DONE);
addTask('', 'Done');
deleteTask('test');
setStatusTask('create a post', STATUSES.DONE);
setStatusTask('english lessons', STATUSES.DONE);
setStatusTask('complete the task in strada', STATUSES.DONE);
setPriorityTask('english lessons', PRIORITIES.HIGH);
setPriorityTask('teach a yoga class', PRIORITIES.HIGH);
setPriorityTask('complete the task in strada', PRIORITIES.HIGH);

showList();


