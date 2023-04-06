function showVerticalMessage(str) {
  
  if (str[0] == toLowerCase()) {
    console.log(str[0].toUpperCase() + str.slice(1, 7));
  };
  let strVertical = '';
  for (let i = 0, i < 7, i++) {
    strVertical += i + '\n';
  }console.log(strVertical);

} console.log(showVerticalMessage(`strada`));

