function сalc(a, b, operation) {
    if (operation === "add") {
        return a + b
    } else if (operation === "multi") {
        return a * b
    } else if (operation === "subtract") {
        return a - b
    } else return "Что-то не так"
}

// switch  

function calc(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "multi":
            return a * b;
        case "subtract":
            return a - b;
        default:
            return "hzhz"
    }
}