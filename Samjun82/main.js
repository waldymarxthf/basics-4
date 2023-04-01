const list = {
	"create a new practice task": "In Progress", 
	"make a bed": "Done",
	"write a post": "To Do",
}

function changeStatus(name, status) {  // меняет статус задачи
  return list[name] = status
}

function addTask(name) {              // добавляет новую задачу
  return list[name] = "To Do"
}

function deleteTask(name) {           // удаляет задачу
  return delete list[name]
}; 

function showList() {
  let toDo = ''
  let inProg = ''
  let done = ''

    for(const name in list) {
      switch(list[name]) {
        case 'To Do':
                    toDo += name + '\n    '
                    break
        case 'In Progress':
                    inProg += name + '\n    '
                    break
        case 'Done':
                    done += name + '\n    '
                    break
                    
      }
    }
console.log(`To Do:\n    ${toDo}\nIn Progress:\n    ${inProg}\nDone:\n    ${done}`)
}

changeStatus('create a new practice task', 'Done')
addTask('something')
addTask('swiming')
changeStatus('swiming', 'In Progress')
deleteTask('somthin')
showList()