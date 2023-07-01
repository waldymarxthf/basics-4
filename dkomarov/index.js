import { date } from "./modules/convTime"

const parentNode = document.querySelector(".display");
const inputNode = document.querySelector(".form__input");
const formNode = document.querySelector(".form");
const template = document.querySelector("#template");


const openCodeModal = document.querySelector('.authorization-btn-code');
const inputAuthorizationValue = document.querySelector('.authorization-input');
const formForRequest = document.querySelector('.authorization-form__input');

const authorizationInput = document.querySelector('.authentication-input');
const authenticationButton = document.querySelector('.authentication-btn');


//кнопка выйти 
const buttonOut = document.querySelector('.header__btn-in');
const settingNameInput = document.querySelector('.item-input');
const settingForm = document.querySelector('.popup-form__input');

//смена имени
const openSettingsModal = document.querySelector('.header__btn-settings');

function setCookie() {
  const token = authorizationInput.value;
  document.cookie = `token=${token}`;
}

//получение куки
function getCookie() {
  return document.cookie.split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=')
    acc[name] = value
    return acc
  }, {})
}

const cookie = getCookie()
const cookieName = cookie.token


async function postData() {
  const url = 'https://edu.strada.one/api/user';
  const data = { email: inputAuthorizationValue.value };
  const response = await fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const result = await response.json()
  console.log(result);
}

async function changeName() {
  const name = settingNameInput.value;
  const url = 'https://edu.strada.one/api/user';
  const data = { name: name }
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${cookieName}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const result = await response.json();
  console.log(result);
}

async function getData(cookieName) {
  const url = 'https://edu.strada.one/api/user/me';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${cookieName}`
    }
  })
  const result = await response.json()
  console.log(result)
}

function createNewMessage(event) { 
  event.preventDefault();
  if (inputNode.value != "") {
    const textElement = template.content.cloneNode(true);
    textElement.querySelector(".message-nickname").textContent = 'Me:';
    textElement.querySelector(".message-date").textContent = date;
    textElement.querySelector("p").textContent = inputNode.value;
    parentNode.append(textElement);
    this.reset();
  }
}

function addInfoMessage() {
  const textElem = document.createElement('p');
  textElem.textContent = 'Код отправлен на вашу почту ✅';
  const parentElem = document.querySelector('.authorization');
  textElem.classList.add('info-message');
  parentElem.append(textElem);
}

function test() {
  window.authentication.showModal();
  window.authorization.close();

}

formForRequest.addEventListener('submit', () => {
  postData();
  addInfoMessage()
  setTimeout(test, 1500)
});

formNode.addEventListener("submit", createNewMessage);

openSettingsModal.addEventListener('click', () => {
  window.myDialog.showModal();

})

openCodeModal.addEventListener('click', () => {
  window.authentication.showModal();
  window.authorization.close();
  
})

authenticationButton.addEventListener('click', () => {
  getData(cookieName)
  setCookie();
  window.authentication.close();
});

buttonOut.addEventListener('click', () => {
  window.authorization.showModal();
})

settingForm.addEventListener('submit', () => {
  changeName();
  window.myDialog.close();
})

window.addEventListener('DOMContentLoaded', () => {
  getData(cookieName);
})
