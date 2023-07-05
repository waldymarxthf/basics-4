"use strict";
// CHAT

import dom from "./dom.js";
import { cookies } from "./cookie.js";
// import state from "./state.mjs";
// import utils from "./utils.mjs";

let userNickName = null;
let userEmail = null;
// let otherNickName = "Sam";
let socket;
const url = `https://edu.strada.one/api/user`;
const urlMessages = `https://edu.strada.one/api/messages/`;

//%%%%%%%%%%%%%%%%%%%%%%%%%%%  Utils  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function timeFormat(stamp) {
  return stamp.slice(11, 16);
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%  Business Logic  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function getInput(event, author = "user") {
  event.preventDefault();
  const token = cookies.uncookify("token");
  const text = dom.inputMessage.value;
  const now = new Date();
  const stamp = now.toISOString().slice(0, -1);
  const timeFormatted = timeFormat(stamp);
  dom.inputMessage.value = "";

  return sendUserMessage(text, token);
}
// function sendUserMessage(text, token) {
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(`{ message: ${text} }`),
//   };

//   fetch(urlMessages, requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
// function placeUserMessage(text, timeStamp, token) {
//   const clone = dom.templateUserMessage.content.cloneNode(true);
//   const name = clone.querySelector(".name");
//   console.log(userNickName);
//   name.textContent = userNickName;
//   const stamp = clone.querySelector("em");
//   stamp.textContent = obj.timeStamp;
//   const messageText = clone.querySelector(".user-message-text");
//   messageText.textContent = text;
//   dom.parentMessages.appendChild(clone);
// }

function uiMessage(message) {
  const data = JSON.parse(message.data);
  console.log(data);
  let clone;
  if (data.user.email !== userEmail) {
    clone = dom.templateOtherMessage.content.cloneNode(true);
  } else {
    clone = dom.templateUserMessage.content.cloneNode(true);
  }

  const name = clone.querySelector(".name");
  name.textContent = data.user.name;
  const stamp = clone.querySelector("em");
  stamp.textContent = timeFormat(data.updatedAt);
  const messageText = clone.querySelector(".message-text");
  messageText.textContent = data.text;
  dom.tape.appendChild(clone);
}

//%%%%%%%%%%%%%%%%%%%%%%%%  REQUESTS TO SERVER  %%%%%%%%%%%%%%%%%%%%%%%%%%%%

function changeName(event) {
  event.preventDefault();
  const newName = dom.inputDialogName.value.trim();
  saveName(newName);
  const token = cookies.uncookify("token");
  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: newName }),
  };

  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function submitUserEmail(event) {
  event.preventDefault();
  dom.btnSubmitCode.classList.remove("hidden");
  userEmail = dom.inputDialogEmail.value.trim();

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: userEmail }),
  };

  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function getHistory() {
  const token = cookies.uncookify("token");
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  fetch(urlMessages, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const array = data.messages.map(({ text, createdAt: time, user }) => ({
        text,
        time: timeFormat(time),
        user: user.name,
        email: user.email,
      }));

      renderHistory(array);
    })
    .catch((error) => {
      console.error(error);
    });
  // .finally(() => {
  //   scrollTapeDown();
  // });
}

function prepareHTML(obj) {
  if (obj.email !== userEmail) {
    const clone = dom.templateOtherMessage.content.cloneNode(true);
    const name = clone.querySelector(".other-name");

    name.textContent = obj.user;
    const stamp = clone.querySelector("em");
    stamp.textContent = obj.time;
    const messageText = clone.querySelector(".other-message-text");
    messageText.textContent = obj.text;
    return clone;
  } else {
    const clone = dom.templateUserMessage.content.cloneNode(true);
    const name = clone.querySelector(".name");

    name.textContent = obj.user;
    const stamp = clone.querySelector("em");
    stamp.textContent = obj.time;
    const messageText = clone.querySelector(".user-message-text");
    messageText.textContent = obj.text;
    return clone;
  }
}

function renderHistory(array) {
  const nodes = array.reverse().map((m) => prepareHTML(m));
  const strings = nodes.map((fragment) => {
    const div = document.createElement("div");
    div.appendChild(fragment.cloneNode("true"));

    return div.innerHTML;
  });
  const html = strings.join("");
  dom.tape.innerHTML += html;
  // Scroll to the uptodate messages
  dom.parentMessages.scrollTo(0, dom.parentMessages.scrollHeight);
}

function saveCode(event) {
  event.preventDefault();
  const token = dom.inputDialogConfirm.value;
  dom.inputDialogConfirm.value = "";
  cookies.cookify("token", token);

  dom.closeDialog("settings");
}
function saveName(newName) {
  let token = cookies.uncookify("token");
  connect(token);
  userNickName = newName;
  dom.inputDialogConfirm.value = "";
  dom.closeDialog();
  getHistory();
}

function connect(token) {
  return new Promise((resolve, reject) => {
    socket = new WebSocket(`wss://edu.strada.one/websockets?${token}`);
    socket.onopen = () => {
      resolve();
      socket.addEventListener("message", uiMessage);
    };
    socket.onerror = (error) => {
      reject(error);
    };
  });
}

async function sendUserMessage(event) {
  event.preventDefault();
  try {
    const textMessage = dom.inputMessage.value.trim();

    socket.send(JSON.stringify({ text: textMessage }));
  } catch (error) {
    console.error(error);
  } finally {
    dom.inputMessage.value = "";
  }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%  Listeners  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

document.addEventListener("DOMContentLoaded", () => {
  dom.closeDialog("auth");
});

dom.formMessage.addEventListener("submit", (event) => {
  sendUserMessage(event);
});

dom.formAuthEmail.addEventListener("submit", (event) => {
  submitUserEmail(event);
});

dom.formConfirm.addEventListener("submit", (event) => {
  saveCode(event);
});

dom.formName.addEventListener("submit", (event) => {
  changeName(event);
});

dom.btnSubmitCode.addEventListener("click", (event) => {
  const open = "confirm";
  dom.closeDialog(open);
});

// Tasks

// UI: Dialogs - improve

// Feat:

// Errors UI

// Bugs: time bug

// DONE today:// sending my messages to history // scrolldown
