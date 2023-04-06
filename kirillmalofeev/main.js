function showVerticalMessage(str) {
  if (str[0] === "s") {
    str = str[0].toUpperCase() + str.slice(1, 7);
  }
  let strVertical = str;
  for (let char of strVertical) {
    strVertical = char;
    console.log(strVertical);
  }
}

showVerticalMessage(`stradaa`);
showVerticalMessage(`Stradaaaaaaaa`);
