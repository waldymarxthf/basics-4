const templateMessage = document.querySelector('#template-message');
const formChatMessage = document.querySelector('.message-form');
const inputMessageNode = document.querySelector('.message-input');
const messageContainer = document.querySelector('.message-container');

function textIsValid(text) {
  return text !== '' && text.trim() !== '';
}

function addMyMessage(text) {
  const messageElement = document.importNode(templateMessage.content, true);
  const message = messageElement.querySelector('.message');
  message.classList.add('my-message');
  message.textContent = text; 
  messageContainer.appendChild(message); 
}


formChatMessage.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = inputMessageNode.value;
  if (!textIsValid(text)) {
    console.log('сообщение пустое');
    return;
  }
  addMyMessage(text);
  formChatMessage.reset();
});