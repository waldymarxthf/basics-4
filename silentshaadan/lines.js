const maxLength = 7
function showVerticalMessage(stringMessage) {
    flag = stringMessage.length > maxLength ? maxLength : stringMessage.length;
    for (let i = 0; i < flag; i++) {
        switch(typeof stringMessage.at(i)) {
            case "string":
                stringMessage.at(i) === "s" && i === 0 ?
                    console.log(stringMessage.at(0).toUpperCase()) : console.log(stringMessage.at(i));
            default:
                break
        }
    }
}

showVerticalMessage('Strada');