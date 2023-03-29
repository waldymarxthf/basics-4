const phoneBook = {
    list: {
        "Strada": 88005553535,
        "Илья": 88003335555,
        "Ирина": 89002225656,
        "Мать": 9000192938,
        "Лукашенко Александр": 3456789,
        "Путин Владимир": 1234567890,
    },
    add(name, number) {
        this.list[name] = number; 
    }
};

let whoIAm = 'Jesus';
phoneBook.add(whoIAm, 666666666);

for (const name in phoneBook.list) {
    console.log(name);
    console.log(phoneBook.list[name]);
}