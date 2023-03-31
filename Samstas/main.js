let user = {
  name: "John Doe",
};

let object1 = {
  age: 20,
};

let object2 = {
  height: 180,
};

Object.assign(user, object1, object2);

console.log(user);

let newUser = user;

console.log(newUser);
