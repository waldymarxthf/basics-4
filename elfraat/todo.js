const STATUS = {
    TO_DO : 'To Do',
    DONE : 'Done',
    IN_PROGRESS : 'In Progress'
};
const PRIORITY = {
    LOW : 'low',
    HIGH : 'high'
};
const list = [
    {name: 'create a post', status: STATUS.TO_DO, priority: PRIORITY.HIGH},
    {name: 'test', status: STATUS.DONE, priority: PRIORITY.HIGH},
    {name: 'do todo list', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW},
    {name: 'do todo list', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW},
];
list[1] = {name: 'go out ', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW};

function addTask(name, status = STATUS.TO_DO,priority = PRIORITY.LOW){
    list.splice(list.length, 0, { name, status, priority });
}

function changeStatus(name,status){
    list[name] = status;
}

function showList(){
    for (const task of list){
        console.log(`
        name: ${task.name}  
        status: ${task.status} 
        priority: ${task.priority}`)
    }
}

addTask('addTask function');
addTask('test addTask function',STATUS.IN_PROGRESS,PRIORITY.HIGH);
changeStatus('addTask function', STATUS.DONE);
changeStatus()
showList();