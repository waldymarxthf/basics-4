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

const errors = {
	TASK_NOT_FOUND: 'Задача не найдена 🚫\n',
	STATUS_ALREADY_IN_USE: 'Новое состояние  уже присвоено для этой задаче ⚠\n',
	TASK_NOT_EXIST: 'Задача не существует 🚫\n',
	STATUS_NOT_EXIST: 'Такого статуса не существует ⚠\n'
}

function getTaskIndex(task) {
	const taskIndex = list.findIndex(element => element.name === task)

	if(taskIndex === -1) {
		return -1
	}
	return taskIndex
}

function isStatusExist(newStatus) {
	let isExist = false
	for (const status in statuses) {
		if (newStatus === statuses[status]) {
			isExist = true
			break;
		}
	}
	if (!isExist) {
		console.log(errors.STATUS_NOT_EXIST)
	}
	return newStatus
}

function changeStatus(task, newStatus) {
	const taskIndex = getTaskIndex(task)

	if (taskIndex !== -1) {
		list[taskIndex].status = isStatusExist(newStatus)
	} else {
		console.log(errors.TASK_NOT_FOUND)
	}
}

function addTask(newTask, priority = priorities.HIGH) {
	const newObjTask = {name: newTask, status: statuses.TODO , priority: priority}
	list.push(newObjTask)
}

function deleteTask(task) {
	const taskIndex = getTaskIndex(task)

	if (taskIndex !== -1) {
		list.splice(taskIndex, 1)
	} else {
		console.log(errors.TASK_NOT_EXIST)
	}
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

changeStatus('create a post', 'Done')
addTask('переписать туду')
deleteTask('test')
showList()
