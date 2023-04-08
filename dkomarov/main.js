const STATUS = {
    DONE: "Done",
    INPROGRESS: "In Progress"
};


const todoList = [
    {name: 'create a post', status: STATUS.INPROGRESS}, 
    {name: 'test', status: STATUS.INPROGRESS},
    {name: 'abrakadabra', status: STATUS.INPROGRESS},
    {name: 'walking', status: STATUS.INPROGRESS}
  
]; 

function addTask(task) {
    for (let elem of todoList) {
        const indexElem = elem;
        if (task === indexElem.name) {
        return console.log(`task ${task} in list`)
        };
    };

    todoList.push({name: task, status: STATUS.INPROGRESS}); 
    
};

function deleteTask(task) {
    const taskName = todoList.findIndex(tasks => tasks.name === task);
    todoList.splice(taskName, 1);
};

function changeStatus(task, newStatus) {
    for (key in todoList) {
        if (todoList[key].name === task) {
            todoList[key].status = newStatus;
        };
    };
};

function showList() {
    let tasksInProg = '';
    let tasksDone = '';
    for (const task of todoList) {
        if (task.status === STATUS.INPROGRESS) {
            tasksInProg += `\n  ${task.name}`;
            
        } else if (task.status === STATUS.DONE) {
            tasksDone += `\n  ${task.name}`;
            
        };
        
    };

    if (tasksInProg === '') {
        console.log(`In Progress: \n \t -`);
    } else {
        console.log(`In Progress:  ${tasksInProg}`);
    };

    if (tasksDone === '') {
        console.log(`Done: \n \t -`);
    } else {
        console.log(`Done: ${tasksDone}`);
    };  
};

addTask('qwerty');
addTask('qwerty');
addTask('reading');
addTask('reading');
addTask('testTEST');
deleteTask('abrakadabra');
deleteTask('testTEST')
changeStatus('test', STATUS.DONE);
changeStatus('qwerty', STATUS.DONE);
changeStatus('reading', STATUS.DONE);


showList();