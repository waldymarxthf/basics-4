import {
  logOut,
  settings,
  modalWindow,
  closeModal,
  formSend,
  myTemplate,
  companionTemplate,
  messageBlock,
  inputMessage,
  modalSettingsInput,
  modalSettingsForm,
} from "./modules/constants.js";
import { convertTime } from "./modules/utils.js";

function checkUser(user) {
    return user === 'Дмитрий' ? myTemplate : companionTemplate
}

function renderMessage(template, value, date, nickname) {
  const item = template.content.cloneNode(true);
  item.querySelector(".chat-mainWindow-message-info-nickName").textContent = nickname;
  item.querySelector(".chat-mainWindow-message-info-text").textContent = value;
  item.querySelector(".chat-mainWindow-message-info-time").textContent = date;
  messageBlock.append(item);
}

settings.addEventListener("click", () => {
  modalWindow.showModal();
});
closeModal.addEventListener("click", () => {
  modalWindow.close();
});

formSend.addEventListener("submit", (event) => {
  event.preventDefault();
  renderMessage(checkUser(modalSettingsInput.value), inputMessage.value, convertTime(), modalSettingsInput.value);
  inputMessage.value = "";
});


modalSettingsForm.addEventListener("submit", (event) => {
    event.preventDefault()
    modalWindow.close();
    return modalSettingsInput.value
  });
