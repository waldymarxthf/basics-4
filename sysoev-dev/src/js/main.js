import { parseISO, intervalToDuration } from 'date-fns';
import { UI_ELEMENTS } from './ui';

function showInterval(date) {
  UI_ELEMENTS.OUTPUT_YEAR.textContent = date.years;
  UI_ELEMENTS.OUTPUT_DAY.textContent = date.days;
  UI_ELEMENTS.OUTPUT_HOURS.textContent = date.hours;
  UI_ELEMENTS.OUTPUT_MOUNTH.textContent = date.months;
}

function submitFormHandler(event) {
  event.preventDefault();
  const nowDate = new Date();
  const dateString = UI_ELEMENTS.INPUT.value;
  const endDate = parseISO(dateString);

  const result = intervalToDuration({
    start: nowDate,
    end: endDate,
  });
  showInterval(result);
  event.target.reset();
}

UI_ELEMENTS.FORM.addEventListener('submit', submitFormHandler);
