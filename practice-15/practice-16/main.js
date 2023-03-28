
const phoneNumbers = {
    "Georg": 3874657,
    "Jorj": 4567456,
    "Grog Do": 3456575,
}

console.log(phoneNumbers)

phoneNumbers.Alex = 46475355456;
phoneNumbers["Grog Do"] = 55555555555;
delete phoneNumbers.Jorj;

console.log(phoneNumbers)

const bookNumbers = {
    list: {
        "Georg": 3874657,
        "Jorj": 4567456,
        "Grog Do": 3456575,     
    },
    log(){
        console.log(this.list)
    }
}

bookNumbers.log();