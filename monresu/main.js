const templateMessage = document.querySelector('#template-message');
const formChatMessage = document.querySelector('.message-form');
const inputMessageNode = document.querySelector('.message-input');
const messageContainer = document.querySelector('.message-container');

const sentCodeForm = document.querySelector('.email-input-form');
const emailInputNode = document.querySelector('.email-input');

const codeInputForm = document.querySelector('.code-input-form');
const codeInputNode = document.querySelector('.code-input');

const chatNameInputForm = document.querySelector('.chat-name-input-form');
const chatNameInputNode = document.querySelector('.chat-name-input');

let userName = Cookies.get('name');

function sendAuthorizedRequest(url, method, data) {
  const token = Cookies.get('verification-token');

  if (!token) {
    console.log('Нет токена лол');
    return;
  }

  fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      console.log('ошибка');
    }
  })
  .catch(function(error) {
    console.log('ошибка' + error.message);
  });
}

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

chatNameInputForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = chatNameInputNode.value;
  console.log(name)
  const data = {
    name: name,
  };
  userName = name;
  sendAuthorizedRequest('https://edu.strada.one/api/user', 'PATCH', data);
  Cookies.set('name', name);
})

codeInputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const verificationToken = codeInputNode.value;
  Cookies.set('verification-token', verificationToken);
  console.log(Cookies.get('verification-token'));
})

function textIsValid(text) {
  return text !== '' && text.trim() !== '';
}

function addMessage(text, name) {
  const messageElement = document.importNode(templateMessage.content, true);
  const message = messageElement.querySelector('.message');
  const messageClass = name == userName ? 'my-message' : 'other-message';
  message.classList.add(messageClass);
  message.textContent = name + ': ' + text; 
  messageContainer.appendChild(message); 
}

addMessage('ЭТО ТЕСТОВЫЙ ТЕКС', userName);
addMessage('ЭТО ТЕСТОВЫЙ ТЕКС1', 'sadfjhkl');
addMessage('ЭТО ТЕСТОВЫЙ ТЕ5КС', userName);


formChatMessage.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = inputMessageNode.value;
  if (!textIsValid(text)) {
    console.log('сообщение пустое');
    return;
  };
  addMessage(text, userName);
  formChatMessage.reset();
});