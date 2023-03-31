let name = 'Pavel';
console.log (Number(name), Boolean(name), String(name));

let age = 20;
console.log (Number(age), Boolean(age), String(age));

let drivingLicense = false;
console.log (Number(drivingLicense), Boolean(drivingLicense), String(drivingLicense));

let car = null;
console.log (Number(car), Boolean(car), String(car));

let wife = undefined;
console.log (Number(wife), Boolean(wife), String(wife));

let money = 10n;
console.log (Number(money), Boolean(money), String(money));

let homeAdress = {
    street: 'moskovskaya',
    numberHouse: 56,
    flat: 32
};
console.log (Number(homeAdress), Boolean(homeAdress), String(homeAdress)); 

let id = symbol('id');
console.log (Number(id), Boolean(id), String(id));
