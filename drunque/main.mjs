import data from "./data.json" assert { type: "json" };



for (const user of data.users) {
  console.log(`${user.firstName}, born at ${user.dateOfBirth} and ${user.knowsAs}`)
}