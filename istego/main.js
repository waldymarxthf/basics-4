let toDoList = ['Выполнить задание', 'Убраться', 'Бег'];

const userNotice = {
    'errorMessage': 'Введенное значение не корректно!',
    'notFound': 'Вы пытаетесь удалить не существующую запись!',
    'wasDeleted': 'Была удалена задача:',
    'allListTasks': 'Список всех задач:',
    'addedTask': 'Добавлена задача:'
}

// На будущее.
// let valueTask = 'Бег';

// Проверка на валидность строки
function validationTask(validTask) {
    //Регулярное выражение для пробелов любого количества в начале и конце строки
    const containsOnlySpaces = /^\s*$/.test(validTask);

    if (typeof (validTask) !== 'string' || !validTask || validTask === ' ' || containsOnlySpaces) {
        return false;
    }
    // Удаляем пробелы в начале и конце строки, если имеются
    return validTask = validTask.trim();
}

// Добавление задачи
function addTask(addTask) {
    if (!validationTask(addTask)) {
        console.log(userNotice.errorMessage);
    } else {
        addTask = validationTask(addTask);
        toDoList.unshift(addTask);
        console.log(userNotice.addedTask, addTask, '\n');
    }
}

// Удаление задачи
function deleteTask(delTask) {
    if (!validationTask(delTask)) {
        console.log(userNotice.errorMessage, '\n');
    } else if (validationTask(delTask)) {
        delTask = validationTask(delTask);
        for (const task of toDoList) {
            // Убираем чувствительность к регистру первой буквы, сравниваем на равенство.
            if (delTask.at(0).toLowerCase() + delTask.slice(1) === task.at(0).toLowerCase() + task.slice(1)) {
                let index = toDoList.indexOf(task);
                toDoList.splice(index, 1);
                console.log(userNotice.wasDeleted, task, '\n');
                return;
            }
        }
        console.log(userNotice.notFound, '\n');
    }
}

// Вывод всего списка задач
function showToDoList() {
    console.log(userNotice.allListTasks, '\n------------------');
    for (const task of toDoList) {
        console.log(task);
    }
}

addTask('Помыть полы');
deleteTask('бег');
showToDoList();
