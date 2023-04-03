const defaultStatus = {
    TO_DO :'To Do',
    IN_PROGRESS : 'In progress',
    DONE : 'Done'
}

const list = {
    'create' : 'In progress',
    'make' :  'Done',
    'write' : 'To Do',
    'cock' : 'To Do',
}

function addTask (taskName) {
    if (taskName in list) {
        console.log('task already added');
    } else {
        list[taskName] = defaultStatus.TO_DO;
    }
}

function deleteTask (taskName) {
    if (taskName in list) {
        delete list[taskName];
    } else {
        console.log('task has been deleted');
    }
}

function changeStatus (taskName, newStatus) {
    if (taskName in list) {
        list[taskName] = newStatus;
    } else {
        console.log('no have task');
    }
}

function showList () {
    let toDo = '';
    let inProgress = '';
    let done = '';

    for (taskName in list) {
        switch (list[taskName]) {
            case defaultStatus.TO_DO : 
                toDo += `\t${taskName} \n`;
                break;
            case defaultStatus.IN_PROGRESS :
                inProgress += `\t${taskName} \n`;
                break;
            case defaultStatus.DONE :
                done += `\t${taskName} \n`;
                break;
        }
    }
    console.log(`To do:\n${toDo}\nIn Progress:\n${inProgress}\nDone:\n ${done} `);
}

showList ()