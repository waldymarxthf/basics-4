function showVerticalMessage(str) {
    if(!str) {
        console.log('Напиши что-нибудь!')
        return
    }
    if(str.startsWith('s')) {
        str = str[0].toUpperCase() + str.slice(1)
    }
    if(str.length > 7) {
        str = str.slice(0,7)
    }
    for (let letter of str) {
        console.log(letter)
    }
    return
}

showVerticalMessage('strada oi-oi-oi')