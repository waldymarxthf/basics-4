const users = [1, 3, 4, 5, 8];
users.forEach((user) => {
  console.log(`Number is ${user}`);
});

const animals = ["cat", "dog", "elephant", "tiger", "lion"];
const firstAnimalFind = animals.find((name) => name.length > 7);

console.log(firstAnimalFind);
