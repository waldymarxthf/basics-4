function Calc(a, b, operation) {
    if (operation === 'add' && typeof a !== 'number') {
        return a + b 
    } else if (operation === 'multi') {
        return a * b 
    } else if (operation === 'subtract') {
        return a - b
    }
    
    }
    
    console.log(Calc(f, 12, 'add'))
    console.log(Calc(24, 12, 'multi'))
    console.log(Calc(24, 12, 'subtract'))