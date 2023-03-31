const TODO = 'To Do'
const IN_PROGRESS = "In Progress"
const DONE = 'Done'

//добавил строки в константу

const list = {
	"create a new practice task": TODO, 
	"make a bed": IN_PROGRESS,
	"write a post": DONE,
}

function changeStatus(task, newCondition) {
	if (!(task in list)) {
		console.log(`Задача '${task}' не найдена 🚫\n`)
		return
	}
	for (const key in list) {
    if (list[key] === newCondition && key !== task) {
      console.log(`Статус '${newCondition}' уже используется для задачи '${key}' ⚠\n`);
      break;
    }
  }
	list[task] = newCondition
}

//функция которая меняет статус задачи, также добавлена валидация на существоваение задачи, 
//и также если если мы пытаемся поменять один и тот же статус у задачи, то нам выдается ошибка

function addTask(newTask) {
	list[newTask] = TODO
}

//функция добавления задачи

function deleteTask(task) {
	if(task in list) {
		delete list[task]
	} else {
		console.log(`Задачи '${task}' не существует 🚫\n`)
	}
}

//функция удаления задачи с валидацией на существование задачи

function showList() {
	console.log('Todo:')
	let hasToDo = false //ключ для проверки на существование задачи
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
	let hasInProgress = false //ключ для проверки на существование задачи
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
	let hasDone = false //ключ для проверки на существование задачи
	for (const task in list) {
		if (list[task] === DONE) {
			console.log(`\t${task}`)
			hasDone = true
		}
	}
	if (!hasDone) {
		console.log('\t-')
	}
	return null //undefinf возвращать нельзя, поэтому должно возвращаться null
}


changeStatus("create a new practice task", "In Progress")
changeStatus("make a bed", "In Progress")
addTask('hello my name')
deleteTask("make a bedв")
showList()