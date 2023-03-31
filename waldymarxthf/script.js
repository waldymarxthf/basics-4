const list = {
	"create a new practice task": "In Progress", 
	"make a bed": "Done",
	"write a post": "To Do",
}

function changeStatus(task, newCondition) {
	list[task] = newCondition
}

function addTask(newTask) {
	const condition = 'To Do'
	list[newTask] = condition
}

function deleteTask(task) {
	if(task in list) {
		delete list[task]
	}
}

function showList() {
	console.log('Todo:')
	let hasToDo = false
	for (const task in list) {
		if (list[task] === 'To Do') {
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
		if (list[task] === 'In Progress') {
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
		if (list[task] === 'Done') {
			console.log(`\t${task}`)
			hasDone = true
		}
	}
	if (!hasDone) {
		console.log('\t-')
	}
}


changeStatus("create a new practice task", "To Do")
changeStatus("make a bed", "In Progress")
addTask('hello my name')
// deleteTask("make a bed")
showList()