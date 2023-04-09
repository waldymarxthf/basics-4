function showVerticalMessage(str) {
    if (str[0] === "s") {

        str = str[0].toUpperCase() + str.slice(1)
    }
    if (str.length > 7) {
        str = str.substring(0, 7)
    }

    strOut = ""
    for (char of str) {
        strOut += char + "\n"
    }

    if (strOut.endsWith("\n")) {
        strOut = strOut.substring(0, strOut.length - 1)
    }
    console.log(strOut)
}
showVerticalMessage("ldkfvvlmdfvv")
