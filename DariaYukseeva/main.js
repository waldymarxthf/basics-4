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
const validations = {
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
    if (validations.isTaskExist(task)) {
        console.log(taskExistenceMessage);
        return;
    }
    if (!validations.isTaskNameValid(task)) {
        console.error('Введите текст задачи');
        return;
    }
    if (!validations.isStatusValid(status)) {
        console.error('Неверный статус');
        return;
    }
    if (!validations.isPriorityValid(priority)) {
         console.error('Неверный приоритет');
         return;
    }
    const newObject = {
        'name': task, 
        'status': status, 
        'priority': priority
    };
    toDoList.push(newObject)
    
}

// Удаляем задачу. Сначала проверяем, что задача существует:
function deleteTask(task) {
    if (validations.isTaskExist(task)) {
        toDoList.splice(taskIndex(task), 1)
    }
    else {
        console.log(taskNonExistenceMessage);
    }
}

// Меняем статус задачи:
function changeStatusTask(task, newStatus) {
    if (validations.isTaskExist(task)) {
        toDoList[taskIndex(task)]['status'] = newStatus;
    }
   
    else {
        console.log(taskNonExistenceMessage);
    }
}

// Меняем приоритет задачи:
function changePriorityTask(task, newPriority) {
    if (validations.isTaskExist(task)) {
        toDoList[taskIndex(task)]['priority'] = newPriority;
    }
    else {
        console.log(taskNonExistenceMessage);
    }
}

// Фильтруем туду лист по статусу, затем сортируем возвращаемый массив по проиритету (сначала high), затем выводим тест задачи и приоритет в консоль. Если задач с таким статусом нет в листе, выводим "-"
function showPart(targetStatus) {
    console.log(`\n${targetStatus}:`);
    
    const filteredList = toDoList.filter(obj => obj.status === targetStatus);
    if (filteredList.length === 0) {
        console.log(`\t-`);
    }
    filteredList.sort((a) => {
        if (a.priority === PRIORITIES.HIGH) {
            return -1;
        }
        if (a.priority === PRIORITIES.LOW) {
            return 1;
        }
    }).forEach(task => console.log(`\t${task.name}\t${task.priority}`));
}

// Фильтруем и сортируем по каждому статусу
function showList() {
    showPart(STATUSES.TO_DO);
    showPart(STATUSES.IN_PRIGRESS);
    showPart(STATUSES.DONE);

}



addTask('complete the task in strada', 'In progress');

addTask('sleep', 'To Do');
addTask('teach a yoga class', 'To Do');
addTask('english lessons', 'Done');
deleteTask('test');
changeStatusTask('create a post', STATUSES.DONE);
changeStatusTask('english lessons', STATUSES.DONE);
changeStatusTask('complete the task in strada', STATUSES.DONE);
changePriorityTask('english lessons', PRIORITIES.HIGH);
changePriorityTask('teach a yoga class', PRIORITIES.HIGH);
changePriorityTask('complete the task in strada', PRIORITIES.HIGH);

showList();


