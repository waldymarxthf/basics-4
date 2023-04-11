
const book = {
    list: {
        "Za" : 100,
        "Xr" : 200,
        "Cz" : 300
    },

    add (symbol, number) {
        this.list[symbol] = number;
    },

    delete (symbol) {
         delete this.list[symbol];
    }
};

book.add ('Vb', 400);
console.log (book.list);

console.log ('-------------');

book.delete ('Za');
console.log (book.list);

for (const name in book.list) {
    console.log (name, '-', book.list[name]);
}