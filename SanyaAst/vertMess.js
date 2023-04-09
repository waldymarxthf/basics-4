function showVerticalMessage (message) {
    maxLenght = 7;
    upperFirstChar = message[0].toUpperCase() +  message.slice(1);

    for (let char of upperFirstChar.substring(0, maxLenght - 1)) {
        console.log(char);
    }
}

showVerticalMessage('stradadfg')