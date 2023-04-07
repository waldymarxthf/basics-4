const STATUS = {
    TO_DO: 'To do',
    DONE: 'Done',
    IN_PROGRESS: 'In progress',
};

const PRIORITY = {
    HIGH: 'High',
    AVERAGE: 'Average',
    LOW: 'Low',
};

const toDoList = [
    { name: 'create a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW },
    { name: 'test', status: STATUS.DONE, priority: PRIORITY.HIGH },
];

function showToDoList() {
    let countToDoElement = false;
    for (item in STATUS) {
        console.log(`-------"${STATUS[item]}"--------`);
        toDoList.forEach(element => {
            if (element.status === STATUS[item]) {
                console.log(element.name);
                countToDoElement = true;
            }
        });
        if (!countToDoElement) {
            console.log('-');

        }
        countToDoElement = false;
        console.log();
    }
}

function addTask(name, status, priority) {

    const isExists = toDoList.find(isExists => isExists.name === name);

    if (isExists === undefined) {
        toDoList.splice(toDoList.length, 0, { name, status, priority });

    } else {
        console.log(`This is task is already`);
    }
}

addTask('create a posts', STATUS.TO_DO, PRIORITY.AVERAGE);

showToDoList();
