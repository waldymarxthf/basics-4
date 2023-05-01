import data from './data.json' assert {type: "json"};

const persons = data.users

function findPerson(name) {
	return persons.find(persons => persons.firstName === name)
}

const person = findPerson("Steve");

console.log(`${person.firstName} ${person.lastName}, born ${person.dateOfBirth} and ${person.knowsAs}`)
