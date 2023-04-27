"use strict";

// DOM
const container = document.querySelector(".container");
const formHigh = document.querySelector(".form-high");
const formLow = document.querySelector(".form-low");
const fieldHigh = document.querySelector(".add-task-high");
const fieldLow = document.querySelector(".add-task-low");
const btnAddLow = document.getElementById("btn-low");
const btnAddHigh = document.getElementById("btn-high");
const inputLow = document.getElementById("low");
const inputHigh = document.getElementById("high");
const btnLow = document.getElementById("btn-low");
const lowContainer = document.querySelector(".low-container");
const highContainer = document.querySelector(".high-container");
const checkbox = document.querySelector(".checkbox");
const parentLow = document.querySelector(".tasks-low");
const parentHigh = document.querySelector(".tasks-high");
const sourceDiv = document.querySelector(".hidden");

let newTaskText;
let activeForm = null;
let containerId;

const keeper = [];

// Logic

// Functions

// Active Form

fieldHigh.addEventListener("input", function (event) {
  activeForm = "high";
  console.log(activeForm);
});

fieldLow.addEventListener("input", function (event) {
  activeForm = "low";
  console.log(activeForm);
});

// Logic

// Memory:
// ADD TO MEMMORY

function addNewToMemory(taskName, prio) {
  // assemble
  // create a random ID
  const id = "id-" + Date.now();
  console.log(id);

  // creating an object
  const newT = { task: taskName, complete: false, priority: prio, id: id };

  // push to keeper
  keeper.push(newT);
  render();
  console.log(keeper);
}

// DELETE FROM MEMORY

function deleteInMemory(id) {
  const toBeDeleted = keeper.findIndex((item) => item.id === id);

  keeper.splice(toBeDeleted, 1);
  render();
}

// RENDER

function render() {
  // Resest all the tasks on screen

  parentHigh.innerHTML = "";
  parentLow.innerHTML = "";

  // run through the memory

  keeper.forEach((obj) => {
    // create a template
    const copiedDiv = sourceDiv.cloneNode(true);

    // fill in the template: text
    const textInside = copiedDiv.querySelector(".text");
    textInside.textContent = obj.task;

    // fill in the template: priority
    // (nest the div into correspondig container)
    if (obj.priority === "high") {
      parentHigh.appendChild(copiedDiv);
    }
    if (obj.priority === "low") {
      parentLow.appendChild(copiedDiv);
    }
    // fill in the template: status
    if (obj.complete === true) {
      copiedDiv.classList.add("complete");
    }
    // add an ID linked to a checkbox

    const checkboxInput = copiedDiv.querySelector("input[type='checkbox']");

    // Set the correct initial checked state
    checkboxInput.id = obj.id;
    checkboxInput.checked = obj.complete;

    // Installing ID into checkbox html
    const label = copiedDiv.querySelector("label");
    label.setAttribute("for", obj.id);
    copiedDiv.classList.add(obj.id);

    // make visible
    copiedDiv.classList.remove("hidden");
  });
  resetInputs();
}

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&//

// TASK MANIPULATION
// (Event delegation)

container.addEventListener("click", function (event) {
  const target = event.target;

  // listen for +

  if (target.classList.contains("fa-plus")) {
    // Add text, priority, status: noncomplete
    addTask(event);
  }
  // listen for X

  if (
    target.parentNode.classList.contains("delete") ||
    target.classList.contains("fa-times")
  ) {
    const divElement = target.parentElement.parentElement;

    const classes = divElement.classList;

    const divID = classes[2];

    deleteInMemory(divID);
  }
  // Listen for checkbox
  if (
    target.parentNode.classList.contains("checkbox") ||
    target.classList.contains("checkbox")
  ) {
    checkboxHandler(event);
  }
});

// Service functions

// Add task (with Enter scenario)

function addTask(event) {
  event.preventDefault();

  let prio = activeForm;
  let taskName;
  if (activeForm === "high") {
    taskName = inputHigh.value;
  }
  if (activeForm === "low") {
    taskName = inputLow.value;
  }
  if (activeForm === null || taskName === "") return;
  console.log(taskName, prio);
  addNewToMemory(taskName, prio);
}

// GET ID

function getId(target) {
  if (target.classList.contains("delete")) {
    const parentElement = document.querySelector('[class^="div-id"]');

    console.log(parentElement);
    return parentElement;
  }
  if (target.classList.contains("checkbox")) {
    const pElement = target.closest(".radio-wrapper");
    return pElement.textContent;
  }
}

function resetInputs() {
  inputHigh.value = "";
  inputLow.value = "";
}

function checkboxHandler(event) {
  // retrieve id
  const target = event.target;
  const checkboxID = target.id;

  // locate (address on the keeper array)
  const toBeEdited = keeper.findIndex((item) => item.id == checkboxID);

  // update status on the memory (toggle)
  keeper[toBeEdited].complete = !keeper[toBeEdited].complete;
  render();
}

//-------------------------------------------------
// Following modifications:
// getId - to work for checkbox too;
// DOM - to hide into a module
// Render into a module
T;
