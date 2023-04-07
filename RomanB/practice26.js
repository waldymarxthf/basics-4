const DUPLICATE_TASK_TEXT = `Такая задача уже существует`

const list = [
    {
        id: Math.random().toString(),
        title: "create a new practice task",
        isPlanned: false,
        isDone: false,
        inProgress: false,
    },
    {
        id: Math.random().toString(),
        title: "go to the training",
        isPlanned: true,
        isDone: false,
        inProgress: false,
    },
    {
        id: Math.random().toString(),
        title: "do some exercises",
        isPlanned: true,
        isDone: false,
        inProgress: false,
    },
    {
        id: Math.random().toString(),
        title: "write a post",
        isPlanned: false,
        isDone: true,
        inProgress: false,
    },
]

const changeStatusToCompleted = (title) => {
    const completedTaskIndex = list.findIndex(item => item.title === title);
    list[completedTaskIndex].isDone = !list[completedTaskIndex].isDone;
    if (list[completedTaskIndex].isDone) {
        list[completedTaskIndex].isPlanned = false;
        list[completedTaskIndex].inProgress = false;
    }
}

const changeStatusToPlanned = (title) => {
    const plannedTaskIndex = list.findIndex(item => item.title === title);
    list[plannedTaskIndex].isPlanned = !list[plannedTaskIndex].isPlanned;
    console.log(list[plannedTaskIndex].isPlanned)
    if (list[plannedTaskIndex].isPlanned) {
        list[plannedTaskIndex].isDone = false;
        list[plannedTaskIndex].inProgress = false;
    }
}

const changeStatusToInProgress = (title) => {
    const inProgressTaskIndex = list.findIndex(item => item.title === title);
    list[inProgressTaskIndex].inProgress = !list[inProgressTaskIndex].inProgress;
    if (list[inProgressTaskIndex].inProgress) {
        list[inProgressTaskIndex].isDone = false;
        list[inProgressTaskIndex].isPlanned = false;
    }
}

const addTask = (title) => {
    const isDuplicate = list.find(item => item.title.toLowerCase() === title.trim().toLowerCase())
    if (isDuplicate) {
       return console.log(DUPLICATE_TASK_TEXT)
    } else {
        list.push({
            id: Math.random().toString(),
            title,
            isPlanned: false,
            isDone: false,
            inProgress: false,
        })
    }
    console.log(`Задача '${title}' успешно добавлена!`)
}

const deleteTask = (title) => {
    const taskIndexToDelete = list.findIndex(item => item.title === title);
    list.splice(taskIndexToDelete, 1);
}

const makeFinalArray = (arr) => {
     arr.length === 0 ? arr.push('-') :
        arr = arr.map(item => item.title).join('\n\t');
    return arr
}

const showList = (list) => {
    let itemsTodo = list.filter((item, index) => list[index].isPlanned);
    let itemsInProgress = list.filter((item, index) => list[index].inProgress);
    let itemDone = list.filter((item, index) => list[index].isDone);

    itemsTodo = makeFinalArray(itemsTodo)
    itemsInProgress = makeFinalArray(itemsInProgress)
    itemDone = makeFinalArray(itemDone)

    const notDistributedTasks = list.filter((item, index) => !list[index].isPlanned && !list[index].inProgress && !list[index].isDone)
    const notDistributedTitles = notDistributedTasks.map(item => item.title).join('\n\t')

    console.log(`
        Не распределенные: 
\t${notDistributedTitles}
        Запланированные: 
\t${itemsTodo}
        In progress:
\t${itemsInProgress}
        Done: 
\t${itemDone}
        `
            )
}

showList(list)
addTask('затащить todo на массивах');
showList(list)
