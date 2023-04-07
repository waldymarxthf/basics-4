function showVerticalMessage(message) {
  message = message.slice(0,8)

  if (message.startsWith("s")) {
    console.log("S")
    message = message.slice(1)
  }

  for (const char of message) {
    console.log(char)
  }
}

showVerticalMessage("strada")
