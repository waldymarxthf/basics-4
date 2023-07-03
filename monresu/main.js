import { openModal, closeModal } from "./modules/functions.mjs";

const settingsBtn = document.querySelector('.settings-button');
const settingsModal = document.querySelector('.settings-modal');

const templateMessage = document.querySelector('.template-message');


settingsBtn.addEventListener('click', () => {
  openModal(settingsModal);
  const closeBtn = document.querySelector('.close-settings');
  closeBtn.addEventListener('click', function handler() {
    closeModal(settingsModal);
    removeEventListener('click', handler);
  });
});

const authBtn = document.querySelector('.auth-button');
const authModal = document.querySelector('.authrozation-modal');

authBtn.addEventListener('click', () => {
  openModal(authModal);
  const closeBtn = document.querySelector('.close-auth');
  closeBtn.addEventListener('click', function handler() {
    closeModal(authModal);
    removeEventListener('click', handler);
  });
})

const emailForm = document.querySelector('.email-input-form');

const API = {
  URL: 'https://edu.strada.one/api',
  USER: 'user',
  ME: 'me',
  MESSAGES: 'messages',
}

emailForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = new FormData(emailForm).get('email');
  const response = await fetch(`${API.URL}/${API.USER}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email })
  });
  console.log('Отправлено')
});

const chatNameInputForm = document.querySelector('.chat-name-input-form');

let token = Cookies.get('token');


chatNameInputForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(token);
  closeModal(settingsModal);
  const name = new FormData(chatNameInputForm).get('name');
  const response = await fetch(`${API.URL}/${API.USER}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name })
  });
  console.log('Имя изменено')
  userName = await fetchData('name');
  getData();
});

const getData = async () => {
  const response = await fetch(`${API.URL}/${API.USER}/${API.ME}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (response.ok) {
    console.log('Запрос на данные получен');
  };
  const data = await response.json();
  return data;
}


const fetchData = async (prop) => {
  const data = await getData();
  return data[prop];
}

const submitForm = document.querySelector('.code-input-form');

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const code = new FormData(submitForm).get('code');
  Cookies.set('token', code);
  closeModal(submitModal);
})

const inputCodeBtn = document.querySelector('.input-code');
const submitModal = document.querySelector('.submit-modal');

inputCodeBtn.addEventListener('click', () => {
  closeModal(authModal);
  openModal(submitModal);
});

submitModal.addEventListener('click', (event) => {
  if (event.target.classList.contains('close-button')) {
    closeModal(submitModal);
  };
})

let userName = await fetchData('name');

const messageContainer = document.querySelector('.message-container');

function createMessageElement(author, message, time) {
  const classMessage = author === userName ? 'my-message' : 'other-message';
  const messageBlock = document.createElement('div');
  messageBlock.append(templateMessage.content.cloneNode(true));
  const authorMessage = messageBlock.querySelector('.author-message');
  const textMessage = messageBlock.querySelector('.text-message');
  const timeMessage = messageBlock.querySelector('.time-message');
  messageBlock.classList.add('message');
  authorMessage.textContent = author;
  textMessage.textContent = ': ' + message;
  timeMessage.textContent = time;
  messageBlock.classList.add(classMessage);
  return messageBlock;
}

const getMessages = async () => {
  const response = await fetch(`${API.URL}/${API.MESSAGES}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
}

async function renderMessages() {
  const data = await getMessages();
  const messages = data.messages;

  const messageElements = messages.map(message => {
    return createMessageElement(message.user.name, message.text, new Date(message.updatedAt).toLocaleTimeString('en-US'));
  });

  messageContainer.append(...messageElements);
}

renderMessages();

const messageForm = document.querySelector('.message-form');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const textMessage = new FormData(messageForm).get('message');
  const timeMessage = new Date().toLocaleTimeString('en-US');
  renderMessage(userName, textMessage, timeMessage)
});

setTimeout(() => {
  messageContainer.scrollTop = messageContainer.scrollHeight;
}, 1000)