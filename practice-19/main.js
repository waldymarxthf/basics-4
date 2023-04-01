const toDoList = {
    list : {
        "Create a new todo list" : "In Progress",   
        "Make a bed" : "Done",
        "Write a post" : "To Do",
    },
    changeStatus(task, status) {
        this.list[task] = status;
    },
    addTask(task, status) {
        this.list[task] = status
    },
    deleteTask(task) {
        delete this.list[task];
    },
    showList(){
        console.log("To do:");
        let i = 0;
        for (let task in this.list) {
            
            if (this.list[task] == "To Do") {
                console.log(`\t` + task);
                i++;
            } 
        }
        if (i == 0) {
            console.log(`\t` + "-");
        }
        console.log("In Progress:")
        i = 0;
        for (let task in this.list) {
            if (this.list[task] == "In Progress") {
                console.log(`\t` + task);
                i++;
            }
        }
        if (i == 0) {
            console.log(`\t` + "-");
        }
        console.log("Done:");
        i = 0;
        for (let task in this.list) {
            if (this.list[task] == "Done") {
                console.log(`\t` + task);
                i++;
            }
        }
        if (i == 0) {
            console.log(`\t` + "-");
        }
    }
}

toDoList.addTask("Create a to-do list", "In Progress");
toDoList.changeStatus("Create a to-do list", "Done");
toDoList.deleteTask("Create a new todo list");
toDoList.showList();