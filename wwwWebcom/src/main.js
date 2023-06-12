import { formatDuration, intervalToDuration } from "../node_modules/date-fns";
import {utcToZonedTime} from "../node_modules/date-fns-tz"

const DOM_ELEMENTS = {
  DATE: document.querySelector(".container-date"),
  FORM: document.querySelector(".container-form"),
  RESULT: document.querySelector(".container-timer"),
};

function calculate(value) {
    const duration = intervalToDuration({
      start: utcToZonedTime(new Date(value),"UTC"),
      end: new Date()
    });

    const formatting = formatDuration(duration, {
      format: ["years", "days", "hours", "minutes"],
    });
    return formatting;
}

function renderCalculate() {
  if(!DOM_ELEMENTS.DATE.value) {
    return DOM_ELEMENTS.RESULT.innerHTML = "Enter the date!!!"
  }
  DOM_ELEMENTS.RESULT.innerHTML = calculate(DOM_ELEMENTS.DATE.value);
}

DOM_ELEMENTS.FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  renderCalculate()
});
