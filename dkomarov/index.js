import { date } from "./modules/convTime"

const parentNode = document.querySelector(".display");
const inputNode = document.querySelector(".form__input");
const formNode = document.querySelector(".form");
const template = document.querySelector("#template");

const openSettingsModal = document.querySelector('.header__btn-settings');
const openCodeModal = document.querySelector('.authorization-btn-code');

function createNewMessage(event) { 
  event.preventDefault();
  if (inputNode.value != "") {
    const textElement = template.content.cloneNode(true);
    textElement.querySelector(".message-nickname").textContent = "Me:";
    textElement.querySelector(".message-date").textContent = date;
    textElement.querySelector("p").textContent = inputNode.value;
    parentNode.append(textElement);
    this.reset();
  }
}

formNode.addEventListener("submit", createNewMessage);

openSettingsModal.addEventListener('click', () => {
  window.myDialog.showModal();
})

openCodeModal.addEventListener('click', () => {
  window.authentication.showModal();
  window.authorization.close();
  
})

window.addEventListener('DOMContentLoaded', () => {
  window.authorization.showModal();
})
