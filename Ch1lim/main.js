function calc(operator, valueFirst, valueSecond) {
    switch (operator) {
        case 'add':
            return +valueFirst + +valueSecond;
            
        case 'multi':
            return +valueFirst * +valueSecond;
            
        case 'subtract':
            return +valueFirst - +valueSecond;
    }
}
console.log(calc("multi", 1, 2));