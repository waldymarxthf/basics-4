import data from './data.json' assert {type: "json"};


console.log(`${data.users[0].firstName}, born at ${data.users[0].dateOfBirth} and ${data.users[0].knowsAs}
${data.users[1].firstName}, born at ${data.users[1].dateOfBirth} and ${data.users[1].knowsAs}
${data.users[2].firstName}, born at ${data.users[2].dateOfBirth} and ${data.users[2].knowsAs}
${data.users[3].firstName}, born at ${data.users[3].dateOfBirth} and ${data.users[3].knowsAs}`)