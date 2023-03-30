
const names = {
    Dima: 'Dima',
    Lena: 'Lena',
    Sveta: 'Sveta',
};

const names2 = {};

for(const key in names){
    names2[key] = names[key];
}

console.log(names2)

const names3 = {};

Object.assign(names3, names)

console.log(names3)