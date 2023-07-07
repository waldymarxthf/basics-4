"use strict";
// CHAT

import dom from "./dom.js";
import { cookies } from "./cookie.js";
// import state from "./state.mjs";
// import utils from "./utils.mjs";

let userNickName = null;
let userEmail = null;
let memory = [];
// let otherNickName = "Sam";
let socket;
const url = `https://edu.strada.one/api/user`;
const urlMessages = `https://edu.strada.one/api/messages/`;

//%%%%%%%%%%%%%%%%%%%%%%%%%%%  Utils  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function timeFormat(time) {
  const date = new Date(time);
  return date.toLocaleString().slice(11, 23);
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%  Business Logic  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

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
  // // Scroll to the uptodate messages
  // dom.parentMessages.scrollTo(0, dom.parentMessages.scrollHeight);
}

//%%%%%%%%%%%%%%%%%%%%%%%%  REQUESTS TO SERVER  %%%%%%%%%%%%%%%%%%%%%%%%%%%%

function changeName(event) {
  event.preventDefault();

  userNickName = dom.inputDialogName.value.trim();

  dom.inputDialogConfirm.value = "";
  if (userNickName.length < 3) {
    dom.errorSettings.textContent =
      "The name should be atleast 3 letters/symbols";

    dom.errorSettings.classList.remove("hidden");
    return;
  } else {
    dom.errorSettings.classList.add("hidden");
  }
  let token = cookies.uncookify("token");
  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name: userNickName }),
  };

  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  disonnect();

  connect(token);
  dom.closeDialog();
  getHistory();
}

function submitUserEmail(event) {
  event.preventDefault();

  userEmail = dom.inputDialogEmail.value.trim();

  if (!userEmail) {
    dom.errorAuth.textContent = "Please fill in your email to authorize";
    dom.errorAuth.classList.remove("hidden");
    return;
  }
  dom.btnSubmitCode.classList.remove("hidden");
  dom.authWrapper.classList.add("hidden");
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
      console.log(data);
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

      const chunkSize = 20;
      for (let i = 0; i < array.length; i += chunkSize) {
        const element = array.slice(i, i + chunkSize);
        memory.push(element.reverse());
      }

      renderHistory();
    })
    .catch((error) => {
      console.error(error);
    });
}

function renderHistory(mode = "initial") {
  if (!memory.length) {
    const notice = "The history is fully loaded";
    dom.notice.textContent = notice;
    return;
  }
  console.log(mode);
  console.log(memory);
  const toBeRenderedNow = memory.at(0);
  memory.shift();
  console.log(toBeRenderedNow);
  const nodes = toBeRenderedNow.map((m) => prepareHTML(m));
  const strings = nodes.map((fragment) => {
    const div = document.createElement("div");
    div.appendChild(fragment.cloneNode("true"));

    return div.innerHTML;
  });
  const html = strings.join("");

  dom.tape.insertAdjacentHTML("afterbegin", html);
  // appendChunk(html);
  // Scroll down if the history download is at the chat openning
  if (mode === "initial") {
    scrollToBottom();
  }
}

function scrollToBottom() {
  dom.parentMessages.scrollTo(0, dom.parentMessages.scrollHeight);
}

// apend to tape
// function appendChunk(html) {
//   let chunk = document.createElement("div");
//   chunk.classList.add("chunk");
//   chunk.innerHTML += html;
//   dom.tape.append(chunk);
// }

// render (add to html) another element of an array

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

function saveCode(event) {
  event.preventDefault();
  const token = dom.inputDialogConfirm.value;
  dom.inputDialogConfirm.value = "";
  cookies.cookify("token", token);

  dom.closeDialog("settings");
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

function disonnect() {
  if (socket) {
    socket.close();
    socket = null;
  }
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

// function senseTopMargin() {
//   let topMarginApproach = dom.tape.getBoundingClientRect().bottom - 300;
//   console.log("scrolling", scrollY);
//   if (dom.tape.scrollTop) console.log("top");
//   console.log(topMarginApproach);
// }

//%%%%%%%%%%%%%%%%%%%%%%%%%%%  Listeners  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// dom.tape.addEventListener(
//   "scroll",
//   function (e) {
//     console.log(scro);
//   },
//   true
// );

dom.tape.addEventListener(
  "scroll",
  function (e) {
    console.log(e);
  },
  true
);

dom.parentMessages.addEventListener("scroll", function (e) {
  // document.querySelector(".other-name").innerText =
  //   "window.scrollY: " + window.scrollY;
  const approach = 0;
  const scrollSpot = dom.tape.offsetTop - dom.parentMessages.scrollTop;
  if (scrollSpot >= approach) {
    renderHistory("loadMore");
  } else {
    dom.notice.textContent = "";
  }
});

dom.tape.addEventListener("scroll", function () {
  console.log(scrollY + "px");
});

document.addEventListener("DOMContentLoaded", () => {
  dom.closeDialog("auth");
});

dom.tape.addEventListener("scroll", () => {
  console.log("SCROLL", scrollTOP);
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
  dom.closeDialog("confirm");
});

dom.main.addEventListener("click", (event) => {
  const target = event.target;

  if (
    target.classList.contains("btn-settings") ||
    target.classList.contains("icon-settings")
  ) {
    dom.closeDialog("settings");
  }

  if (target.classList.contains("icon-exit-settings")) {
    dom.closeDialog();
  }
  if (
    target.classList.contains("icon-exit") ||
    target.classList.contains("btn-exit") ||
    target.classList.contains("icon-exit-settings")
  ) {
    console.log("exit");
    disonnect();
    dom.tape.innerHTML = "";
    dom.closeDialog("auth");
  }
});

// Tasks

// UI:
// check for unconnected ws: ws reconnect
// Feat: loading 20 messages at at time controlled by the scroll event
// Ref: Listeners
// Errors UI

// Bugs:

// DONE today: local time bug fixed, update scroll fix, Dialogs - UI and logic improved, Auth input non empty
