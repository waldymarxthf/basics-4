import { UI_ELEMENTS, showInterval } from "./js/ui";
import intervalToDuration from 'date-fns/intervalToDuration'

function submitFormHandler(event) {
  event.preventDefault();
  const nowDate = new Date();
  const endDate = new Date(UI_ELEMENTS.INPUT.value)
  const result = intervalToDuration({
    start: nowDate,
    end: endDate
  });
  showInterval(result);
  event.target.reset();
}

UI_ELEMENTS.FORM.addEventListener('submit', submitFormHandler)