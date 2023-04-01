

// let user = {};

// // присваивание значения свойству
// user["likes birds"] = true;

// // получение значения свойства
// // alert(user["likes birds"]); // true

// // удаление свойства
// delete user["likes birds"];

// console.log(user)


let object = {
    "my list": {
        ringo: 5,
        mikan: 4,
        remon: 10
    },
    del(name) {
        delete object["my list"][name]
    },
    add(name, number) {
        object["my list"][name] = number
    }
}



// console.log(object["my list"]["ringo"])

// object["my list"]["ringo"]=1000

// console.log(object["my list"]["ringo"])

console.log(object["my list"])
object.del("ringo")
console.log(object["my list"])
object.add("sss", 3454)
console.log(object["my list"])
