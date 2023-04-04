function isValid(str) {
  if (!str || str == '\n' || str == '\r' || str == '\0' ) return false;
  return true;
}

const length = 7;

function showVerticalMessage(str) {
  if (!isValid(str)) {
    console.log('Строка пустая');
    return;
  }
  if (str[0] == 's') str = str[0].toUpperCase() + str.slice(1);
  str = str.slice(0, length);
  for (const char of str) {
    console.log(char)
  }
}

showVerticalMessage('strada okey')