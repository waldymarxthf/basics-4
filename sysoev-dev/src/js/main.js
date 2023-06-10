import { parseISO, intervalToDuration, format, compareAsc } from 'date-fns';
import { UI_ELEMENTS } from './ui';

function resetMinDateInput() {
  const strDateNow = format(new Date(), 'yyyy-MM-dd');
  UI_ELEMENTS.INPUT.setAttribute('min', strDateNow);
}

function comareDates(nowDate, endDate) {
  const result = compareAsc(nowDate, endDate);
  if (result > 0) {
    UI_ELEMENTS.OUTPUT_TITLE.textContent = 'Прошло';
    return;
  }
  UI_ELEMENTS.OUTPUT_TITLE.textContent = 'Осталось';
}

function showInterval(date) {
  UI_ELEMENTS.OUTPUT_YEAR.textContent = date.years;
  UI_ELEMENTS.OUTPUT_DAY.textContent = date.days;
  UI_ELEMENTS.OUTPUT_HOURS.textContent = date.hours;
  UI_ELEMENTS.OUTPUT_MOUNTH.textContent = date.months;
  UI_ELEMENTS.OUTPUT_MINUTES.textContent = date.minutes;
}

function submitFormHandler(event) {
  event.preventDefault();
  const nowDate = new Date();
  const dateString = UI_ELEMENTS.INPUT.value;
  const endDate = parseISO(dateString);
  comareDates(nowDate, endDate);
  const result = intervalToDuration({
    start: nowDate,
    end: endDate,
  });
  showInterval(result);
  event.target.reset();
}

UI_ELEMENTS.FORM.addEventListener('submit', submitFormHandler);
document.addEventListener('DOMContentLoaded', resetMinDateInput);
