const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'} 
];

const statuses = {
	TODO: 'To Do',
	IN_PROGRESS: "In Progress",
	DONE: 'Done'
}

const priorities = {
	HIGH: 'high',
	MEDIUM: 'medium',
	LOW: 'low'
}

function changeStatus(task, status) {
	const findTask = list.find(element => element.name === task)

	for(let newTask in findTask) {
		findTask[newTask = 'status'] = status
	}
}

function addTask(newTask, priority = priorities.HIGH) {
	const newObjTask = {name: newTask, status: statuses.TODO , priority: priority}
	list.push(newObjTask)
}

function deleteTask(task) {
	list.splice(list.findIndex(element => element.name === task), 1)
}

function showList() {

	for (const status in statuses) {
		let hasStatus = false

		console.log(`${statuses[status]}`)
		const filterList = list.filter(element => element.status === statuses[status])

		filterList.forEach(element => {
			if(element) {
				console.log(`\t${element.name}: ${element.priority} priority`)
				hasStatus = true
			}
		})

		if(!hasStatus) {
			console.log(`\t-`)
		}

	}
}

changeStatus('create a post', 'To Do')
addTask('переписать туду')
deleteTask('test')
showList()
