import data from './data.json' assert {type: "json"};

const users = Object.values(data)[0];

users.forEach((user) => {
  console.log(`${user.firstName} ${user.lastName}, born at ${user.dateOfBirth} and ${user.knowsAs}`)
})