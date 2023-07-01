const templateMessage = document.querySelector('#template-message');
const formChatMessage = document.querySelector('.message-form');
const inputMessageNode = document.querySelector('.message-input');
const messageContainer = document.querySelector('.message-container');

const sentCodeForm = document.querySelector('.email-input-form');
const emailInputNode = document.querySelector('.email-input');

const chatNameInputForm = document.querySelector('.chat-name-input-form');
const chatNameInputNode = document.querySelector('.chat-name-input');

const name = 'Я';

chatNameInputForm.addEventListener('submit', () => {
  fetch('https://edu.strada.one/api/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify( {name: name})
  })
  .then(() => {
    console.log('Все зашибись');
  })
  .catch((err) => {
    console.log(err)
  })
})

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

function addMyMessage(text, name) {
  const messageElement = document.importNode(templateMessage.content, true);
  const message = messageElement.querySelector('.message');
  message.classList.add('my-message');
  message.textContent = name + ': ' + text; 
  messageContainer.appendChild(message); 
}


formChatMessage.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = inputMessageNode.value;
  if (!textIsValid(text)) {
    console.log('сообщение пустое');
    return;
  };
  addMyMessage(text, name);
  formChatMessage.reset();
});