function showVerticalMessage(message) {
  if (message.length > 8) {
    message = message.slice(0, 7);
  }

  if (message[0] === 's') {
    message = 'S' + message.slice(1);
  }

  return message;
}

console.log(showVerticalMessage('strada'));
console.log(showVerticalMessage('stradafsdfsdfdsf'));
console.log(showVerticalMessage('test'));
console.log(showVerticalMessage('qwertyuiop'));
