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
	for(const task in list) {
		if(list[task] === 'To Do') {
			console.log(`\t${task}`)
		} else if (list[task] === 'In Progress' || list[task] === 'Done') {
			console.log(`\t-`)
			break;
		}
	}
	console.log('In Progress:')
	for(const task in list) {
		if(list[task] === 'In Progress') {
			console.log(`\t${task}`)
		} else if (list[task] === 'To Do' || list[task] === 'Done') {
			console.log(`\t-`)
			break;
		}
	}
	console.log('Done:')
	for(const task in list) {
		if(list[task] === 'Done') {
			console.log(`\t${task}`)
		} else if (list[task] === 'To Do' || list[task] === 'In Progress') {
			console.log(`\t-`)
			break;
		}
	}
}

changeStatus("create a new practice task", "Done")
changeStatus("create a new practice task", "To Do")
addTask('hello my name')
deleteTask("make a bed")
showList()