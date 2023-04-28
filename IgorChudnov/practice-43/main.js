const plusTaskHigh = document.getElementById('taskAddHigh');
const plusTaskLow = document.getElementById('taskAddLow');
const cross = document.getElementById('taskRemove');
const inputHigh = document.getElementById('inputTaskHigh');
const inputLow = document.getElementById('inputTaskLow');
const HIGHLIST = document.getElementById('highlist');
const LOWLIST = document.getElementById('lowlist');


const MESSAGES = {
    ERROR : 'AN ERROR OCURED!',
    SUCSESS : 'SUCSESS!',
    STATUS_ADDED : 'NEW STATUS ADDED!',
    PRIORITY_ADDED : 'NEW PRIORITY ADDED!',
};
const STATUS = ['to do', 'in progress', 'done'];
const PRIORITY = ['low', 'high'];
// проверки
const validation = {
    // проверка на строчность
    isString : function isString(value) {
        if (typeof(value)==='string'){
            return true;
        } else {return false};
    },
    // проверка на пустоту
    isEmpty : function isEmpty(value){
        if (value==='' || value==null) {
            return true;
        } else {return false};
    },
    //проверка на существование в списке статусов
    isInStatus : function isInStatus(status) {
        if (STATUS.includes(status)) {
            return true;
        } else {return false};
    },
    //проверка на существование в списке приоритетов
    isInPriority : function isInPriority(priority) {
        if (PRIORITY.includes(priority)) {
            return true;
        } else {return false};
    }, 
    //проверка на существование в списке задач
    isInTaskList : function isInTaskList(thetask) {
        const TASKARRAY = [];
        TODOLIST.forEach(item => {
            TASKARRAY.push(item.task);
        });
        if (TASKARRAY.includes(thetask)) {
            return true;
        } else {return false};
    },
};
const TODOLIST = [
    {task : 'make a bed', status : 'to do', priority : 'high'},
    {task : 'bake pancakes', status : 'done', priority : 'low'},
    {task : 'groceries', status : 'in progress', priority : 'high'},
    {task : 'buy contacts', status : 'to do', priority : 'low'},
    {task : 'make a brief', status : 'in progress', priority : 'high'},
    {task : 'walk a dog', status : 'to do', priority : 'low'},
    {task : 'feed a cat', status : 'done', priority : 'low'},
    {task : 'ride a whale', status : 'done', priority : 'high'},
];

// метод для добавления задачи
function addTask(thetask,status,priority) {
    // проверка строчности введенных данных
    if (validation.isString(thetask) && 
        validation.isString(status) && 
        validation.isString(priority) &&
        // проверка что введенные данные не пустые
        !validation.isEmpty(thetask) &&
        !validation.isEmpty(status) &&
        !validation.isEmpty(priority) &&
        // проверка наличия задания в списке
        !validation.isInTaskList(thetask) &&
        // проверка наличия статуса в списке
        validation.isInStatus(status) &&
        // проверка наличия приоритета в списке
        validation.isInPriority(priority)
        ) {
        TODOLIST.push({
            task : thetask,
            status : status,
            priority : priority
        });
        return thetask;
    } else {return false};
};
function delTask(thetask) {
    if (validation.isInTaskList(thetask)) {
        let index = TODOLIST.findIndex(element => element.task === thetask);
        TODOLIST.splice(index,1);
        return true
    } else {return false};
};


function  cellAdd(theList, theInput, priority){
    let taskInput = addTask(theInput.value, 'to do', priority);
    if (taskInput===false) {return alert(MESSAGES.ERROR);};

    let newCell = document.createElement('div');
    let newCheckbox = document.createElement('input');
    let newDiv = document.createElement('div');
    let newCross = document.createElement('div');

    newCell.classList.add('cell');
    newCheckbox.classList.add('circle-check');
    newDiv.classList.add('theTask');
    newCross.classList.add('cross');

    newCheckbox.setAttribute('type', 'checkbox');
    newCross.setAttribute('id', 'taskRemove');

    theList.appendChild(newCell);
    newCell.appendChild(newCheckbox);
    newCell.appendChild(newDiv);
    newCell.appendChild(newCross);

    newDiv.insertAdjacentText('beforeend', taskInput);
    theInput.value = '';
};
function  addCellHigh(){
    cellAdd(HIGHLIST, inputHigh, 'high');
};
function addCellLow(){
    cellAdd(LOWLIST, inputLow, 'low');
};


function deleteCell(){
    cross.parentNode.remove();
}



plusTaskHigh.addEventListener('click', addCellHigh);
plusTaskLow.addEventListener('click', addCellLow);

// cross.addEventListener('click', deleteCell);