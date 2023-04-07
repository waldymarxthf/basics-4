function showVerticalMessage(message) {
  message = message.slice(0, 7);

  if (message.startsWith("s")) {
    console.log("S");
    message = message.slice(1);
  }

  for (const char of message) {
    console.log(char);
  }
}

showVerticalMessage("strada");
