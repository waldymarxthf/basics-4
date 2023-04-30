// массив статусов
const STATUS = ['to do', 'in progress', 'done'];
// массив приоритетов
const PRIORITY = ['low', 'high'];
// массив задач со статусами и приоритетом
const TODOLIST = [
    {task : 'make a bed', status : 'to do', priority : 'high'},
    {task : 'bake pancakes', status : 'done', priority : 'low'},
    {task : 'groceries', status : 'in progress', priority : 'high'},
    {task : 'buy contacts', status : 'to do', priority : 'low'},
    {task : 'make a brief', status : 'in progress', priority : 'low'},
    {task : 'walk a dog', status : 'to do', priority : 'low'},
    {task : 'feed a cat', status : 'done', priority : 'low'},
    {task : 'ride a whale', status : 'done', priority : 'high'},
];
// метод выведения ошибки
function error(){
    alert('AN ERROR OCURED!');
};
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
        render();
    } else {return error()};
};
// метод для удаления задачи
function delTask(thetask) {
    if (validation.isInTaskList(thetask)) {
        let index = TODOLIST.findIndex(element => element.task === thetask);
        TODOLIST.splice(index,1);
        render();
        return;
    } else {return error()};
};


function addHighTaskClick(){
    addTask(document.getElementById('inputTaskHigh').value, 'to do', 'high');
    console.log(document.getElementById('inputTaskHigh').value);
};
function addLowTaskClick(){
    addTask(document.getElementById('inputTaskLow').value, 'to do', 'low');
    console.log(document.getElementById('inputTaskLow').value);
};
function delTaskClick(){
    console.log(text);
};


let container = document.createElement('div');
container.classList.add('container');
// метод рендера заголовка списка (высокого приоритета или низкого)
function listInputsRender(whatlist, text, inputId, buttonPlus, placeholder){
    let highlistDiv = document.createElement('div');
    highlistDiv.classList.add(whatlist);
    highlistDiv.setAttribute('id', whatlist);
    document.body.appendChild(container);
    container.appendChild(highlistDiv);
    let header = document.createElement('div');
    header.classList.add('highlight');
    highlistDiv.appendChild(header);
    header.innerText = text;
    let inputCell = document.createElement('div');
    inputCell.classList.add('cell');
    inputCell.classList.add('inputCell');
    inputCell.setAttribute('id', 'cell');
    highlistDiv.appendChild(inputCell);
    let inputTaskAdd = document.createElement('input');
    inputTaskAdd.setAttribute('id', inputId);
    inputTaskAdd.setAttribute('placeholder', placeholder);
    inputTaskAdd.classList.add('input');
    let plus = document.createElement('div');
    plus.setAttribute('id', buttonPlus);
    plus.classList.add('plus');
    inputCell.appendChild(inputTaskAdd);
    inputCell.appendChild(plus);
}
// метод рендера новой ячейки
function cellAdd(theList, text){
    let newCell = document.createElement('div');
    let newCheckbox = document.createElement('input');
    let newDiv = document.createElement('div');
    let newCross = document.createElement('div');
    newCell.classList.add('cell');
    newCheckbox.classList.add('circle-check');
    newDiv.classList.add('theTask');
    newCross.classList.add('cross');
    newDiv.innerText = text;
    newCheckbox.setAttribute('type', 'checkbox');
    newCross.setAttribute('id', 'taskRemove');
    theList.appendChild(newCell);
    newCell.appendChild(newCheckbox);
    newCell.appendChild(newDiv);
    newCell.appendChild(newCross);
    newCross.addEventListener('click', ()=> {
        console.log(text)
    });

}




function render(){
    const indexHigh = TODOLIST.filter(object => object.priority === 'high');
    const indexLow = TODOLIST.filter(object => object.priority === 'low');
    container.innerHTML = '';
    
    listInputsRender('highlist', 'HIGH', 'inputTaskHigh', 'plusTaskHigh', 'Добавить важных дел');
    listInputsRender('lowlist', 'LOW', 'inputTaskLow', 'plusTaskLow', 'Добавить не важных дел');
    indexHigh.forEach(object => {
        cellAdd(highlist, object.task);
    });
    indexLow.forEach(object => {
        cellAdd(lowlist, object.task);
    });
    const buttonPlusHigh = document.getElementById('plusTaskHigh');
    const buttonPlusLow = document.getElementById('plusTaskLow');
    const buttonCross = document.getElementById('taskRemove');
    buttonPlusHigh.addEventListener('click', addHighTaskClick);
    buttonPlusLow.addEventListener('click', addLowTaskClick);
    // buttonCross.addEventListener('click', delTaskClick);
    console.log('RENDERED!')
};

render();
console.log(TODOLIST);
