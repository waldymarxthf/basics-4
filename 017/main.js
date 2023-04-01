const kudamono = {
    list: {
        ringo: 12,
        mikan: 9,
        remon: 4,
        orenji: 35
    },
};

function getAmountFruits() {
let n = 0
let sum = 0
for (const name in kudamono.list) {
    sum += kudamono.list[name]
    n++
    console.log(`${name} - ${kudamono.list[name]}`);

}
console.log(`Итого видов фруктов: ${n} всего фруктов: ${sum}`);}
getAmountFruits()
const deer = structuredClone(kudamono) // метод копирования объектов


deer.list.John = 123
console.log(kudamono)
console.log(deer)
