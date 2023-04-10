const toDoList = {// хранилище
    list: {
        "to create to do list": "In progress", // имч задачи - ключ объекта значения - статусы
        "to open VScode": "Done",
        "to relax": "To DO",
    },

    changeStatus (name, status) {// изменение статуса
        this.list[name] = status;
        console.log('Статус ' +`${status}` + ' для статуса ' + `${name}` + ' успешно изменен');
    },

    addTask (name, status) {// добавление элементов
        this.list[name] = status;
        console.log('Задача ' + `${name}` + ' со статусом ' + `${status}` + ' успешно добавлена')
    },

    deleteTask(name) {// удаление элементов
        delete this.list[name];
        console.log('Задача ' + `${name}` + ' была удалена')
    },

    showList() {// чтение элементов
        for (key in this.list){
            console.log(`${key}: ${this.list[key]}`);
            
        }
    }
}

toDoList.addTask("to open VScode", "Done");
toDoList.deleteTask("to relax");
toDoList.addTask("to work hard", "In progress");
toDoList.showList();
