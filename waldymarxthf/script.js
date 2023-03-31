const TODO = 'To Do'
const IN_PROGRESS = "In Progress"
const DONE = 'Done'

const list = {
	"create a new practice task": "In Progress", 
	"make a bed": "Done",
	"write a post": "To Do",
}

function changeStatus(task, newCondition) {
	if (!(task in list)) {
		console.log(`Задача '${task}' не найдена 🚫\n`)
		return
	}
	for (const key in list) {
    if (list[key] === newCondition && key !== task) {
      console.log(`Свойство '${newCondition}' уже используется для задачи '${key}' ⚠\n`);
      break;
    }
  }
	list[task] = newCondition
}


function addTask(newTask) {
	list[newTask] = TODO
}

function deleteTask(task) {
	if(task in list) {
		delete list[task]
	} else {
		console.log(`Задачи '${task}' не существует 🚫\n`)
	}
}

function showList() {
	console.log('Todo:')
	let hasToDo = false
	for (const task in list) {
		if (list[task] === TODO) {
			console.log(`\t${task}`)
			hasToDo = true
		}
	}
	if (!hasToDo) {
		console.log('\t-')
	}
	
	console.log('In Progress:')
	let hasInProgress = false
	for (const task in list) {
		if (list[task] === IN_PROGRESS) {
			console.log(`\t${task}`)
			hasInProgress = true
		}
	}
	if (!hasInProgress) {
		console.log('\t-')
	}
	
	console.log('Done:')
	let hasDone = false
	for (const task in list) {
		if (list[task] === DONE) {
			console.log(`\t${task}`)
			hasDone = true
		}
	}
	if (!hasDone) {
		console.log('\t-')
	}
	return null
}


changeStatus("create a new practice task", "In Progress")
changeStatus("make a bed", "In Progress")
addTask('hello my name')
deleteTask("make a bedв")
showList()