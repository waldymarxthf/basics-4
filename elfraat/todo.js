const TO_DO = 'To Do';
const IN_PROGRESS = 'In progress';
const DONE = 'Done';

const list = {
    "create a new practice task": IN_PROGRESS,
    "make a bed": DONE,
    "write a post": TO_DO
};

function addTask(task){
    list[task] = TO_DO;
}

function deleteTask(task){
    delete list[task];
}

function showList(){
    for (const task in list){
        console.log(`${task}: ${list[task]}`);
    }
}
function changeStatus(task, status){
    list[task] = status;
}

addTask('do todo list');
deleteTask('make a bed');
addTask('write change status function');
changeStatus('write a post', DONE);
changeStatus('do todo list', DONE);
addTask('commit and push pull request');
showList();
