import dom from "./dom.js";
import errors from "./errors.js";

let textInput;
var Data = new Date();
var now = Data.toLocaleDateString("ru").split(".").reverse();
var hours = Data.getHours();

function submitForm(e) {
  e.preventDefault();
  textInput = dom.input.value;
  spliceText(textInput);
}

function RenderTimeLeft(left) {
  dom.txt.textContent =
    left[0] + " лет " + left[1] + " дней " + left[2] + " часа ";
}

function chechOnToDay(dates) {
  if (now[1] == dates[1]) {
    return dates[2] - now[2];
  } else {
    return dates[2] - now[2] - 1;
  }
}

function spliceText(text) {
  if (text !== "") {
    const dates = text.split("-");
    if (now[0] > dates[0] || now[1] > dates[1] || now[2] > dates[2]) {
      console.error(errors.errorDateSmoll);
    } else {
      const left = [dates[0] - now[0], chechOnToDay(dates), 24 - hours];
      RenderTimeLeft(left);
    }
  } else {
    console.error(errors.errorClearInput);
  }
}

dom.button.addEventListener("click", submitForm);
