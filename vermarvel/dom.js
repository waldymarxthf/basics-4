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
const lowContainer = document.querySelector(".low-container");
const highContainer = document.querySelector(".high-container");
const checkbox = document.querySelector(".checkbox");
const parentLow = document.querySelector(".tasks-low");
const parentHigh = document.querySelector(".tasks-high");
const sourceDiv = document.querySelector(".hidden");

export default {
  container,
  formHigh,
  formLow,
  fieldHigh,
  fieldLow,
  btnAddHigh,
  btnAddLow,
  inputHigh,
  inputLow,
  lowContainer,
  highContainer,
  checkbox,
  parentLow,
  parentHigh,
  sourceDiv,
};
