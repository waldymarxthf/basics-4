let message = "strada is best roadmap";
const length = 7;
function isValidString(message) {
  if (!message || message === "" || message === "\n" || message === "0") {
    return false;
  }
  return true;
}
function showVerticalMessage(message) {
  if (!isValidString(message)) {
    console.log("This string is not valid");
    return null;
  }
  if (message[0] === "s") {
    message = message[0].toUpperCase() + message.slice(1);
    message = message.slice(0, length);
  }

  for (const char of message) {
    console.log(char);
  }
}
showVerticalMessage(message);
