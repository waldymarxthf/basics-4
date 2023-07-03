import { openModal, closeModal } from "./modules/functions.mjs";
import { getData, sendCode, changeName, getMessages, fetchData } from "./modules/api.mjs";

const settingsBtn = document.querySelector('.settings-button');
const settingsModal = document.querySelector('.settings-modal');
const authBtn = document.querySelector('.auth-button');
const authModal = document.querySelector('.authrozation-modal');
const chatNameInputForm = document.querySelector('.chat-name-input-form');
const emailForm = document.querySelector('.email-input-form');
const submitForm = document.querySelector('.code-input-form');
const inputCodeBtn = document.querySelector('.input-code');
const submitModal = document.querySelector('.submit-modal');

const messageForm = document.querySelector('.message-form');

const templateMessage = document.querySelector('.template-message');
const messageContainer = document.querySelector('.message-container');

let userName = await fetchData('name');

settingsBtn.addEventListener('click', () => {
  openModal(settingsModal);
  const closeBtn = document.querySelector('.close-settings');
  closeBtn.addEventListener('click', function handler() {
    closeModal(settingsModal);
    removeEventListener('click', handler);
  });
});

authBtn.addEventListener('click', () => {
  openModal(authModal);
  const closeBtn = document.querySelector('.close-auth');
  closeBtn.addEventListener('click', function handler() {
    closeModal(authModal);
    removeEventListener('click', handler);
  });
})

emailForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  sendCode(emailForm);
});

chatNameInputForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  closeModal(settingsModal);
  const name = new FormData(chatNameInputForm).get('name');
  changeName(name);
  console.log('Имя изменено')
  userName = name;
  getData();
});

submitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const code = new FormData(submitForm).get('code');
  Cookies.set('token', code);
  closeModal(submitModal);
})

inputCodeBtn.addEventListener('click', () => {
  closeModal(authModal);
  openModal(submitModal);
});

submitModal.addEventListener('click', (event) => {
  if (event.target.classList.contains('close-button')) {
    closeModal(submitModal);
  };
})

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

async function renderMessages() {
  const data = await getMessages();
  const messages = data.messages;

  const messageElements = messages.map(message => {
    return createMessageElement(message.user.name, message.text, new Date(message.updatedAt).toLocaleTimeString('en-US'));
  });

  messageContainer.append(...messageElements);
}

renderMessages();

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const textMessage = new FormData(messageForm).get('message');
  const timeMessage = new Date().toLocaleTimeString('en-US');
  const node = createMessageElement(userName, textMessage, timeMessage);
  messageContainer.append(node);  
  messageContainer.scrollTop = messageContainer.scrollHeight;
  messageForm.reset();
});

setTimeout(() => {
  messageContainer.scrollTop = messageContainer.scrollHeight;
}, 1000)