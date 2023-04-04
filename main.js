const statusToDo = {
    DEFAULT_TASK: "In Progress",
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    TO_DO: "To Do",
}



const list = {
    "create a new practice task": statusToDo.IN_PROGRESS,
    "make a bed": statusToDo.DONE,
    "write a post": statusToDo.TO_DO,
}

function showList() {
    console.log(statusToDo.TO_DO + ': ');
    for (const task in list) {
        if (list[task] === statusToDo.TO_DO) {
            const result = `"${task}"`;
            console.log(result);
        } else {
            console.log('None task');
        }
    }
    console.log("\n" + statusToDo.IN_PROGRESS + ': ');
    for (const task in list) {
        if (list[task] === statusToDo.IN_PROGRESS) {
            const result = `"${task}"`;
            console.log(result);
        }
    }
    console.log("\n" + statusToDo.DONE + ': ');
    for (const task in list) {
        if (list[task] === statusToDo.DONE) {
            const result = `"${task}"`;
            console.log(result);
        }
    }
}

function addTask(task) {
    if (!(task in list)) {
        list.task = statusToDo.DEFAULT_TASK;
    } else {
        return console.log('This is task is already create');
    }
}
function changeStatus(task, status) {
    if (task in list) {
        list[task] = status;
    }
}

function deleteTask(task) {
    if (task in list) {
        delete list[task];
    } else {
        return console.log('This is task already delete or not create');
    }
}

addTask("have a walk");
addTask("have a walk");
changeStatus("write a post", statusToDo.DONE);
deleteTask("make a bed");
deleteTask("make a bed");
showList();