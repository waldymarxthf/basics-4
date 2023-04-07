const statusList = {
    toDo: "To Do",
    inProgress: "In Progress",
    done: "Done"
};

let toDoList = [];

function changeTask(status, name) {
    switch (~toDoList.findIndex(task => task.name === name)) {
        case 0:
            console.log(`Task "${name}" doesn't exist.\n\n`)
            break
        default:
            let task = {
                status: status,
                name: name
            }
            toDoList[toDoList.findIndex(task => task.name === name)].status = status;
            console.log(`The task "${name}" is successful changed to "${status}".\n\n`)
    }
}

function addTask(status, name) {
    switch (~toDoList.findIndex(task => task.name === name)) {
        case 0:
            let task = {
                status: status,
                name: name
            }
            toDoList.push(task);
            console.log(`The task "${name}" is successful add with status "${status}".\n\n`)
            break
        default:
            console.log(`Task "${name}" already exist.\n\n`)
    }
}

function deleteTask(name) {
    switch (~toDoList.findIndex(task => task.name === name)) {
        case 0:
            console.log(`Task "${name}" doesn't exist.\n\n`)
            break
        default:
            toDoList.splice(toDoList.findIndex(task => task.name === name),1);
            console.log(`The task "${name}" is successful deleted.\n\n`)
    }
}

function listTasks() {
    switch (toDoList.length) {
        case 0:
            console.log("ToDo пуст.\n\n");
            break
        default:
            for (let keySL in statusList) {
                let flag = 0;
                console.log(`${statusList[keySL]}:`);
                for (const task of toDoList) {
                    if (statusList[keySL] === task.status) {
                        console.log(`\t${task.name}`);
                        ++flag;
                    }
                }
                flag === 0 ? console.log(`\t-`) : false;
            }
            console.log('\n');
    }
}

listTasks()
addTask(statusList.toDo, 'почитать')
addTask(statusList.toDo, 'почитать')
addTask(statusList.done, 'помыть посуду')
addTask(statusList.done, 'помыть машину')
listTasks()
changeTask(statusList.done, 'почитать')
deleteTask('помыть посуду')
deleteTask('помыть кота')
changeTask(statusList.done, 'посадить цветы')
listTasks()