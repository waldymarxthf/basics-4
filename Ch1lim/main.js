const PRIORITY = ['low', 'medium', 'high'];
const STATUS = ['ToDo', 'In progress', 'Done'];

const list = [
    {name: 'create a post', status: STATUS[0], priority: PRIORITY[0]}, 
    {name: 'test', status: STATUS[2], priority: PRIORITY[2]},
];

function searchInObjList(key1, key2, value) {
    for (let i in list) {
        for (let k in list[i]){
            if (list[i][k] == key1) list[i][key2] = value;
        }
    }
}


function changeStatus(name, status) {
    if (!name.trim()) return console.log(' Не задан name')
    if (+status > 2 || +status < 0) { 
        return console.log('Задайте правельный статус цифрой \n ToDo: 0 \n In progress: 1 \n Done: 2');
    }
    status = STATUS[+status];

    searchInObjList(name, "status", status);
    
}

function changePriority(name, priority) {
    if (!name.trim()) return console.log(' Не задан name')
    if (+priority > 2 || +priority < 0) { 
        return console.log('Задайте правельный приоритет цифрой \n low: 0 \n medium: 1 \n high: 2');
    }
    priority =  PRIORITY[+priority];

    searchInObjList(name, "priority", priority);
}

function deleteTask(name) {
    let indexName = list.findIndex( task => task.name === name);
    list.splice(indexName, 1);
    
}

function addTask(name) {
    let task = {name: name, status: STATUS[0], priority: PRIORITY[0] }
    list.push(task);
}

function searchForShowlist(num) {
    let score = false;
    for (let i in list) {
        for (let k in list[i]){
            if (list[i][k] == STATUS[num] ) {
                console.log('\t' + list[i].name + ': ' + list[i].priority)
                score = true;
            }
        }
    }
    if(!score) console.log('\t-')
}

function showList() {
    console.log('ToDo:')
    searchForShowlist(0);

    console.log('In progress:')
    searchForShowlist(1);

    console.log('Done:')
    searchForShowlist(2);
}

showList()
