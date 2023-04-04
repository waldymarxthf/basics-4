function showVerticalMessage(message) {
  let resultStr = '';

  if (message.length > 8) {
    message = message.slice(0, 7);
  }

  if (message[0] === 's') {
    message = 'S' + message.slice(1);
  }

  for (const char of message) {
    resultStr += '\n' + char;
  }

  return resultStr;
}

console.log(showVerticalMessage('strada'));
console.log(showVerticalMessage('stradafsdfsdfdsf'));
console.log(showVerticalMessage('test'));
console.log(showVerticalMessage('qwertyuiop'));
