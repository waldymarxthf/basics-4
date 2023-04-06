function showVerticalMessage(str) {
  if (str[0] === str[0].toLowerCase()) {
    str = str[0].toUpperCase() + str.slice(1, 6);
  }
  let strVertical = str;
  for (let char of strVertical) {
    strVertical = char;
    console.log(strVertical);
  } break;
}
console.log(showVerticalMessage(`strada`));
console.log(showVerticalMessage(`stradaaaaaaaa`));
