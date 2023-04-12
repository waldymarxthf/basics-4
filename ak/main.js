const PRIORITY = {
   HIGH : 'high',
   LOW : 'low' ,
}

const STATUS = {
   TODO : 'to do',
   IN_PROGRESS : 'in progress',
   DONE : 'done' ,
}

const list = [ 
	{name: 'create a post', status: STATUS.IN_PROGRESS, priority: PRIORITY.LOW}, 
  {name: 'test', status: STATUS.DONE, priority: PRIORITY.HIGH} 
];

function addTask(taskName, priority){
   // const isTaskInArray = list.includes(); как найти задачу через метод includes?
   const isTaskInArray = list.find(item => item.name === taskName);

   if (isTaskInArray){
      console.log(`Задача "${taskName}" уже есть в списке`)
   } else {
      const newTask = {
         name : taskName ,
         status : STATUS.TODO ,
         priority ,
      }
      list.push(newTask);
   }
}

addTask('test','high');
addTask('to do the task','high');
console.log(list);
