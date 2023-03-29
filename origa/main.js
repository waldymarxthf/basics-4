function calc(operation, a, b) {
    switch (operation) {
    case "add":
        return a + b
    
    case "multi":
        return a * b
    
    case "subtract":
        return a - b
    }
}



alert(calc("add", 1, 2))


alert(calc("multi", 1, 2))

alert(calc("subtract", 3, 2))
