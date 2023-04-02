
const list = {
    "GYM": "Done",
    "Book": "To Do",
    "Task for deleting": "To Do"
  };
  
function changeStatus(task, status) {
  list[task] = status

}

function addTask(task, status) {
  list[task] = status
}

function deleteTask(task) {
  delete list[task]
}

function showList() {
  let hasProgress = false;
  console.log('Progress: ')
  for(let listStatus in list) {
      if(list[listStatus] === 'Progress'){
          console.log(`\t${listStatus}`);
          hasProgress = true;
      } 

  }

  if (!hasProgress){
      console.log('-')
  }

  let hasDone = false;
  console.log('Done: ')
  for(let listStatus in list) {
      if(list[listStatus] === 'Done'){
          console.log(`\t${listStatus}`);
          hasDone = true;
      }
  }

  if (!hasDone){
      console.log('-')
  }

  let hasTodo = false;
  console.log('To Do: ')
  for(let listStatus in list) {
      if (list[listStatus] === 'To Do'){
          console.log(`\t${listStatus}`);
          hasTodo = true; 
      }

  }
  if (!hasTodo){
      console.log(`\t-`)
  }
// console.log(list);
}

changeStatus('GYM', 'Done');
addTask('JS ', 'Progress');
deleteTask('Task for deleting');
showList();



// СПАСИБО, ИЛЬЕ ЗА ПОМОЩЬ С "Флагами"