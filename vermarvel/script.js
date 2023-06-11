"use strict";
// DAYS COUNTER
import { formatDistanceStrict, isValid, format } from "date-fns";
import { intervalToDuration } from "date-fns";
import moment from "moment";
moment().format();
import dom from "./dom.js";
import { store } from "./store.js";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";
// let state = store.clear();
let state = store.get("state") || [];
// Helper funcs
function resetInputs() {
  dom.nameInput.value = "";
  dom.dateSelect.value = "";
}

function resetItemsScr() {
  dom.parentItems.innerHTML = "";
}

function capitalize(str) {
  console.log(state);
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(inputDate, standard) {
  const date = new Date(inputDate);
  if (standard === "HH:mm, MMM dd, yyyy") {
    return format(date, "HH:mm, MMM dd, yyyy");
  }
  if (standard === "YYYY-MM-dd HH:MM:SS") {
    return format(date, "YYYY-MM-dd HH:MM:SS");
  }
}

function deleteItem(id) {
  state = state.filter((i) => i.id !== id);
  console.log(state);
  store.set("state", state);
  return renderUI();
}

const fp = flatpickr(dom.dateSelect, {
  enableTime: true,
  dateFormat: "YYYY-mm-dd",
});

// import { formatDistanceStrict } from "date-fns";

function timeDifference(inputDate) {
  const now = moment();
  const input = moment(inputDate);
  const diff = moment.duration(Math.abs(now.diff(input)));

  const years = diff.years();
  const months = diff.months();
  const days = diff.days();
  const hours = diff.hours();
  const minutes = diff.minutes();
  const seconds = diff.seconds();

  return `<strong>${years}</strong> years <strong>${months}</strong> months <strong>${days}</strong> days <strong>${hours}</strong> hours <strong>${minutes}</strong> minutes <strong>${seconds}</strong> seconds`;
}

//%%%%%%%%%%%%%%%%%% BUSINESS LOGICS %%%%%%%%%%%%%%%%%%%%
function renderUI() {
  // Clear the screens
  resetItemsScr();
  // Get the updated state
  state = store.get("state") || [];
  // Guard clause
  if (!state.length) return;
  console.log(state);
  state.forEach((obj) => {
    console.log(obj.inputDate);
    // Assemble a div
    const str = timeDifference(obj.inputDate);
    console.log(str);
    const html = `<div class="item item-template">
          <div class="upper-box">
            <div id="uiName">${obj.name}</div>
          </div>
          <div class="middle-box">
            <div id="ui-target-date">${obj.dateUI}</div>
            <i class="fa-solid fa-xmark btn-del" id="${obj.id}" ></i>
            <div id="to-go" class="hidden"></div>
            <div id="left" class="hidden">Left</div>
          </div>
          <div class="lower-box">
            <div id="output">${str}</div>
          </div>
        </div>`;
    // Append the div
    dom.parentItems.innerHTML += html;
  });
}

//%%%%%%%%%%%%%%%%%% EVENT-LISTENERS %%%%%%%%%%%%%%%%%%%%

// Submit date and name, add an item to state
dom.btnAdd.addEventListener("click", function (event) {
  event.preventDefault();
  const selectedDate = fp.selectedDates[0];
  console.log(selectedDate);
  // Guard clause
  if (!selectedDate) {
    console.log("No date selected");
    return;
  }
  const name = capitalize(dom.nameInput.value);

  if (!isValid(new Date(selectedDate))) {
    console.log("Invalid date:", selectedDate);
    return;
  }
  if (name === "" || selectedDate === "") return;

  const obj = {};
  obj.name = name;
  obj.dateUI = formatDate(selectedDate, "HH:mm, MMM dd, yyyy");
  obj.inputDate = selectedDate;
  obj.id = Math.round(Math.random() * 100000000);
  console.log(selectedDate);
  // Add the assembled item to the state
  state.push(obj);
  // Store the updated state
  store.set("state", state);
  // Clear the inputs
  resetInputs();
  // Render all items
  renderUI();
  console.log(obj);
});

dom.parentItems.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
  const target = event.target;

  if (target.classList.contains("btn-settings")) {
    console.log(event, target);
    console.log("Settings are not yet ready");
  }
});

dom.wrapper.addEventListener("click", function (event) {
  console.log(event);
  const target = event.target;

  if (target.classList.contains("btn-del")) {
    const id = Number(target.id);
    deleteItem(id);
    console.log("deleteeeeeeeee", id);
  }
});

// Handle radio input

// Start
document.addEventListener("DOMContentLoaded", renderUI);

// Further work:
// BUGS

// FEATURES
// Timeinterval
// Add ago or left to the string
// Sorting btn
// classes for future and past items

// DESIGN

//DONE TODAY:
// Delete item *
// bad calc ears, months, weeks, etc *
