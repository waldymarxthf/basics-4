const toDo = [
  "make a breakfast",
  "feed the pug",
  "play sports",
  "play civilization",
];

toDo.push("eat a pizza");
toDo.shift();

console.log(toDo);

for (const task of toDo) {
  console.log("I want to " + task)
}