

function showVerticalMessage(str) {
  if (str[0] == 's') str = str[0].toUpperCase() + str.slice(1);
  // str[0]
  // str1 = str[0, 7];
  // console.log(str1[0].toLocaleUpperCase());
  let str1 = str.slice(0,7);
  for (let char of str1) {
    console.log(char)
  }
  // console.log(str.slice(0, 7))
};
showVerticalMessage('strada');

