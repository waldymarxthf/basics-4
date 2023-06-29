import { format } from "date-fns";

function convTime() {
  const date = new Date();
  const newDate = format(date, 'HH:mm');
  return newDate
}

const date = convTime()

const parentNode = document.querySelector(".display");
const inputNode = document.querySelector(".form__input");
const formNode = document.querySelector(".form");
const template = document.querySelector("#template");

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
