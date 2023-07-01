const settingsButton = document.querySelector('.settings-button');
const settingsModal = document.getElementById('settings-modal');
const closeBtnSettings = document.querySelector('.close-settings');
const formInputChatName = document.querySelector('.chat-name-input-form');
const inputCodeForm = document.querySelector('.code-input-form');

const authModal = document.querySelector('#authrozation-modal');
const closeBtnAuth = document.querySelector('.close-auth');
const logBtn = document.querySelector('.exit-button');
const inputCodeBtn = document.querySelector('.input-code');

const codeModal = document.querySelector('#code-modal');
const closeBtnCode = document.querySelector('.close-code');

function closeModal(modal) {
  modal.style.display = 'none';
};
function openModal(modal) {
  modal.style.display = 'block';
};

inputCodeForm.addEventListener('submit', () => {
  closeModal(codeModal);
});

inputCodeBtn.addEventListener('click', () => {
  closeModal(authModal);
  openModal(codeModal);
});

closeBtnCode.addEventListener('click', () => {
  closeModal(codeModal);
});

logBtn.addEventListener('click', () => {
  openModal(authModal);
});

closeBtnAuth.addEventListener('click', () => {
  closeModal(authModal);
});

formInputChatName.addEventListener('submit', (event) => {
  event.preventDefault();
  closeModal(settingsModal);
});

settingsButton.addEventListener('click', () => {
  openModal(settingsModal);
});

closeBtnSettings.addEventListener('click', () => {
  closeModal(settingsModal)
});

window.addEventListener('click', (event) => {
  if (event.target == settingsModal) {
    closeModal(settingsModal);
  }
});
