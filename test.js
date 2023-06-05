
let obj1 = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  },
  hobbies: ["reading", "traveling", "hiking"]
};

let obj2 = {...obj1};
obj2.age = 31;
obj2.address.street = "456 Oak St";
obj2.hobbies.push("swimming");

console.log(obj1.age);//30
console.log(obj2.age);//31
console.log(obj1.address.street); //456
console.log(obj2.address.street); //456
console.log(obj1.hobbies);
console.log(obj2.hobbies);