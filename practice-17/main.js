
const bookNumbers = {
    list: {
        "2": 4567456,
        "1": 3874657,
        "Grog Do": 3456575,  
        'Full name': undefined,
    },
    add(name, number){
        this.list[name] = number;
    },
    delete(name){
        delete this.list[name]
    }
}

bookNumbers.add('3', 7777777)
bookNumbers.delete("Grog Do")
console.log(bookNumbers)

console.log('Full name' in bookNumbers.list)

for(const key in bookNumbers.list){
    console.log("(" + key + " - " + bookNumbers.list[key] + ")")
}

