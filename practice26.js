let morningToDoList = [
    {name:'проснуться в 4:00',status:'In progress', priority:'high'},
    {name:'заниматься в Strada',status:'Done', priority:'high'},
    {name:'позавтракать',status:'In progress', priority:'middle'},
    {name:'разбудить детей',status:'Done', priority:'high'},
    {name:'собраться на работу',status:'To do', priority:'low'},
    {name:'отвезти детей в сад',status:'To do', priority:'high'},
    {name:'ехать на работу',status:'In progress', priority:'middle'}
];

    function addTask(name,status,priority){
        morningToDoList.push({name:name, status:status,priority:priority});
    }
    
    function changeStatus(name,status){
       for (let char of morningToDoList){
            if (char.name === name){
                char.status = status;
            }
       }

    }

    function deleteTask(name){
        const indexName = morningToDoList.findIndex(item => item.name === name);
            morningToDoList.splice(indexName,1);
    }
   
    function showList(){
    function showListTasks(status){
        const sortStatus = morningToDoList.filter(task => task.status === status);
     
        //  , sortStatus);
        console.log(`${status}:\t`)
        for (let task of sortStatus) {
            
                console.log(`\t${task.name} - ${task.priority}`);
            
        }
    }
    showListTasks('Done');
    showListTasks('To do');
    showListTasks('In progress');
}
    addTask('найти телефон',"Done",'high');
    deleteTask('проснуться в 4:00');
    console.log(morningToDoList); 
    changeStatus('отвезти детей в сад','In progress');
    console.log(morningToDoList); 
    showList(); 
   
       
       
        











