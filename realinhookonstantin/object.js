const phoneBook = {
  list: {
    'Alex': 79090996010,
    'Chil': 79068987898,
    'Grigoriy': 79822750839,
    'Alina': 79193244213,
    'Ivan': 79995202948,
  },
  add(name, number){
    this.list[name] = number;
  },
  delete(name){
    delete this.list[name]
  } 
}

phoneBook.add('Pasha', 79823046875);
console.log(phoneBook.list);
phoneBook.delete('Alex', 79090996010);
console.log(phoneBook.list);


// console.log('Alex' in phoneBook.list)

for (const name in phoneBook.list) {
  console.log(name + ' - ' + phoneBook.list[name])
}



const listTasks = {
	list: {
    "create a new practice task": "In Progress", 
    "make a bed": "Done",
    "write a post": "To Do",
  },
  changeStatus(change, status){
    this.list[change] = status;
  },
  addTask(task, add) {
    this.list[task]= add;
  },
  deleteTask(task){
    delete this.list[task];
  },
  showList(){
    console.log(this.list);
    let count = 0;
    for(const task in listTasks.list) {
      if (listTasks.list[task] == "Done") {
        count++;
      } else {
        count--;
      }
    }
    if(count > 1) {
      console.log('Have is Done')
    } else{
      console.log('Nothing is Done')
    }
  }
}

listTasks.addTask('Gaming in Horror of Archem', 'Nope');
listTasks.addTask('Relax', 'Yeap');
listTasks.changeStatus("create a new practice task", "Yeap");
listTasks.changeStatus("make a bed", "I do home task")

listTasks.showList()