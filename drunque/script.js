const tasks = [];

tasks.push("Listen to Techno");
tasks.push("Listen to lo-fi");

function showTasks() {
  let index = 0;
  for (const task of tasks) {
    console.log(`Task ${++index}. ${task}`);
  }
}

showTasks()

let finishedTask = tasks.pop();
