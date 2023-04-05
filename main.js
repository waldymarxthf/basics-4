function showVerticalMessage(str, end) {

    let newStr = str.slice(0, 1).toUpperCase() + str.slice(1, end);

    for (let i = 0; i < newStr.length; i++) {
        console.log(newStr[i]);
    }

};

showVerticalMessage('stradafffffffffffffff', 10);