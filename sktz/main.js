function showVerticalMessage (text) {
    let newText = text.slice (0, 7);


    for (let symbol of newText) {
        if (symbol.toLowerCase() == 's') {
            console.log (symbol.toUpperCase());
        } else {
            console.log (symbol);
        }
    }

}

showVerticalMessage ('strada');