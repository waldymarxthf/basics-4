
export const listTasks = {
    list : new Set(),
    
    addTaskInList(task) {
        this.list.add(task)
    }, 

    removeTaskInList(task) {
        this.list.delete(task)
    } ,    

    returnListArray() {
        const array = [];

        this.list.forEach(elem => array.push(elem));
        return array;
    },

    changeStatus(task, status) {
        this.list.forEach(taskObj => {
            if (taskObj.task === task) {
                taskObj.status = status;
            }
        })
    }
}

