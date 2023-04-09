let morningToDoList = [
    {name:'проснуться в 4:00',status:'In progress', priority:'high'},
    {name:'заниматься в Strada',status:'Done', priority:'high'},
    {name:'позавтракать',status:'In progress', priority:'middle'},
    {name:'разбудить детей',status:'Done', priority:'high'},
    {name:'собраться на работу',status:'To do', priority:'low'},
    {name:'отвезти детей в сад',status:'Done', priority:'high'},
    {name:'ехать на работу',status:'In progress', priority:'middle'}
];

function changeStatus(name,status,priority){
    const index = morningToDoList.findIndex(item => item.name === name);
    morningToDoList.splice(index,1,{name:name,status:status,priority:priority});
    }

    changeStatus('отвезти детей в сад','Done',"high");
function deleteTask(name){
        const index = morningToDoList.findIndex(item => item.name === name);
        morningToDoList.splice(index,1);
        }
    
       deleteTask('ехать на работу');
        changeStatus('отвезти детей в сад','Done',"high");
console.log(morningToDoList); 


// function changeStatus(name,age){
//     const index = arr.findIndex(item => item.name === name);
//     arr.splice(index,3,{name:name,age:age});}

//     changeStatus('Ben',35);
//     changeStatus('Clif',45); 
// console.log(arr);



// changeStatus("create a new practice task","Done");
//   addTask("have a walk","In progress"); // добавляет новую задачу
//   deleteTask("have a walk"); // удаляет задачу
//   showList();  