const list = [ 
	{name: 'create a post', status: 'In progress', priority: 'low'}, 
  {name: 'test', status: 'Done', priority: 'high'} 
];

const STATUSES = {
	TODO: 'To Do',
	IN_PROGRESS: "In progress",
	DONE: 'Done'
}

const PRIORITIES = {
	HIGH: 'high',
	MEDIUM: 'medium',
	LOW: 'low'
}

const ERRORS = {
	TASK_NOT_EXIST: `❌ ERROR: Task not found!\n`,
	STATUS_NOT_EXIST: '❌ ERROR: Invalid status!\n',
	INVALID_PRIORITY: '❌ ERROR: Invalid priority!\n',
}

const DEFAULT = {
	DEFAULT_PROIRITY: PRIORITIES.HIGH,
	DEFAULT_STATUS: STATUSES.TODO
}

function _isExist(value, obj) {
	return Object.values(obj).includes(value)
}

function isStringEmpty(str) {
	return /^\s*$/.test(str);
}

function getTaskIndex(task) {
	return list.findIndex(element => element.name === task)
}

function isStatusExist(newStatus) {

	if(!_isExist(newStatus, STATUSES)) {
		console.log(ERRORS.STATUS_NOT_EXIST)
		return null
	}

	return newStatus
}

function isPriorityExist(newPriority) {

	if (!_isExist(newPriority, PRIORITIES)) {
		console.log(ERRORS.INVALID_PRIORITY)
		return null
	}

	return newPriority
}

function changeStatus(task, newStatus) {
	const taskIndex = getTaskIndex(task)

	if (taskIndex !== -1) {
		if (_isExist(newStatus, STATUSES)) {
			list[taskIndex].status = isStatusExist(newStatus)
		} else {
			console.log(ERRORS.STATUS_NOT_EXIST)
		}
	} else {
		console.log(ERRORS.TASK_NOT_EXIST)
	}
}

function changePriority(task, newPriority) {
	const taskIndex = getTaskIndex(task)

	if (taskIndex !== -1) {
		if(_isExist(newPriority, PRIORITIES)) {
			list[taskIndex].priority = isPriorityExist(newPriority)
		} else {
			console.log(ERRORS.INVALID_PRIORITY)
		}
	} else {
		console.log(ERRORS.TASK_NOT_EXIST)
	}
}

function addTask(name, status = DEFAULT.DEFAULT_STATUS, priority = DEFAULT.DEFAULT_PROIRITY) {

	if (isStringEmpty(name)) {
		console.log('The task name is empty.')
		return;
	}

	if (isStringEmpty(status)) {
		console.log('The task status is empty.')
		return;
	}

	if (isStringEmpty(priority)) {
		console.log('The task priority is empty.')
		return;
	}

	if (!_isExist(status, STATUSES)) {
		console.log(ERRORS.STATUS_NOT_EXIST)
		return;
	}

	if (!_isExist(priority, PRIORITIES)) {
		console.log(ERRORS.INVALID_PRIORITY)
		return;
	}

	const task = {name, status, priority}
	list.push(task)
}


function deleteTask(task) {
	const taskIndex = getTaskIndex(task)

	if (taskIndex !== -1) {
		list.splice(taskIndex, 1)
	} else {
		console.log(ERRORS.TASK_NOT_EXIST)
	}
}

function showList() {
	for (const status in STATUSES) {
		const filterList = list.filter(element => element.status === STATUSES[status])

		if (filterList.length === 0) {
			console.log(`${STATUSES[status]}:\n\t-`)
		} else {
			console.log(`${STATUSES[status]}:`)
			const tasks = filterList.map(element => `\t${element.name}: ${element.priority} priority`)

			console.log(tasks.join('\n'))
		}
	}
}


changeStatus('create a post', 'Done')
addTask('hello')
changePriority('hello', 'low')
addTask('play')
changeStatus('play', 'Done')
deleteTask('play')
showList()