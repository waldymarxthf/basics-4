const templateMessage = document.querySelector('#template-message');
const formChatMessage = document.querySelector('.message-form');
const inputMessageNode = document.querySelector('.message-input');
const messageContainer = document.querySelector('.message-container');

const sentCodeForm = document.querySelector('.email-input-form');
const emailInputNode = document.querySelector('.email-input')

sentCodeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInputNode.value;
  const data = {
    email: email,
  };
  fetch('https://edu.strada.one/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(() => {
    console.log('Все зашибись');
  })
  .catch((err) => {
    console.log(err)
  })
});

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