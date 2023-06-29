// Получаем элементы DOM
const settingsButton = document.querySelector('.settings-button');
const exitButton = document.querySelector('.exit-button');
const settingsModal = document.getElementById('settings-modal');
const closeButton = document.querySelector('.close-button');
const formInputChatName = document.querySelector('.chat-name-input-form');

function closeModal() {
  settingsModal.style.display = 'none';
};
function openModal() {
  settingsModal.style.display = 'block';
};

formInputChatName.addEventListener('submit', (event) => {
  event.preventDefault();
  closeModal();
});

settingsButton.addEventListener('click', () => {
  openModal();
});

closeButton.addEventListener('click', () => {
  closeModal()
});

window.addEventListener('click', (event) => {
  if (event.target == settingsModal) {
    closeModal();
  }
});
