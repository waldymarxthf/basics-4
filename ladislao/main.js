const toDoList = {// хранилище
    list: {
        "to create to do list": "In progress", // имч задачи: 
        "to open VScode": "Done",
        "to relax": "To DO",
    },

    changeStatus (name, status) {// изменение статуса
        this.list[name] = status;
    },

    addTask (name, status) {// добавление
        this.list[name] = status;
    },

    deleteTask(name) {// удаление
        delete this.list[name];
    },

    showList() {// Чтение
        console.log(this.list)// выводит то, что хранится в list
    }


}

toDoList.changeStatus("to create to do list", "To Do");
toDoList.deleteTask("to relax");
toDoList.addTask("to work hard", "In progress");
toDoList.showList();
//console.log(toDoList);